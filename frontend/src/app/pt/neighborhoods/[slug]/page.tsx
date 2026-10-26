import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NeighborhoodContent from '@/components/pages/NeighborhoodContent';
import { neighborhoods } from '@/data/neighborhoods';
import { TRANSLATED_NEIGHBORHOODS, localizeNeighborhood } from '@/data/neighborhoods-i18n';
import { neighborhoodMetadata } from '@/i18n/neighborhood-metadata';

// Only the translated neighborhoods exist here; everything else 404s.
export const dynamicParams = false;

export async function generateStaticParams() {
  return TRANSLATED_NEIGHBORHOODS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return neighborhoodMetadata(slug, 'pt');
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) notFound();
  return <NeighborhoodContent neighborhood={localizeNeighborhood(neighborhood, 'pt')} locale="pt" />;
}
