import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import type { Locale } from '@/i18n/locales';

// The card people see when the site is shared in WhatsApp, iMessage, Facebook, etc.
// Text is large on purpose: WhatsApp shows these previews small.

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

const COPY: Record<Locale, { alt: string; headline: string; role: string }> = {
  en: {
    alt: 'Jose Costa, Palm Beach County Realtor. English, Português, Español. (954) 614-1351',
    headline: 'Your home, in the language you trust.',
    role: 'Realtor® · Atlantic Florida Properties',
  },
  es: {
    alt: 'Jose Costa, agente de bienes raíces en Palm Beach. English, Português, Español. (954) 614-1351',
    headline: 'Su hogar, en el idioma en que confía.',
    role: 'Agente de bienes raíces · Atlantic Florida Properties',
  },
  pt: {
    alt: 'Jose Costa, corretor de imóveis em Palm Beach. English, Português, Español. (954) 614-1351',
    headline: 'Sua casa, no idioma em que você confia.',
    role: 'Corretor de imóveis · Atlantic Florida Properties',
  },
};

export function ogAlt(locale: Locale) {
  return COPY[locale].alt;
}

export async function renderOgImage(locale: Locale) {
  const t = COPY[locale];
  const portrait = await readFile(join(process.cwd(), 'public/images/jose-portrait.jpeg'));
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 64,
          padding: '0 72px',
          background: 'linear-gradient(120deg, #0D2442 0%, #13304F 100%)',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
        <img
          src={portraitSrc}
          width={380}
          height={380}
          alt=""
          style={{ borderRadius: 190, border: '8px solid #C4A35A', objectFit: 'cover' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ fontSize: 30, letterSpacing: 6, color: '#C4A35A', fontWeight: 700 }}>
            JOSE COSTA
          </div>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.1, marginTop: 18 }}>
            {t.headline}
          </div>
          <div style={{ fontSize: 30, color: '#D4BC84', marginTop: 28 }}>
            English · Português · Español
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, marginTop: 24 }}>(954) 614-1351</div>
          <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.65)', marginTop: 12 }}>{t.role}</div>
        </div>
      </div>
    ),
    ogSize
  );
}
