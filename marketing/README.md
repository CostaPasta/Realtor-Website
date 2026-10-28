# Marketing kit

Short links, QR codes, and ready-to-post copy for getting leads to josecostarealtor.com.
Everything here is public (this repo is public), so it only uses details already on the site.

- [Short links and QR codes](#short-links-and-qr-codes)
- [How to tell where a lead came from](#how-to-tell-where-a-lead-came-from)
- [Post templates](posts.md) in English, Spanish, and Portuguese

## Short links and QR codes

Each short link opens a page on the site and tags the visit, so the lead email says which link it came from.
Use the matching link on each piece, and don't reuse one link for two different things, or you won't be able to tell them apart.

### For print and mail (QR codes in `qr/`)

| Short link | Opens | Use it on | QR code |
|---|---|---|---|
| josecostarealtor.com/sign | Rentals | Yard signs on his rental listings | `qr/sign.svg` |
| josecostarealtor.com/card | Home page | Business cards | `qr/card.svg` |
| josecostarealtor.com/flyer | Rentals | Flyers and door hangers (English) | `qr/flyer.svg` |
| josecostarealtor.com/es/flyer | Rentals in Spanish | Spanish flyers | `qr/es-flyer.svg` |
| josecostarealtor.com/pt/flyer | Rentals in Portuguese | Portuguese flyers | `qr/pt-flyer.svg` |
| josecostarealtor.com/owners | Landlord page | Letters or postcards to owners (English) | `qr/owners.svg` |
| josecostarealtor.com/es/owners | Landlord page in Spanish | Spanish letters to owners | `qr/es-owners.svg` |
| josecostarealtor.com/pt/owners | Landlord page in Portuguese | Portuguese letters to owners | `qr/pt-owners.svg` |

Each QR code comes as `.svg` (send this one to a print shop or upload it to Canva) and `.png` (for Word, Google Docs, or a phone).
Print QR codes at least 2 cm (about 3/4 inch) wide, and scan one with a phone before printing a batch.

### For social posts (no QR code needed)

| Short link | Opens | Use it in |
|---|---|---|
| josecostarealtor.com/mp | Rentals | Facebook Marketplace rental listings |
| josecostarealtor.com/rent | Rentals | Renter posts in Facebook and WhatsApp groups |
| josecostarealtor.com/lease | Landlord page | Landlord posts in groups |
| josecostarealtor.com/compare | Rent vs. buy calculator | Posts about buying instead of renting |

Every social link also works with `/es/` or `/pt/` in front (for example josecostarealtor.com/es/rent) to open the translated page.
[posts.md](posts.md) already uses the right link in each template.

### Adding or changing a link

1. Edit `frontend/short-links.ts` (one line per link).
2. If it's for print, run `npm run qr` in `frontend/` to regenerate the codes in `qr/`.
3. Add it to the tables above.
4. Commit and push. Vercel redeploys and the link works right away.

Links redirect temporarily, so an existing QR code can point somewhere new later by changing its line, without reprinting.

## How to tell where a lead came from

Every form on the site emails Jose. At the bottom of each email:

```
Sent from page: /landlords
Came from: owner-letter (mail)
First page visited: /rentals
```

- **Sent from page:** the page the form was on.
- **Came from:** the short link they used (the piece's name, then the channel), or the website that sent them, such as `google.com` or `facebook.com`. Spanish and Portuguese links add `es` or `pt` at the end.
- **First page visited:** where they landed, if it was a different page.

No "Came from" line means they typed the address or used a bookmark.
WhatsApp messages and phone calls don't carry this information, so when someone calls, ask how they found him.
