import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NeighborhoodContent from '@/components/pages/NeighborhoodContent';
import { neighborhoods } from '@/data/neighborhoods';
import { neighborhoodMetadata } from '@/i18n/neighborhood-metadata';

export async function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return neighborhoodMetadata(slug, 'en');
}

export default async function NeighborhoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) notFound();
  return <NeighborhoodContent neighborhood={neighborhood} locale="en" />;
}
