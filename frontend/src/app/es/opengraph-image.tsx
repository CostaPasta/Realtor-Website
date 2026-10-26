import { ogAlt, ogContentType, ogSize, renderOgImage } from '@/lib/og';

export const alt = ogAlt('es');
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage('es');
}
