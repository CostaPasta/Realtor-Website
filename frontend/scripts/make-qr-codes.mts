// Writes a QR code for every printed or mailed short link in short-links.ts to marketing/qr/.
// (Social links are typed or tapped in posts, so they don't get one.)
// SVG is for print shops and Canva; PNG (1200px) is for Word, Google Docs, and phones.
//
//   npm run qr

import { mkdirSync } from 'node:fs';
import path from 'node:path';
import QRCode from 'qrcode';
import { expandShortLinks } from '../short-links';

const SITE = 'https://www.josecostarealtor.com';
const OUT = path.resolve(import.meta.dirname, '../../marketing/qr');
const NAVY = '#0D2442';

mkdirSync(OUT, { recursive: true });

for (const { path: shortPath, medium } of expandShortLinks()) {
  if (medium === 'social') continue;
  const url = `${SITE}${shortPath}`;
  const name = shortPath.slice(1).replace(/\//g, '-');
  const options = { errorCorrectionLevel: 'M' as const, margin: 2, color: { dark: NAVY, light: '#FFFFFF' } };
  await QRCode.toFile(path.join(OUT, `${name}.svg`), url, { ...options, type: 'svg' });
  await QRCode.toFile(path.join(OUT, `${name}.png`), url, { ...options, type: 'png', width: 1200 });
  console.log(`${name}  ${url}`);
}
