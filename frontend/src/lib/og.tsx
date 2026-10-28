import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { ReactNode } from 'react';
import { ImageResponse } from 'next/og';
import type { Locale } from '@/i18n/locales';

// The cards people see when the site is shared in WhatsApp, iMessage, Facebook, etc.
// Text is large on purpose: WhatsApp shows these previews small.

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

const NAVY = '#0D2442';
const GOLD = '#C4A35A';
const GOLD_LIGHT = '#D4BC84';
const PHONE = '(954) 614-1351';
const LANGUAGES = 'English · Português · Español';

// Same faces as the site: Playfair Display for headings, Inter for everything else.
// The files live in assets/fonts (SIL Open Font License, from Google Fonts).
let fontsPromise: Promise<NonNullable<ConstructorParameters<typeof ImageResponse>[1]>['fonts']> | undefined;
function loadFonts() {
  const file = (name: string) => readFile(join(process.cwd(), 'assets/fonts', name));
  fontsPromise ??= Promise.all([
    file('PlayfairDisplay-Bold.ttf'),
    file('Inter-Regular.ttf'),
    file('Inter-Bold.ttf'),
  ]).then(([playfair, inter, interBold]) => [
    { name: 'Playfair Display', data: playfair, weight: 700 as const, style: 'normal' as const },
    { name: 'Inter', data: inter, weight: 400 as const, style: 'normal' as const },
    { name: 'Inter', data: interBold, weight: 700 as const, style: 'normal' as const },
  ]);
  return fontsPromise;
}

async function dataUri(publicPath: string) {
  const bytes = await readFile(join(process.cwd(), 'public', publicPath));
  return `data:image/jpeg;base64,${bytes.toString('base64')}`;
}

async function render(node: ReactNode) {
  return new ImageResponse(node as React.ReactElement, { ...ogSize, fonts: await loadFonts() });
}

// ─── Home card: Jose's portrait ───

const HOME_COPY: Record<Locale, { alt: string; headline: string; role: string }> = {
  en: {
    alt: `Jose Costa, Palm Beach County Realtor. ${LANGUAGES}. ${PHONE}`,
    headline: 'Your home, in the language you trust.',
    role: 'Realtor® · Atlantic Florida Properties',
  },
  es: {
    alt: `Jose Costa, agente de bienes raíces en Palm Beach. ${LANGUAGES}. ${PHONE}`,
    headline: 'Su hogar, en el idioma en que confía.',
    role: 'Agente de bienes raíces · Atlantic Florida Properties',
  },
  pt: {
    alt: `Jose Costa, corretor de imóveis em Palm Beach. ${LANGUAGES}. ${PHONE}`,
    headline: 'Sua casa, no idioma em que você confia.',
    role: 'Corretor de imóveis · Atlantic Florida Properties',
  },
};

export function ogAlt(locale: Locale) {
  return HOME_COPY[locale].alt;
}

export async function renderOgImage(locale: Locale) {
  const t = HOME_COPY[locale];
  const portraitSrc = await dataUri('/images/jose-portrait.jpeg');

  return render(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 64,
        padding: '0 72px',
        background: `linear-gradient(120deg, ${NAVY} 0%, #13304F 100%)`,
        color: '#fff',
        fontFamily: 'Inter',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
      <img
        src={portraitSrc}
        width={380}
        height={380}
        alt=""
        style={{ borderRadius: 190, border: `8px solid ${GOLD}`, objectFit: 'cover' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontSize: 28, letterSpacing: 6, color: GOLD, fontWeight: 700 }}>JOSE COSTA</div>
        <div style={{ fontFamily: 'Playfair Display', fontSize: 60, fontWeight: 700, lineHeight: 1.1, marginTop: 18 }}>
          {t.headline}
        </div>
        <div style={{ fontSize: 28, color: GOLD_LIGHT, marginTop: 28 }}>{LANGUAGES}</div>
        <div style={{ fontSize: 40, fontWeight: 700, marginTop: 22 }}>{PHONE}</div>
        <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.65)', marginTop: 12 }}>{t.role}</div>
      </div>
    </div>
  );
}

// ─── Page cards: title and contact on the left, a picture on the right ───

const PANEL_WIDTH = 620;

function PageCard({ title, tagline, right }: { title: string; tagline: string; right: ReactNode }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', background: NAVY, color: '#fff', fontFamily: 'Inter' }}>
      <div
        style={{
          position: 'absolute',
          left: PANEL_WIDTH,
          top: 0,
          width: ogSize.width - PANEL_WIDTH,
          height: ogSize.height,
          display: 'flex',
        }}
      >
        {right}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: PANEL_WIDTH,
          height: '100%',
          padding: '0 40px 0 72px',
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 6, color: GOLD, fontWeight: 700 }}>JOSE COSTA</div>
        <div
          style={{
            fontFamily: 'Playfair Display',
            fontSize: title.length > 16 ? 60 : 72,
            fontWeight: 700,
            lineHeight: 1.08,
            marginTop: 18,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 27, color: GOLD_LIGHT, marginTop: 22, lineHeight: 1.35 }}>{tagline}</div>
        <div style={{ width: 96, height: 4, background: GOLD, marginTop: 36 }} />
        <div style={{ fontSize: 40, fontWeight: 700, marginTop: 30 }}>{PHONE}</div>
        <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.8)', marginTop: 10 }}>{LANGUAGES}</div>
        <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.6)', marginTop: 8 }}>Atlantic Florida Properties</div>
      </div>
    </div>
  );
}

/** A photo that fades into the navy panel on its left edge. */
function Photo({ src }: { src: string }) {
  const width = ogSize.width - PANEL_WIDTH;
  return (
    <div style={{ display: 'flex', width, height: ogSize.height }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
      <img src={src} width={width} height={ogSize.height} alt="" style={{ width, height: ogSize.height, objectFit: 'cover' }} />
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 160,
          height: ogSize.height,
          background: `linear-gradient(90deg, ${NAVY} 0%, rgba(13,36,66,0.55) 45%, rgba(13,36,66,0) 100%)`,
        }}
      />
    </div>
  );
}

// Neighborhood pages

const AREA_TAGLINE: Record<Locale, string> = {
  en: 'Homes to rent, buy, and sell',
  es: 'Casas para alquilar, comprar y vender',
  pt: 'Casas para alugar, comprar e vender',
};

export function areaOgAlt(locale: Locale, name: string) {
  return `${name}. ${AREA_TAGLINE[locale]}. Jose Costa, ${PHONE}`;
}

export async function renderAreaOgImage(locale: Locale, name: string, imageSrc?: string) {
  const photo = imageSrc ? <Photo src={await dataUri(imageSrc)} /> : null;
  return render(<PageCard title={name} tagline={AREA_TAGLINE[locale]} right={photo} />);
}

// Landlord page

const LANDLORD_COPY: Record<Locale, { title: string; tagline: string }> = {
  en: { title: 'Rent out your home', tagline: 'Pricing, MLS listing, showings, and tenant screening' },
  es: { title: 'Alquile su casa', tagline: 'Precio, anuncio en el MLS, visitas y revisión de inquilinos' },
  pt: { title: 'Alugue sua casa', tagline: 'Preço, anúncio no MLS, visitas e análise de inquilinos' },
};

export function landlordOgAlt(locale: Locale) {
  const t = LANDLORD_COPY[locale];
  return `${t.title}. ${t.tagline}. Jose Costa, ${PHONE}`;
}

export async function renderLandlordOgImage(locale: Locale) {
  const t = LANDLORD_COPY[locale];
  // Royal Palm Beach, where most of the homes he rents out are.
  const photo = <Photo src={await dataUri('/images/neighborhoods/royal-palm-beach.jpg')} />;
  return render(<PageCard title={t.title} tagline={t.tagline} right={photo} />);
}

// Rent vs. buy calculator

const CALCULATOR_COPY: Record<Locale, { title: string; tagline: string; rent: string; own: string }> = {
  en: {
    title: 'Rent or buy?',
    tagline: 'A free calculator: your rent next to the full monthly cost of owning',
    rent: 'Rent',
    own: 'Own',
  },
  es: {
    title: '¿Alquilar o comprar?',
    tagline: 'Calculadora gratis: su alquiler al lado del costo mensual de ser dueño',
    rent: 'Alquiler',
    own: 'Ser dueño',
  },
  pt: {
    title: 'Alugar ou comprar?',
    tagline: 'Calculadora grátis: seu aluguel ao lado do custo mensal da casa própria',
    rent: 'Aluguel',
    own: 'Casa própria',
  },
};

export function calculatorOgAlt(locale: Locale) {
  const t = CALCULATOR_COPY[locale];
  return `${t.title} ${t.tagline}. Jose Costa, ${PHONE}`;
}

export async function renderCalculatorOgImage(locale: Locale) {
  const t = CALCULATOR_COPY[locale];
  // Two bars, like the calculator's results, with no numbers: the visitor brings their own.
  const bar = (label: string, height: number, color: string) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 170 }}>
      <div style={{ width: 130, height, background: color, borderRadius: '14px 14px 0 0' }} />
      <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginTop: 20 }}>{label}</div>
    </div>
  );
  const chart = (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 56,
        width: '100%',
        height: '100%',
        paddingBottom: 110,
        background: 'linear-gradient(160deg, #13304F 0%, #0F2948 100%)',
        borderLeft: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {bar(t.rent, 310, 'rgba(255,255,255,0.45)')}
      {bar(t.own, 340, GOLD)}
    </div>
  );
  return render(<PageCard title={t.title} tagline={t.tagline} right={chart} />);
}
