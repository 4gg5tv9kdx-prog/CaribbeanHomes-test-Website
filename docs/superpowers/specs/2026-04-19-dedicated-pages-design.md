# Dedicated About, Testimonials, and Contact Pages

**Date:** 2026-04-19
**Status:** Approved design, pending implementation plan

## Goal

Convert the About, Testimonials, and Contact sections — currently anchor-link sections on `Homepage.html` — into standalone pages. Expand each with additional content. Keep homepage sections as teasers that link to the full pages.

## Navigation model

- Primary nav ("About", "Testimonials", "Contact") on every page routes to the new standalone pages.
- Homepage teaser sections each include a "Learn more →" link to the corresponding page.
- Footer navigation and the homepage CTA banner's "Get in Touch" button also route to the new pages.
- The homepage hero's "Learn More" button routes to `about.html`.

## File structure

Three new files at repo root, matching existing pattern:

- `about.html`
- `testimonials.html`
- `contact.html`

Shared visual system (Google Fonts Roboto Mono + Montserrat, color palette `#F0E6CC` / `#C8952A` / `#1C0E06` / `#7B4A28`, `.btn-gold`, `.nav-link`, `.testimonial-card`, `.reveal` IntersectionObserver, mobile menu toggle) is duplicated inline on each page — same approach as `Homepage.html`, `listings.html`, `property-beachfront-villa.html`. No build step, no shared stylesheet.

## Page content

### about.html

1. **Page hero** — compact tan-background header. Breadcrumb "Home / About", eyebrow "Our Story", title "Building Caribbean Dreams Since 2008".
2. **Our Story** — two-column section. Narrative (~120 words) about founding, mission, Caribbean-native team. Side column: stylized stat/quote block.
3. **Why Caribbean Homes** — the existing 3 value cards (Local Expertise, Curated Luxury, Full-Service Support), copy expanded ~2×.
4. **Meet the Team** — 4 placeholder team cards: name, role, island, 1-sentence bio, gradient avatar circle (matching testimonial-card avatar style).
5. **CTA banner** — gold/brown gradient, "Ready to Begin?" → `contact.html`.
6. **Footer** — same as other pages.

### testimonials.html

1. **Page hero** — eyebrow "Client Stories", title "What Our Clients Say".
2. **By the Numbers** — 4-stat strip: 350+ properties sold, 98% client satisfaction, 12 islands covered, $1.2B+ transacted.
3. **Testimonial grid** — 9 testimonial cards (existing 3 + 6 new), using existing `.testimonial-card` style with varied island pairings (Bahamas, Antigua, Jamaica, Turks, Trinidad, Grenada).
4. **Featured story** — one longer testimonial rendered larger with expanded paragraph and a placeholder "Read full case study" link.
5. **CTA banner** → `contact.html`.
6. **Footer**.

### contact.html

1. **Page hero** — eyebrow "Get in Touch", title "Let's Find Your Perfect Property".
2. **Contact info + form** — two-column layout matching the current homepage contact section. Form fields: First name, Last name, Email, Island of interest (existing select), **Reason for inquiry** (new: Buying / Selling / Investment / Relocation / Other), **Budget range** (new, optional: <$500K / $500K-$1M / $1M-$3M / $3M+ / Flexible), Message. Submit is `preventDefault`-style placeholder.
3. **Office & Hours** — address block (Bridgetown, Barbados), hours (Mon-Fri 9am-6pm AST, Sat 10am-2pm AST, Sun closed), a styled map placeholder (CSS gradient background + centered pin icon, no real map integration).
4. **FAQ** — 5 items using native `<details>/<summary>` for expand/collapse (no JS dependency):
   - Closing costs for Caribbean purchases
   - Remote buying process for overseas clients
   - Financing options for non-residents
   - Property management services
   - Visa and residency pathways
5. **Footer**.

### Homepage changes

- **"Why Caribbean Homes"** section stays intact; adds a centered "Learn more about us →" link below the 3 cards, pointing to `about.html`.
- **Testimonials** section stays intact; adds a centered "Read more client stories →" link below the 3 cards, pointing to `testimonials.html`.
- **Contact** section replaced: the existing two-column info+form is swapped for a compact centered teaser — eyebrow, heading, short paragraph, the 3 contact info items (phone/email/office) in a horizontal row, and a `.btn-gold` "Contact Us" button linking to `contact.html`. Preserves the `id="contact"` anchor for any deep links.
- Hero "Learn More" button href → `about.html`.
- Nav links: `href="#about"` → `about.html`, `href="#testimonials"` → `testimonials.html`, `href="#contact"` → `contact.html` (both desktop and mobile menu).
- CTA banner "Get in Touch" button → `contact.html`.
- Footer nav links: same conversion.

### Cross-page nav updates

On `listings.html` and `property-beachfront-villa.html`, any nav/footer references to `#about` / `#testimonials` / `#contact` (or `Homepage.html#about`, etc.) convert to the new absolute page paths.

## Content voice

All new copy drafted in the established brand voice — concise, aspirational, Roboto Mono uppercase labels with Montserrat body. Team bios and additional testimonials are placeholders the user can edit.

## Verification

- Load each of the 5 pages in the local preview server (`mcp__Claude_Preview__preview_*`).
- Screenshot desktop width to confirm layout.
- Click through every nav link on every page to confirm no dead links.
- Confirm mobile menu opens/closes on each new page.
- Confirm `.reveal` scroll animations trigger on each new page.
- Confirm FAQ `<details>` expand/collapse works.

## Out of scope

- Real map integration (Google/Mapbox) — styled placeholder only.
- Form submission backend — placeholder `preventDefault`.
- Real photography for team cards — gradient avatars only.
- Shared CSS file / build step — each page remains fully inline.
- Individual case study pages linked from "Read full case study".

## Risks

- **Copy duplication drift** — homepage teaser copy and page hero copy will say overlapping things; acceptable given teaser/page relationship.
- **Inline-style bloat** — each new page adds ~500-800 lines of inline-styled HTML; matches existing project convention.
