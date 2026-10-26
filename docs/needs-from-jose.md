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
