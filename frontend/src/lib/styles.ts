// Shared class names, so every page draws buttons, cards, and form fields the same way.

const button =
  'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans font-semibold text-sm transition-colors';

/** Main action: gold. */
export const buttonPrimary = `${button} bg-gold text-navy hover:bg-gold-light`;
/** Second action on a white or cream background. */
export const buttonSecondary = `${button} border border-navy/25 text-navy hover:border-gold`;
/** Second action on navy or over a photo. */
export const buttonOnDark = `${button} border border-white/40 text-white hover:bg-white/10`;
/** Every WhatsApp button, always with the chat icon. */
export const buttonWhatsApp = `${button} bg-whatsapp text-whatsapp-ink hover:brightness-95`;

/** Small uppercase label above a heading on white or cream. */
export const eyebrow = 'font-sans text-xs font-semibold tracking-widest uppercase text-gold-text';
/** The same label on navy or over a photo. */
export const eyebrowOnDark = 'font-sans text-xs font-semibold tracking-widest uppercase text-gold';

/** Navy square holding a gold icon. */
export const iconTile = 'w-11 h-11 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0';
/** Feature card on a cream section. */
export const card = 'bg-white rounded-2xl border border-cream-dark p-7';
/** Feature card on a white section. */
export const cardOnWhite = 'bg-cream rounded-2xl border border-cream-dark p-7';

/** White card holding a form. */
export const formCard = 'bg-white rounded-2xl border border-cream-dark shadow-sm p-6 sm:p-8';
export const formLabel = 'block font-sans text-sm font-semibold text-gray-800 mb-1.5';
export const formInput =
  'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 font-sans text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20';
