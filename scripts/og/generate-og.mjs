import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateOgImage() {
  const htmlPath = path.join(__dirname, 'og.html');
  const outputDir = path.resolve(__dirname, '../../public');
  const outputPath = path.join(outputDir, 'og-image.png');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Generating OG image from ${htmlPath}...`);

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({
      viewport: { width: 1200, height: 630 },
      deviceScaleFactor: 1,
    });

    const fileUrl = `file://${path.resolve(htmlPath)}`;
    await page.goto(fileUrl, { waitUntil: 'load' });

    // Wait for fonts to load completely
    await page.evaluate(async () => {
      await document.fonts.ready;
    });

    await page.screenshot({
      path: outputPath,
      type: 'png',
      clip: { x: 0, y: 0, width: 1200, height: 630 },
    });

    const stats = fs.statSync(outputPath);
    const sizeKb = (stats.size / 1024).toFixed(1);
    console.log(`Successfully saved ${outputPath} (${sizeKb} KB)`);

    if (stats.size > 300 * 1024) {
      console.warn(`Warning: Image size exceeds 300 KB (${sizeKb} KB)`);
    }
  } finally {
    await browser.close();
  }
}

generateOgImage().catch((err) => {
  console.error('Error generating OG image:', err);
  process.exit(1);
});
