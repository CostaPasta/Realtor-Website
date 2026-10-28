import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';
import { visibleMarketUpdates } from '@/data/market-updates';
import { whatsappLink } from '@/lib/whatsapp';
import { pageMetadata } from '@/i18n/metadata';

export async function generateStaticParams() {
  return visibleMarketUpdates().map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const update = visibleMarketUpdates().find((u) => u.slug === slug);
  if (!update) return {};
  return pageMetadata(`/market-updates/${update.slug}`, { title: update.title, description: update.summary });
}

export default async function MarketUpdatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const update = visibleMarketUpdates().find((u) => u.slug === slug);
  if (!update) notFound();

  const date = new Date(update.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/market-updates"
              className="font-sans text-xs text-white/60 hover:text-gold transition-colors"
            >
              Market Updates
            </Link>
            <span className="text-white/30">/</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="font-sans text-xs font-semibold px-3 py-1 rounded-full bg-cream-dark text-navy"
            >
              {update.county}
            </span>
            <span className="font-sans text-xs text-white/50">{date}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
            {update.title}
          </h1>
        </div>
      </section>

      {/* ─── Article Body ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-lg text-gray-600 leading-relaxed border-l-4 border-gold pl-5 mb-10">
            {update.summary}
          </p>
          <div className="prose prose-lg max-w-none">
            {update.body.split('\n\n').map((block, i) =>
              block.startsWith('## ') ? (
                <h2 key={i} className="font-serif text-2xl font-bold text-navy mt-10 mb-4 first:mt-0">
                  {block.slice(3)}
                </h2>
              ) : (
                <p key={i} className="font-sans text-gray-700 leading-relaxed mb-6 text-base">
                  {block}
                </p>
              )
            )}
          </div>

          {update.sources && update.sources.length > 0 && (
            <div className="mt-10 pt-6 border-t border-gray-100">
              <h2 className="font-sans text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">
                Sources
              </h2>
              <ul className="space-y-2 font-sans text-sm text-gray-600 list-disc pl-5">
                {update.sources.map((source) => (
                  <li key={source.label}>
                    {source.url ? (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-gray-300 hover:text-navy hover:decoration-gold"
                      >
                        {source.label}
                      </a>
                    ) : (
                      source.label
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-sans text-xs text-gray-500">
                Asking rents are list prices, not signed leases. Figures are deemed reliable but not
                guaranteed.
              </p>
            </div>
          )}

          {/* Contact card: questions about the numbers go to Jose */}
          <div className="mt-10 rounded-2xl bg-cream p-6 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold/50 shrink-0">
                <Image
                  src="/images/jose-portrait.jpeg"
                  alt="Jose Costa"
                  fill
                  sizes="56px"
                  className="object-cover object-[50%_25%]"
                />
              </div>
              <div>
                <p className="font-sans font-semibold text-navy text-sm">
                  Questions about these numbers for a specific home?
                </p>
                <p className="font-sans text-xs text-gray-500 mt-0.5">
                  Jose Costa, Realtor® · Atlantic Florida Properties · English, Português, Español
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+19546141351"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-navy text-white font-sans text-sm font-semibold hover:bg-navy-light transition-colors"
              >
                <Phone size={15} />
                Call
              </a>
              <a
                href={whatsappLink('en', 'general')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-whatsapp-ink font-sans text-sm font-semibold hover:brightness-95 bg-whatsapp"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/market-updates"
              className="font-sans text-sm font-semibold text-navy hover:text-gold transition-colors"
            >
              ← All Market Updates
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Have questions about what this means for you?"
        subtitle="Every client's situation is different. Talk to Jose directly for a personalized read on how current market conditions affect your buying or selling timeline."
        primaryCTA={{ label: 'Contact Jose', href: '/contact' }}
        secondaryCTA={{ label: 'Browse More Updates', href: '/market-updates' }}
      />
    </>
  );
}
