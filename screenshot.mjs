import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const url = process.argv[2] || 'http://localhost:3000';

const dir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// ── Sections to capture (selector → filename label) ──
const sections = [
  { label: '1-navbar',     selector: '#navbar' },
  { label: '2-hero',       selector: 'body > section:nth-of-type(1)' },
  { label: '3-search-bar', selector: 'body > section:nth-of-type(2)' },
  { label: '4-listings',   selector: '#listings' },
  { label: '5-why-us',     selector: '#about' },
  { label: '6-testimonials', selector: '#testimonials' },
  { label: '7-cta-banner', selector: 'body > section:nth-of-type(6)' },
  { label: '8-contact',    selector: '#contact' },
  { label: '9-footer',     selector: 'footer' },
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

// Trigger scroll-reveal so all sections are visible
await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
});

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
console.log(`\nDone — ${sections.length} component screenshots saved to: ${dir}`);
