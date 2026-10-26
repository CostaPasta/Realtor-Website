// Receives every website form (contact, rental, landlord, valuation) and emails
// it to Jose through Resend's HTTP API.
//
// Env vars (set in Vercel, never committed):
//   RESEND_API_KEY   required in production
//   LEAD_TO_EMAIL    defaults to USARealtor1@gmail.com
//   LEAD_FROM_EMAIL  defaults to Resend's shared sender, which can only deliver to
//                    the email address that owns the Resend account. Use a verified
//                    domain sender (e.g. "Website <leads@josecostarealtor.com>") to lift that.

const SUBJECTS = {
  contact: 'New website inquiry',
  rental: 'Rental home inquiry',
  landlord: 'Landlord property inquiry',
  valuation: 'Home valuation request',
  subscribe: 'Market update signup',
} as const;

const LANGUAGE_NAMES = { en: 'English', es: 'Spanish', pt: 'Portuguese' } as const;

type LeadType = keyof typeof SUBJECTS;
type Locale = keyof typeof LANGUAGE_NAMES;

const MAX_FIELD_LENGTH = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isLeadType(value: unknown): value is LeadType {
  return typeof value === 'string' && value in SUBJECTS;
}

function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && value in LANGUAGE_NAMES;
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const { type, locale, fields, company } = (payload ?? {}) as Record<string, unknown>;

  // Honeypot: real visitors never see or fill this field. Pretend success so bots move on.
  if (typeof company === 'string' && company.trim() !== '') {
    return Response.json({ ok: true });
  }

  if (!isLeadType(type) || !fields || typeof fields !== 'object' || Array.isArray(fields)) {
    return Response.json({ ok: false, error: 'invalid_payload' }, { status: 400 });
  }

  const clean: Record<string, string> = {};
  for (const [key, value] of Object.entries(fields as Record<string, unknown>)) {
    if (typeof value !== 'string') continue;
    const trimmed = value.trim().slice(0, MAX_FIELD_LENGTH);
    if (trimmed) clean[key.slice(0, 60)] = trimmed;
  }

  const email = clean['Email'];
  const phone = clean['Phone'];
  if (!email && !phone) {
    return Response.json({ ok: false, error: 'missing_contact' }, { status: 400 });
  }
  if (email && !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  }

  const language = isLocale(locale) ? LANGUAGE_NAMES[locale] : LANGUAGE_NAMES.en;
  const name = clean['Name'] ?? 'Website visitor';
  const subject = `${SUBJECTS[type]}: ${name}${language === 'English' ? '' : ` (${language})`}`;
  const text = [
    `${SUBJECTS[type]} from josecostarealtor.com`,
    `Site language: ${language}`,
    '',
    ...Object.entries(clean).map(([key, value]) => `${key}: ${value}`),
  ].join('\n');

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[lead] RESEND_API_KEY not set; would have sent:\n${subject}\n${text}`);
      return Response.json({ ok: true, dev: true });
    }
    console.error('[lead] RESEND_API_KEY is not set; lead not delivered');
    return Response.json({ ok: false, error: 'not_configured' }, { status: 503 });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL ?? 'Jose Costa Website <onboarding@resend.dev>',
      to: [process.env.LEAD_TO_EMAIL ?? 'USARealtor1@gmail.com'],
      ...(email ? { reply_to: email } : {}),
      subject,
      text,
    }),
  });

  if (!res.ok) {
    console.error('[lead] Resend error', res.status, await res.text());
    return Response.json({ ok: false, error: 'send_failed' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
