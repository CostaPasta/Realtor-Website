import { ogContentType, ogSize, landlordOgAlt, renderLandlordOgImage } from '@/lib/og';

export const alt = landlordOgAlt('en');
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderLandlordOgImage('en');
}
