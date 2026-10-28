import { neighborhoods } from '@/data/neighborhoods';
import { localizeNeighborhood } from '@/data/neighborhoods-i18n';
import { ogContentType, ogSize, renderAreaOgImage } from '@/lib/og';

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const base = neighborhoods.find((n) => n.slug === slug);
  const n = base ? localizeNeighborhood(base, 'es') : undefined;
  return renderAreaOgImage('es', n?.name ?? 'Palm Beach County', n?.imageSrc);
}
