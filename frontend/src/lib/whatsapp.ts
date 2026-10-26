import { type Locale, localeFromPath } from '@/i18n/locales';

const NUMBER = '19546141351';

export type WhatsAppTopic = 'general' | 'rent' | 'landlord' | 'buy' | 'sell';

// A typed-out first message: many visitors won't write to a stranger when the box is empty.
// `{area}` becomes " in Royal Palm Beach" (or is dropped when there's no area).
const MESSAGES: Record<Locale, Record<WhatsAppTopic, string> & { in: string; about: string }> = {
  en: {
    in: 'in',
    about: 'about',
    general: 'Hi Jose, I found your website and have a question{about}.',
    rent: "Hi Jose, I found your website. I'm looking for a home to rent{in}.",
    landlord: "Hi Jose, I have a property I'd like to rent out.",
    buy: "Hi Jose, I'm interested in buying a home{in}.",
    sell: "Hi Jose, I'd like to know what my home{in} is worth.",
  },
  es: {
    in: 'en',
    about: 'sobre',
    general: 'Hola Jose, vi su página web y tengo una pregunta{about}.',
    rent: 'Hola Jose, vi su página web. Busco una casa para alquilar{in}.',
    landlord: 'Hola Jose, tengo una propiedad que quiero alquilar.',
    buy: 'Hola Jose, me interesa comprar una casa{in}.',
    sell: 'Hola Jose, quisiera saber cuánto vale mi casa{in}.',
  },
  pt: {
    in: 'em',
    about: 'sobre',
    general: 'Olá Jose, vi seu site e tenho uma dúvida{about}.',
    rent: 'Olá Jose, vi seu site. Procuro uma casa para alugar{in}.',
    landlord: 'Olá Jose, tenho um imóvel que quero alugar.',
    buy: 'Olá Jose, tenho interesse em comprar uma casa{in}.',
    sell: 'Olá Jose, gostaria de saber quanto vale minha casa{in}.',
  },
};

export function whatsappHref(message?: string): string {
  return message ? `https://wa.me/${NUMBER}?text=${encodeURIComponent(message)}` : `https://wa.me/${NUMBER}`;
}

export function whatsappMessage(locale: Locale, topic: WhatsAppTopic, area?: string): string {
  const m = MESSAGES[locale];
  return m[topic]
    .replace('{in}', area ? ` ${m.in} ${area}` : '')
    .replace('{about}', area ? ` ${m.about} ${area}` : '');
}

export function whatsappLink(locale: Locale, topic: WhatsAppTopic, area?: string): string {
  return whatsappHref(whatsappMessage(locale, topic, area));
}

/** Link for site-wide buttons, with the message picked from the page the visitor is on. */
export function whatsappLinkForPath(pathname: string | null): string {
  const locale = localeFromPath(pathname);
  const path = (pathname ?? '/').replace(/^\/(es|pt)(?=\/|$)/, '') || '/';
  const topic: WhatsAppTopic =
    path.startsWith('/rentals') ? 'rent' : path.startsWith('/buy') ? 'buy' : path.startsWith('/sell') ? 'sell' : 'general';
  return whatsappLink(locale, topic);
}

/** Message for one specific rental listing. */
export function rentalListingMessage(locale: Locale, beds: number, area: string, rent: string): string {
  switch (locale) {
    case 'es':
      return `Hola Jose, vi en su página la casa de ${beds} habitaciones en ${area} (${rent}/mes). ¿Todavía está disponible?`;
    case 'pt':
      return `Olá Jose, vi no seu site a casa de ${beds} quartos em ${area} (${rent}/mês). Ainda está disponível?`;
    default:
      return `Hi Jose, I saw the ${beds}-bedroom in ${area} (${rent}/mo) on your website. Is it still available?`;
  }
}
