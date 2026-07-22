import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Quote,
  TreePine,
  ShoppingBag,
  Utensils,
  Users,
  Star,
  Train,
  MessageCircle,
  Phone,
  GraduationCap,
  Home,
  ShieldCheck,
  Sparkles,
  KeyRound,
  DollarSign,
  Calendar,
  Waves,
  Wallet,
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import MobileStickyBar from '@/components/MobileStickyBar';
import SectionHeading from '@/components/SectionHeading';
import { neighborhoods } from '@/data/neighborhoods';

const POI_ICONS = {
  Park: TreePine,
  Shopping: ShoppingBag,
  Dining: Utensils,
  Community: Users,
  Recreation: Star,
  Transit: Train,
} as const;

const POI_COLORS = {
  Park: '#4A7C59',
  Shopping: '#3D6B96',
  Dining: '#D85A30',
  Community: '#8B5FA8',
  Recreation: '#2A9D8F',
  Transit: '#6B7280',
} as const;

const HIGHLIGHT_ICONS = [Star, Home, TreePine, ShieldCheck, Users, Sparkles];

function getHighlightIcon(text: string) {
  const t = text.toLowerCase();
  if (/divers|brazilian|venezuelan|colombian|caribbean|haitian|cultur|multilingual|spanish-speaking|latin american|cuban/.test(t)) return Users;
  if (/waterfront|intracoastal|oceanfront|beachfront|canal|marina|inlet|boating|fishing|sailfish/.test(t)) return Waves;
  if (/\bpark(?!ing)|acre|trail|nature|\blake|bird sanctuary|tree city|green space/.test(t)) return TreePine;
  if (/school|education|a-rated/.test(t)) return GraduationCap;
  if (/\brent|\btenant|\blandlord|\blease/.test(t)) return KeyRound;
  if (/afford|\bvalue|undercut|cheaper|\bfraction|\bprice|appreciat/.test(t)) return DollarSign;
  if (/\bmall\b|retail|shopping/.test(t)) return ShoppingBag;
  if (/construction|\bspace|\blot\b|newer construction|square foot/.test(t)) return Home;
  if (/museum|gallery|downtown|theater|\barts\b|festival/.test(t)) return Sparkles;
  if (/proximity|airport|highway|turnpike|i-95/.test(t)) return Train;
  if (/communit/.test(t)) return Users;
  return null;
}

const CENSUS_ICONS = {
  population: Users,
  medianAge: Calendar,
  medianHouseholdIncome: DollarSign,
  perCapitaIncome: Wallet,
  ownerOccupied: Home,
  renterOccupied: KeyRound,
} as const;

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
    region,
    tagline,
    description,
    highlights,
    population,
    imageSrc,
    resources,
    joseNote,
    lifestyleTags,
    census,
    budgetGuide,
    schools,
    schoolNote,
    pointsOfInterest,
    rentalMarket,
    buyerNote,
    sellerNote,
    testimonial,
  } = neighborhood;

  return (
    <>
      {/* ─── Section 1: Hero ─── */}
      <section className="relative bg-navy overflow-hidden min-h-[380px] md:min-h-[480px] flex flex-col">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={`${name} skyline`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(to top, rgba(8, 18, 28, 0.97) 0%, rgba(8, 18, 28, 0.85) 35%, rgba(8, 18, 28, 0.5) 65%, rgba(8, 18, 28, 0.25) 100%)',
          }}
        />
        <div className="relative z-10 flex-1 flex flex-col justify-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-6 w-full">
            <div className="flex items-center gap-2 mb-4" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
              <Link
                href="/neighborhoods"
                className="font-sans text-xs text-white/80 hover:text-gold transition-colors"
              >
                Neighborhoods
              </Link>
              <span className="text-white/40">/</span>
              <span className="font-sans text-xs text-white/80">{name}</span>
            </div>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="inline-flex items-center gap-1 font-sans text-xs font-semibold px-3 py-1 rounded-full bg-navy/70 backdrop-blur-sm text-gold border border-gold/40">
                <MapPin size={10} />
                {county} County
              </span>
              {region !== `${county} County` && (
                <span className="inline-flex items-center gap-1 font-sans text-xs font-semibold px-3 py-1 rounded-full bg-navy/70 backdrop-blur-sm text-white border border-white/30">
                  {region}
                </span>
              )}
            </div>
            <h1
              className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
            >
              {name}
            </h1>
            <p className="mt-4 font-sans text-xl text-gold" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
              {tagline}
            </p>
          </div>

          {/* Quick stat strip */}
          <div className="relative bg-navy/70 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-sans text-[10px] text-white/50 flex items-center gap-1 mb-0.5">
                    <MapPin size={11} />
                    County
                  </p>
                  <p className="font-sans font-bold text-white text-base">{county}</p>
                </div>
                {(census?.population ?? population) && (
                  <div>
                    <p className="font-sans text-[10px] text-white/50 flex items-center gap-1 mb-0.5">
                      <Users size={11} />
                      Population
                    </p>
                    <p className="font-sans font-bold text-white text-base">
                      {census?.population ?? population}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="hero-sentinel" aria-hidden="true" />

      {/* ─── Section 2: Lifestyle Tag Chips ─── */}
      {lifestyleTags && lifestyleTags.length > 0 && (
        <section className="bg-cream py-4 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto md:overflow-visible md:flex-wrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {lifestyleTags.map((tag) => (
                <span
                  key={tag}
                  className="shrink-0 font-sans text-xs font-semibold px-4 py-2 rounded-full bg-white text-navy border border-gray-200 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Two-column layout: main content + sticky sidebar ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
          {/* Main content column */}
          <div className="space-y-20 min-w-0">
            {/* Section 3: Highlights as icon cards */}
            <div>
              <div className="mb-8">
                <SectionHeading eyebrow="Why Here" title={`Why ${name}?`} align="left" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlights.map((item, i) => {
                  const Icon = getHighlightIcon(item) ?? HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length];
                  return (
                    <AnimateOnScroll key={item} delay={i * 0.08}>
                      <div className="bg-white border border-gray-100 rounded-2xl p-6 h-full">
                        <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center mb-4">
                          <Icon size={18} className="text-gold" />
                        </div>
                        <p className="font-sans text-sm text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    </AnimateOnScroll>
                  );
                })}
              </div>
            </div>

            {/* Section 4: Jose's Personal Note */}
            {joseNote && (
              <AnimateOnScroll>
                <div className="bg-cream rounded-2xl p-8 md:p-12 text-center">
                  <p className="text-xs font-sans font-semibold tracking-widest uppercase text-gold mb-5">
                    Jose&apos;s Take
                  </p>
                  <Quote size={36} className="text-gold mx-auto mb-4" aria-hidden="true" />
                  <p className="font-serif text-lg md:text-xl text-navy italic leading-relaxed">
                    {joseNote}
                  </p>
                  <div className="mt-8 flex items-center justify-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gold/40 shrink-0">
                      <Image
                        src="/images/jose-portrait.jpeg"
                        alt="Jose Costa"
                        fill
                        sizes="48px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-sans font-semibold text-navy text-sm">Jose Costa</p>
                      <a
                        href="tel:+19546141351"
                        className="font-sans text-xs text-gray-500 hover:text-gold transition-colors"
                      >
                        (954) 614-1351
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            )}

            {/* Testimonial — add a real client quote to neighborhoods.ts to activate */}
            {testimonial && (
              <AnimateOnScroll>
                <div className="bg-cream rounded-2xl p-8 md:p-10">
                  <Quote size={28} className="text-gold mb-4" aria-hidden="true" />
                  <blockquote className="font-serif text-lg text-navy italic leading-relaxed mb-5">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-px bg-gold/50 shrink-0" />
                    <p className="font-sans text-sm font-semibold text-gray-500">{testimonial.attribution}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            )}

            {/* Section 5: Community Snapshot */}
            {census && (
              <div>
                <div className="mb-8">
                  <SectionHeading eyebrow="The Community" title={`Who lives in ${name}?`} align="left" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { key: 'population' as const, label: 'Population', value: census.population },
                    { key: 'medianAge' as const, label: 'Median Age', value: census.medianAge },
                    { key: 'medianHouseholdIncome' as const, label: 'Median Household Income', value: census.medianHouseholdIncome },
                    { key: 'perCapitaIncome' as const, label: 'Per Capita Income', value: census.perCapitaIncome },
                    { key: 'ownerOccupied' as const, label: 'Owner-Occupied', value: census.ownerOccupied },
                    { key: 'renterOccupied' as const, label: 'Renter-Occupied', value: census.renterOccupied },
                  ].map((stat, i) => {
                    const Icon = CENSUS_ICONS[stat.key];
                    return (
                      <AnimateOnScroll key={stat.label} delay={i * 0.05}>
                        <div className="bg-white border border-gray-100 rounded-xl p-5 text-center h-full flex flex-col items-center">
                          <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center mb-3">
                            <Icon size={16} className="text-gold" />
                          </div>
                          <p className="font-serif font-bold text-navy text-xl">{stat.value}</p>
                          <p className="font-sans text-xs text-gray-500 mt-1">{stat.label}</p>
                        </div>
                      </AnimateOnScroll>
                    );
                  })}
                </div>
                <p className="mt-6 font-sans text-xs text-gray-400">{census.source}</p>
              </div>
            )}

            {/* Section 6: What Your Budget Gets You */}
            {budgetGuide && budgetGuide.length > 0 && (
              <div className="bg-cream rounded-2xl p-8">
                <SectionHeading
                  eyebrow="What You'll Pay"
                  title="What does your budget get you here?"
                  subtitle="Honest ranges — not the headline number on Zillow."
                  align="left"
                />
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {budgetGuide.map((tier, i) => (
                    <AnimateOnScroll key={`${tier.tier}-${i}`} delay={i * 0.08}>
                      <div className="bg-white rounded-xl p-6 h-full">
                        <p className="font-sans font-bold text-gold text-sm uppercase tracking-wide mb-2">
                          {tier.tier}
                        </p>
                        <h3 className="font-serif text-lg font-bold text-navy mb-3">{tier.label}</h3>
                        <p className="font-sans text-sm text-gray-600 leading-relaxed line-clamp-4">
                          {tier.description}
                        </p>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
                {/* Seller hook */}
                <div className="mt-6 bg-white rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-gray-100">
                  <div className="flex-1">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">Own a home in {name}?</p>
                    <p className="font-sans text-sm text-gray-500 leading-relaxed">Jose does a free comparative market analysis — what it&apos;s worth today, recent comparable sales, and realistic days on market.</p>
                  </div>
                  <a
                    href={`https://wa.me/19546141351?text=Hi+Jose%2C+I%27d+like+to+know+what+my+home+in+${encodeURIComponent(name)}+is+worth`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full font-sans font-semibold text-navy text-sm border border-gold/40 hover:bg-gold/5 transition-colors whitespace-nowrap"
                  >
                    <MessageCircle size={15} className="text-gold" />
                    What&apos;s my home worth?
                  </a>
                </div>
              </div>
            )}

            {/* Section 7: Schools */}
            {schools && schools.length > 0 && (
              <div>
                <div className="mb-8">
                  <SectionHeading
                    eyebrow="The Schools"
                    title={`Schools in ${name}`}
                    subtitle="Ratings from GreatSchools.org — always visit in person."
                    align="left"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {schools.map((school, i) => (
                    <AnimateOnScroll key={school.name} delay={i * 0.06}>
                      <a
                        href={school.greatSchoolsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white border border-gray-100 rounded-xl p-5 h-full hover:border-gold/60 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center shrink-0">
                            <GraduationCap size={16} className="text-gold" />
                          </div>
                          <span className="font-sans font-bold text-navy text-sm shrink-0">
                            {school.rating}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-gray-400 uppercase tracking-wide mb-1">
                          {school.level}
                        </p>
                        <h3 className="font-sans font-semibold text-navy text-sm leading-snug">
                          {school.name}
                        </h3>
                      </a>
                    </AnimateOnScroll>
                  ))}
                </div>
                {schoolNote && (
                  <p className="mt-6 font-sans text-sm text-gray-500 leading-relaxed">
                    {schoolNote}
                  </p>
                )}
              </div>
            )}

            {/* Section 8: Things To Do */}
            {pointsOfInterest && pointsOfInterest.length > 0 && (
              <div className="bg-cream rounded-2xl p-8">
                <div className="mb-8">
                  <SectionHeading eyebrow="Local Life" title={`Around ${name}`} align="left" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {pointsOfInterest.map((poi, i) => {
                    const Icon = POI_ICONS[poi.category];
                    const color = POI_COLORS[poi.category];
                    const CardTag = poi.url ? 'a' : 'div';
                    const linkProps = poi.url
                      ? { href: poi.url, target: '_blank', rel: 'noopener noreferrer' }
                      : {};

                    if (poi.imageSrc) {
                      return (
                        <AnimateOnScroll key={poi.name} delay={i * 0.06}>
                          <CardTag
                            {...linkProps}
                            className="group block relative overflow-hidden rounded-xl h-full min-h-[260px]"
                          >
                            <Image
                              src={poi.imageSrc}
                              alt={poi.name}
                              fill
                              sizes="(max-width: 640px) 100vw, 50vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div
                              className="absolute inset-0"
                              aria-hidden="true"
                              style={{
                                background:
                                  'linear-gradient(to top, rgba(8, 18, 28, 0.97) 0%, rgba(8, 18, 28, 0.92) 25%, rgba(8, 18, 28, 0.6) 55%, rgba(8, 18, 28, 0.1) 85%, rgba(8, 18, 28, 0) 100%)',
                              }}
                            />
                            <div className="absolute top-4 left-4 flex items-center gap-2">
                              <div
                                className="w-8 h-8 rounded-lg backdrop-blur-sm border flex items-center justify-center shrink-0"
                                style={{ backgroundColor: `${color}cc`, borderColor: `${color}` }}
                              >
                                <Icon size={14} className="text-white" />
                              </div>
                              <span
                                className="font-sans text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-full backdrop-blur-sm text-white border"
                                style={{ backgroundColor: `${color}cc`, borderColor: `${color}` }}
                              >
                                {poi.category}
                              </span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                              <h3 className="font-serif text-base font-bold text-white mb-1.5">
                                {poi.name}
                              </h3>
                              <p className="font-sans text-sm text-white/80 leading-relaxed line-clamp-3">
                                {poi.description}
                              </p>
                            </div>
                          </CardTag>
                        </AnimateOnScroll>
                      );
                    }

                    return (
                      <AnimateOnScroll key={poi.name} delay={i * 0.06}>
                        <CardTag
                          {...linkProps}
                          className={`block bg-white rounded-xl p-5 h-full ${
                            poi.url ? 'hover:border-gold/60 border border-transparent transition-colors' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                              style={{ backgroundColor: color }}
                            >
                              <Icon size={16} className="text-white" />
                            </div>
                            <span
                              className="font-sans text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-full"
                              style={{ backgroundColor: `${color}1A`, color }}
                            >
                              {poi.category}
                            </span>
                          </div>
                          <h3 className="font-serif text-base font-bold text-navy mb-1.5">
                            {poi.name}
                          </h3>
                          <p className="font-sans text-sm text-gray-600 leading-relaxed line-clamp-3">
                            {poi.description}
                          </p>
                        </CardTag>
                      </AnimateOnScroll>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Section 9: Intent Block — Buying · Renting · Selling */}
            <AnimateOnScroll>
              <div className="bg-navy rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

                  {/* Buying */}
                  <div className="flex flex-col pb-8 md:pb-0 md:pr-8">
                    <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-gold mb-3">Buying Here</p>
                    <h3 className="font-serif text-xl font-bold text-white mb-3 leading-snug">
                      {`Looking to buy in ${name}?`}
                    </h3>
                    <p className="font-sans text-sm text-white/70 leading-relaxed mb-6 line-clamp-3">
                      {buyerNote ?? 'Jose knows which streets to target and which to avoid — before you start searching listings.'}
                    </p>
                    <a
                      href={`https://wa.me/19546141351?text=Hi+Jose%2C+I%27m+interested+in+buying+in+${encodeURIComponent(name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-sans font-semibold text-white text-sm transition-opacity hover:opacity-90"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      <MessageCircle size={16} />
                      Chat on WhatsApp
                    </a>
                  </div>

                  {/* Renting */}
                  <div className="flex flex-col py-8 md:py-0 md:px-8">
                    <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-gold mb-3">Renting Here</p>
                    <h3 className="font-serif text-xl font-bold text-white mb-3 leading-snug">
                      {`Looking to rent in ${name}?`}
                    </h3>
                    <p className="font-sans text-sm text-white/70 leading-relaxed mb-6 line-clamp-3">
                      {rentalMarket?.active && rentalMarket.description
                        ? rentalMarket.description
                        : 'Jose tracks this rental market and can walk you through current availability and what to expect in your price range.'}
                    </p>
                    <a
                      href={`https://wa.me/19546141351?text=Hi+Jose%2C+I%27m+looking+to+rent+in+${encodeURIComponent(name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-sans font-semibold text-white text-sm transition-opacity hover:opacity-90"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      <MessageCircle size={16} />
                      Chat on WhatsApp
                    </a>
                  </div>

                  {/* Selling */}
                  <div className="flex flex-col pt-8 md:pt-0 md:pl-8">
                    <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-gold mb-3">Selling Here</p>
                    <h3 className="font-serif text-xl font-bold text-white mb-3 leading-snug">
                      {`Thinking of selling in ${name}?`}
                    </h3>
                    <p className="font-sans text-sm text-white/70 leading-relaxed mb-6 line-clamp-3">
                      {sellerNote ?? 'Jose does free comparative market analyses — pricing, recent comparable sales, and realistic days on market. No listing required.'}
                    </p>
                    <a
                      href={`https://wa.me/19546141351?text=Hi+Jose%2C+I%27d+like+a+market+analysis+for+my+home+in+${encodeURIComponent(name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-sans font-semibold text-white text-sm transition-opacity hover:opacity-90"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      <MessageCircle size={16} />
                      Chat on WhatsApp
                    </a>
                  </div>

                </div>
              </div>
            </AnimateOnScroll>

            {/* Section 10: About — always, SEO content */}
            <div>
              <div className="mb-4">
                <SectionHeading eyebrow="The Full Story" title={`About ${name}`} align="left" />
              </div>
              <p className="font-sans text-gray-700 leading-relaxed text-base whitespace-pre-line">
                {description}
              </p>
            </div>

            {/* Section 11: Local Resources */}
            {resources.length > 0 && (
              <div className="bg-cream rounded-2xl p-8">
                <h2 className="font-serif text-xl font-bold text-navy mb-5">Local Resources</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

          {/* ─── Sticky Sidebar (desktop only) ─── */}
          <div className="hidden lg:block">
            <div className="lg:sticky lg:top-[104px] space-y-6">
              {/* Card 1: Contact Jose */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gold/40 shrink-0">
                    <Image
                      src="/images/jose-portrait.jpeg"
                      alt="Jose Costa"
                      fill
                      sizes="48px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-navy text-sm">Jose Costa</p>
                    <p className="font-sans text-xs text-gray-500">
                      Realtor · Atlantic Florida Properties
                    </p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <a
                    href="https://wa.me/19546141351"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-sans font-semibold text-white text-sm transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <MessageCircle size={16} />
                    Chat on WhatsApp
                  </a>
                  <a
                    href="tel:+19546141351"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-sans font-semibold text-navy text-sm border border-gray-200 hover:border-gold transition-colors"
                  >
                    <Phone size={16} className="text-gold" />
                    Call or Text
                  </a>
                </div>
                <div className="mt-5 pt-5 border-t border-gray-100 text-center space-y-1.5">
                  <p className="font-sans text-xs text-gray-400">Jose responds the same day.</p>
                  <p className="font-sans text-xs font-semibold text-navy">20+ Years · Palm Beach County</p>
                  <p className="font-sans text-[11px] font-semibold text-gold tracking-wide">EN · ES · PT</p>
                </div>
              </div>

              {/* Card 2: Current Market Report CTA */}
              <div className="bg-cream rounded-2xl p-6">
                <p className="font-sans text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Current Market Data
                </p>
                <p className="font-sans text-sm text-gray-700 leading-relaxed mb-4">
                  Jose pulls live pricing, days on market, and comparable sales for {name} — free, no obligation.
                </p>
                <a
                  href="tel:+19546141351"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-sans font-semibold text-navy text-sm border border-gray-200 hover:border-gold transition-colors"
                >
                  <Phone size={16} className="text-gold" />
                  Get a Free Market Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Section 12: CTA ─── */}
      <div id="cta-section">
        <CTASection
          title={`Thinking about ${name}?`}
          subtitle={`Whether you're looking to rent, buy, or eventually sell in ${name} — Jose knows this market and is available in English, Spanish, and Portuguese.`}
          primaryCTA={{ label: 'Schedule a Free Call', href: '/contact' }}
          secondaryCTA={{ label: 'View All Neighborhoods', href: '/neighborhoods' }}
        />
      </div>

      <MobileStickyBar />
    </>
  );
}
