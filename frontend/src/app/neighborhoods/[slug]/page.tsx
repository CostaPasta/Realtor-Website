import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, TrendingUp, Clock, MapPin, Users } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { neighborhoods } from '@/data/neighborhoods';

export async function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) return {};
  return {
    title: `${neighborhood.name} Real Estate`,
    description: `Looking to rent, buy, or sell in ${neighborhood.name}? Jose Costa is a Palm Beach County realtor fluent in English, Spanish, and Portuguese serving ${neighborhood.county} County.`,
  };
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) notFound();

  const {
    name,
    county,
    tagline,
    description,
    highlights,
    medianHomePrice,
    avgDaysOnMarket,
    bestFor,
    imageSrc,
    resources,
    population,
  } = neighborhood;

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-navy pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        {imageSrc && (
          <>
            <Image
              src={imageSrc}
              alt={`${name} skyline`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  'linear-gradient(105deg, rgba(8, 18, 28, 0.90) 0%, rgba(8, 18, 28, 0.72) 55%, rgba(8, 18, 28, 0.45) 100%)',
              }}
            />
          </>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/neighborhoods"
              className="font-sans text-xs text-white/60 hover:text-gold transition-colors"
            >
              Neighborhoods
            </Link>
            <span className="text-white/30">/</span>
            <span className="font-sans text-xs text-white/60">{name}</span>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <span className="inline-flex items-center gap-1 font-sans text-xs font-semibold px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/30">
              <MapPin size={10} />
              {county} County
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            {name}
          </h1>
          <p className="mt-4 font-sans text-xl text-gold">{tagline}</p>
        </div>
      </section>

      {/* ─── Stats Row ─── */}
      <section className="bg-cream py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid gap-6 md:gap-10 ${
              population ? 'grid-cols-2 sm:grid-cols-4 max-w-2xl' : 'grid-cols-3 max-w-lg'
            }`}
          >
            <div>
              <p className="font-sans text-xs text-gray-500 flex items-center gap-1 mb-1">
                <TrendingUp size={12} />
                Median Price
              </p>
              <p className="font-sans font-bold text-navy text-xl">{medianHomePrice}</p>
            </div>
            <div>
              <p className="font-sans text-xs text-gray-500 flex items-center gap-1 mb-1">
                <Clock size={12} />
                Avg Days on Market
              </p>
              <p className="font-sans font-bold text-navy text-xl">{avgDaysOnMarket} days</p>
            </div>
            <div>
              <p className="font-sans text-xs text-gray-500 flex items-center gap-1 mb-1">
                <MapPin size={12} />
                County
              </p>
              <p className="font-sans font-bold text-navy text-xl">{county}</p>
            </div>
            {population && (
              <div>
                <p className="font-sans text-xs text-gray-500 flex items-center gap-1 mb-1">
                  <Users size={12} />
                  Population
                </p>
                <p className="font-sans font-bold text-navy text-xl">{population}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h3 className="font-serif text-xl font-bold text-navy mb-5">
                Neighborhood Highlights
              </h3>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                    <span className="font-sans text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-serif text-2xl font-bold text-navy mt-10 mb-4">
                About {name}
              </h2>
              <p className="font-sans text-gray-700 leading-relaxed text-base whitespace-pre-line">{description}</p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-cream rounded-2xl p-6">
                <p className="font-sans text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Best For
                </p>
                <p className="font-sans text-navy font-medium">{bestFor}</p>
              </div>

              <div className="bg-navy rounded-2xl p-6 text-white">
                <h3 className="font-serif text-lg font-bold mb-3">
                  Renting, buying, or selling in {name}?
                </h3>
                <p className="font-sans text-sm text-white/70 mb-5">
                  Jose knows this neighborhood. Get a candid conversation about what your options
                  look like right now.
                </p>
                <Link
                  href="/contact"
                  className="block text-center font-sans text-sm font-semibold px-5 py-3 rounded-full bg-gold text-navy hover:bg-gold-light transition-colors"
                >
                  Talk to Jose
                </Link>
              </div>

              {resources.length > 0 && (
                <div className="bg-cream rounded-2xl p-6">
                  <p className="font-sans text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Local Resources
                  </p>
                  <ul className="space-y-2">
                    {resources.map((resource) => (
                      <li key={resource.url}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-sm text-navy hover:text-gold transition-colors"
                        >
                          {resource.label} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to rent, buy, or sell in ${name}?`}
        subtitle={`Jose has deep experience in ${name} and ${county} County. Let's start with a free, no-pressure conversation about your goals.`}
        primaryCTA={{ label: 'Schedule a Free Call', href: '/contact' }}
        secondaryCTA={{ label: 'View All Neighborhoods', href: '/neighborhoods' }}
      />
    </>
  );
}
