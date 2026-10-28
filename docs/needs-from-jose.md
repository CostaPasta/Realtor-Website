# What we need from Jose

Content on the site that only Jose can supply or approve. Each item says where it goes in the code once we have it.

## 1. His own words for "Jose's Take"

Every neighborhood page has a first-person "Jose's Take" box. The current text was AI-written, so the boxes are hidden until he approves them.

- **Ask him for:** a 1–2 minute WhatsApp voice note per area he actually works (Portuguese is fine): who lives there, what renters and buyers should know, one honest caution.
- **Start with:** Royal Palm Beach, The Acreage / Loxahatchee, Wellington, West Palm Beach, Lake Worth Beach, Boynton Beach.
- **Where it goes:** `joseNote` for that neighborhood in `frontend/src/data/neighborhoods.ts`, then set `joseNoteApproved: true`.

## 2. Homes available to rent

The Rentals pages (English, Spanish, Portuguese) have an "Available now" section that stays hidden until it has listings.

- **Ask him for, per home:** area or neighborhood (not the street address), monthly rent, beds, baths, square feet, move-in date, whether pets are considered, and one or two real photos.
- **Where it goes:** `frontend/src/data/rentals.ts`; photos in `frontend/public/images/rentals/`.
- **Rule:** remove a home the day it's rented.

## 3. Answers for a "What you need to rent in Florida" guide

A three-language guide for renters, especially newcomers. We need his real-world answers before writing it:

- Which documents do landlords near him usually ask for?
- Do landlords accept an ITIN, foreign income, or bank statements instead of pay stubs?
- What works for renters with no US credit history (bigger deposit, co-signer, prepaid rent)?
- Typical security deposit and total move-in cost for a 3-bedroom in Royal Palm Beach?
- Typical application fees and background check costs?
- Anything renters commonly get wrong or get surprised by?

## 4. Real photos and video

- A professional headshot, waist-up, at least 1200px wide (the current one is a 650px square crop).
- Real photos of him working: handing over keys, at a showing, next to his own sign on a real listing.
- A photo of him with the fruit he grows and gives to clients (the About page story).
- Optional: a 30-second phone video saying hello in English, Portuguese, and Spanish.
- These replace the AI-generated images in `frontend/public/images/` (`category-buying.jpg`, `category-selling.jpg`, `category-rental.jpg`, `buy-bg.png`, `sell-bg.png`).

## 5. Reviews

- Set up a Google Business Profile and ask recent clients for reviews.
- Real reviews (with permission) go in `frontend/src/data/testimonials.ts`; the testimonial sections and `/testimonials` page come back automatically.

## 6. Quick confirmations

- How fast does he actually reply on WhatsApp? The site promises a reply within 24 hours. If it's usually within the hour, we should say so.
- Read the Spanish and Portuguese pages (`/es`, `/pt`) and flag anything that sounds off.

## 7. MLS access (for showing his listings on the site automatically)

Goal: his active listings, rentals, and recent sales appear on the site and update on their own from the MLS.

- **His Beaches MLS agent ID** (used to filter the feed down to his own listings).
- **Ask his broker (Atlantic Florida Properties):**
  - Do they have an IDX agreement with Beaches MLS?
  - Do they already pay for an IDX vendor (IDX Broker, iHomefinder, Showcase IDX, etc.)? If so, does that plan include API access?
  - Can a developer get a direct data feed (RESO Web API) under the broker's IDX agreement, and what does Beaches MLS charge for it?
  - Are sold listings allowed on an agent's website, and for how long after closing?
- **Ask Jose:** only his own listings, or full MLS search too?
- Note: rentals only come through the feed when he is the listing agent. Rentals where he represents the tenant still go in `frontend/src/data/rentals.ts` by hand.

## 8. Every three months: update market stats

The "Median House Price" and "Days on Market" figures on the neighborhood cards and map come from one file, `frontend/src/data/market-stats.ts`. Refreshing them takes about 15 minutes with MLS access. Do it in early January, April, July, and October.

MLS rules usually don't allow sharing a login, so Jose should pull the numbers himself (a screenshot of each result is enough).

**In the MLS, for each city below:**

1. Search **closed sales**, property type **single-family / houses only** (no condos or townhouses), with a closing date from **January 1 through the last day of the most recent full month**. In January, use the whole previous year.
2. Write down the **median sale price** and the **median days on market**. Use medians, not averages, to match the labels on the site.

| Page | MLS city to search |
|---|---|
| Royal Palm Beach | Royal Palm Beach |
| West Palm Beach | West Palm Beach |
| Wellington | Wellington |
| The Acreage and Loxahatchee | Loxahatchee |
| Lake Worth Beach | Lake Worth Beach |
| Boynton Beach | Boynton Beach |
| Delray Beach | Delray Beach |
| Palm Beach Gardens | Palm Beach Gardens |
| Jupiter | Jupiter |
| Davie | Davie |
| Oakland Park | Oakland Park |
| Wilton Manors | Wilton Manors |
| Pompano Beach | Pompano Beach |

**Then in `frontend/src/data/market-stats.ts`:**

3. Update `medianHousePrice` (the full dollar amount, like `566_000`) and `daysOnMarket` for each city.
4. Update `MARKET_STATS_PERIOD` (for example `'Houses sold January–December 2026'`), `MARKET_STATS_SOURCE` (`'Beaches MLS'` once Jose pulls them himself), and `MARKET_STATS_UPDATED` (today's date, `YYYY-MM-DD`).
5. Delete any `note` that no longer applies (the Acreage one only explains the current period).
6. Commit and push. Vercel redeploys, and the cards and map update on every page.

**Rents on the landlord page (`/landlords`), same visit:**

7. In the MLS, search **active rentals** (for lease) in Royal Palm Beach, West Palm Beach, Lake Worth Beach, Boynton Beach, and Wellington, houses and condos together.
8. For each city write down the **median asking rent for 2 bedrooms**, the **median for 3 bedrooms**, and the **median days on market** of those listings.
9. Update `rentalStats` and `RENTAL_STATS_DATE` at the bottom of `market-stats.ts`. If a neighborhood's budget guide changes, update that city's `starterHousePrice` to match (it's the low end of the single-family range, used by the rent vs. buy calculator). The table, the date under its heading, and the "27 to 42 days" answer in the FAQ all update from these numbers. Commit and push as in step 6.

**No need to touch:** the neighborhood page text. Its numbers are dated ("from January through September 2026"), so they stay true. Refresh them during a bigger copy update, or write a new Market Updates report instead.

If a city had fewer than about 10 house sales in the period, its median can swing a lot; mention it in that city's `note`.
