// Remembers how a visitor first reached the site in this browser tab (campaign tags
// from a short link or QR code, the landing page, and the referring site), so every
// lead email can say where the lead came from. Nothing leaves the browser until the
// visitor sends a form.

const KEY = 'lead-source';

export interface LeadSource {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  landingPage?: string;
  referrer?: string;
}

/** Call once on page load. Keeps the first visit's details for the rest of the tab session. */
export function rememberLeadSource(): void {
  try {
    if (sessionStorage.getItem(KEY)) return;
    const params = new URLSearchParams(window.location.search);
    let referrer: string | undefined;
    try {
      const host = document.referrer ? new URL(document.referrer).hostname : '';
      if (host && host !== window.location.hostname) referrer = host;
    } catch {}
    const source: LeadSource = {
      utmSource: params.get('utm_source') ?? undefined,
      utmMedium: params.get('utm_medium') ?? undefined,
      utmCampaign: params.get('utm_campaign') ?? undefined,
      landingPage: window.location.pathname,
      referrer,
    };
    sessionStorage.setItem(KEY, JSON.stringify(source));
  } catch {
    // Storage blocked (private mode, etc.): the email just won't include these lines.
  }
}

export function readLeadSource(): LeadSource {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) ?? '{}') as LeadSource;
  } catch {
    return {};
  }
}
