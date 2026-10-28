import { ogContentType, ogSize, calculatorOgAlt, renderCalculatorOgImage } from '@/lib/og';

export const alt = calculatorOgAlt('pt');
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderCalculatorOgImage('pt');
}
