import { ogContentType, ogSize, calculatorOgAlt, renderCalculatorOgImage } from '@/lib/og';

export const alt = calculatorOgAlt('en');
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderCalculatorOgImage('en');
}
