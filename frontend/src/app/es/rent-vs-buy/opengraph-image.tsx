import { ogContentType, ogSize, calculatorOgAlt, renderCalculatorOgImage } from '@/lib/og';

export const alt = calculatorOgAlt('es');
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderCalculatorOgImage('es');
}
