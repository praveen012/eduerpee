// One-off generator for public/logo.png — referenced by the Organization
// JSON-LD `logo` field on HomePage.tsx (Google's structured-data guidance
// wants a raster logo; SVG support for the Organization logo field is
// unreliable). Source: public/logo-dark.svg (the square icon mark, already
// used as-is in the footer). Re-run if the mark changes:
//   node scripts/generate-logo-png.mjs
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const svgPath = path.join(__dirname, "..", "public", "logo-dark.svg");
const outPath = path.join(__dirname, "..", "public", "logo.png");
const svg = readFileSync(svgPath, "utf8");

const html = `<!doctype html><html><head><style>
  * { margin:0; padding:0; }
  html,body { width:512px; height:512px; display:flex; align-items:center; justify-content:center; background:transparent; }
  svg { width:512px; height:512px; }
</style></head><body>${svg}</body></html>`;

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const page = await browser.newPage({ viewport: { width: 512, height: 512 } });
await page.setContent(html);
await page.screenshot({ path: outPath, omitBackground: true });
await browser.close();
console.log(`Wrote ${outPath}`);
