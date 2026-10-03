// One-off generator for public/og-image.png — the default social-share
// image used by SEO.tsx (og:image / twitter:image). Not part of the build
// pipeline; re-run manually if the brand visuals change:
//   node scripts/generate-og-image.mjs
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatePath = path.join(__dirname, "og-image-template.html");
const outPath = path.join(__dirname, "..", "public", "og-image.png");

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(`file://${templatePath}`);
await page.waitForTimeout(150);
await page.screenshot({ path: outPath });
await browser.close();
console.log(`Wrote ${outPath}`);
