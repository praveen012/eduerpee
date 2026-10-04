// Post-build static prerendering for SEO.
//
// Why: this is a pure client-side SPA (index.html is an empty <div id="root">
// + a script tag). Googlebot renders JS so it eventually sees the real
// title/meta/content, but rendering is queued and can lag by days, and many
// other crawlers (Bing, and most link-unfurlers — Slack, WhatsApp, LinkedIn,
// X) don't execute JS at all, so they'd see nothing.
//
// This script runs after `vite build`. It boots a static preview server over
// the real dist/ output, visits every URL already listed in the site's own
// sitemaps (so it can't drift out of sync with what's actually routed), lets
// the SPA render normally (including the per-page <title>/meta/JSON-LD that
// react-helmet-async injects), and writes the fully-rendered HTML to
// dist/<path>/index.html. The original dist/index.html (and client-side
// routing/hydration) is untouched — this only adds pre-rendered snapshots
// that static hosts serve instead, via normal `try_files $uri $uri/
// /index.html` directory-index behavior. No server, no SSR framework, no
// change to how the app runs once loaded.
//
// Usage: node scripts/prerender.mjs   (wired as "postbuild" in package.json)

// Uses playwright-core (no bundled browser download) rather than the full
// `playwright` package. Locally (this sandbox, or any dev machine with
// Playwright's own browsers installed) we point at that pre-installed
// Chromium. On Vercel's build image there is no such pre-installed browser
// and `playwright install` is not reliable there, so we fall back to
// @sparticuz/chromium — a portable Chromium build made for serverless/CI
// Linux images (originally for AWS Lambda, also used for Vercel builds and
// functions) that ships its own binary and launch args.
import { chromium } from "playwright-core";
import sparticuzChromium from "@sparticuz/chromium";
import { preview } from "vite";
import { readFileSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const distDir = path.join(root, "dist");

const SITEMAPS = [
  "sitemap-en.xml",
  "sitemap-hi.xml",
  "sitemap-es.xml",
  "sitemap-ar.xml",
  "sitemap-fr.xml",
  "sitemap-de.xml",
  "sitemap-pt.xml",
];
const SITE_URL = "https://www.eduerpee.com";

function collectRoutes() {
  const routes = new Set();
  for (const file of SITEMAPS) {
    const fp = path.join(root, "public", file);
    if (!existsSync(fp)) continue;
    const xml = readFileSync(fp, "utf8");
    for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const url = match[1];
      if (!url.startsWith(SITE_URL)) continue;
      const routePath = url.slice(SITE_URL.length) || "/";
      routes.add(routePath);
    }
  }
  return [...routes].sort();
}

function outFileForRoute(routePath) {
  // "/en" -> dist/en/index.html, "/en/about" -> dist/en/about/index.html
  const clean = routePath.replace(/\/+$/, "");
  return path.join(distDir, clean, "index.html");
}

async function main() {
  if (!existsSync(distDir)) {
    console.error("dist/ not found — run `vite build` before prerendering.");
    process.exit(1);
  }

  const routes = collectRoutes();
  if (routes.length === 0) {
    console.warn("No routes found in public/sitemap-*.xml — skipping prerender.");
    return;
  }
  console.log(`Prerendering ${routes.length} routes...`);

  const server = await preview({
    root,
    preview: { port: 4576, strictPort: true, host: "127.0.0.1" },
  });
  const base = `http://127.0.0.1:4576`;

  const localChromium = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
  let launchOpts;
  if (existsSync(localChromium)) {
    // Dev sandbox / any machine with Playwright's own browsers installed.
    launchOpts = { executablePath: localChromium };
  } else {
    // Vercel build image (or any environment without a pre-installed
    // browser): use the serverless-friendly Chromium build.
    launchOpts = {
      executablePath: await sparticuzChromium.executablePath(),
      args: sparticuzChromium.args,
    };
  }
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage();

  let ok = 0;
  let failed = [];
  for (const routePath of routes) {
    try {
      await page.goto(`${base}${routePath}`, { waitUntil: "networkidle", timeout: 30000 });
      // Let react-helmet-async's effect flush and any lazy chunk settle.
      await page.waitForFunction(
        () => !!document.querySelector("h1") && document.title.length > 0,
        { timeout: 10000 },
      );
      await page.waitForTimeout(150);
      const html = await page.content();
      const outFile = outFileForRoute(routePath);
      mkdirSync(path.dirname(outFile), { recursive: true });
      writeFileSync(outFile, html);
      ok++;
    } catch (err) {
      failed.push([routePath, err.message]);
    }
  }

  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));

  console.log(`Prerendered ${ok}/${routes.length} routes into dist/.`);
  if (failed.length) {
    console.warn("Failed routes:");
    for (const [r, msg] of failed) console.warn(`  ${r}: ${msg}`);
    process.exitCode = 1;
  }
}

main();
