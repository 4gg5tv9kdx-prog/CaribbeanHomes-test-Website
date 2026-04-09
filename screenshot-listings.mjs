import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const url = process.argv[2] || 'http://localhost:3000/listings.html';

const dir = path.join(__dirname, 'listings screenshots');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// ── Sections to capture (selector → filename label) ──
const sections = [
  { label: '1-navbar',        selector: '#navbar' },
  { label: '2-hero',          selector: 'section.grain' },
  { label: '3-filter-sidebar', selector: '#filter-sidebar' },
  { label: '4-controls-bar',  selector: '.controls-bar' },
  { label: '5-listings-grid', selector: '#listings-grid' },
  { label: '6-pagination',    selector: '.pagination' },
  { label: '7-footer',        selector: 'footer' },
];

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

// Allow fonts, animations, and images to settle
await new Promise(r => setTimeout(r, 1500));

// Trigger scroll-reveal so all cards are visible
await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
});

// Full-page screenshot first
const fullPath = path.join(dir, 'screenshot-0-full-page.png');
await page.screenshot({ path: fullPath, fullPage: true });
console.log(`Saved → ${fullPath}`);

for (const { label, selector } of sections) {
  const element = await page.$(selector);
  if (!element) {
    console.warn(`  ⚠  Could not find selector: ${selector} (${label}) — skipping`);
    continue;
  }

  const outPath = path.join(dir, `screenshot-${label}.png`);
  await element.screenshot({ path: outPath });
  console.log(`Saved → ${outPath}`);
}

await browser.close();
console.log(`\nDone — ${sections.length + 1} screenshots saved to: ${dir}`);
