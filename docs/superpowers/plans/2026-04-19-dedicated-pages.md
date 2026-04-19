# Dedicated About, Testimonials, and Contact Pages — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the About, Testimonials, and Contact sections of `Homepage.html` into three dedicated pages with expanded content, reroute navigation to point at them, and trim the homepage Contact section to a teaser.

**Architecture:** Three new standalone HTML files at repo root (`about.html`, `testimonials.html`, `contact.html`). Each file mirrors the shell pattern from `Homepage.html` — identical `<head>`, `<nav>`, `<footer>`, and `<script>` blocks — with page-specific body content in between. Nav/footer/CTA links across all 5 HTML pages get rewritten from `#about` / `#testimonials` / `#contact` to the new `.html` paths. Homepage "Why Caribbean Homes" and "Testimonials" sections stay intact (with new "Learn more" links); homepage "Contact" section is replaced with a compact teaser.

**Tech Stack:** Static HTML with inline styles, Google Fonts (Roboto Mono + Montserrat), Tailwind CDN, vanilla JS. Local preview via `npx serve` (already configured at `.claude/launch.json`).

**Conventions:**
- Color palette: `#F0E6CC` (cream), `#C8952A` (gold), `#1C0E06` (espresso), `#7B4A28` (walnut), `#C4874A` (caramel), `#2D2020` (charcoal).
- Fonts: `'Roboto Mono',monospace` for labels/headings; `'Montserrat',sans-serif` for body.
- Reusable classes defined in Homepage.html's `<style>`: `.btn-gold`, `.btn-outline`, `.nav-link`, `.testimonial-card`, `.value-icon`, `.reveal`.
- All new pages copy the same JS block for nav scroll, hamburger toggle, and reveal animations.

---

## Shared Page Shell (reference)

Every new page in Tasks 1–3 uses this shell. "Shell" means everything in `Homepage.html` **except** the body content between the closing `</nav>` (after the mobile menu `<div id="mobile-menu">…</div>`) and the opening `<footer>` tag. Specifically:

- **Keep verbatim from Homepage.html lines 1–290** (the full `<!DOCTYPE html>`, `<head>`, `<style>` block).
- **Replace** the `<title>` tag content with the page-specific title (stated in each task).
- **Keep the nav block from lines 293–326** BUT with these link edits applied (see Task 4 for why these are the final values):
  - Desktop nav: `href="listings.html"` → Listings, `href="about.html"` → About, `href="testimonials.html"` → Testimonials, `href="contact.html"` → Contact.
  - Mobile menu: `href="listings.html"` → Listings, `href="about.html"` → About, `href="testimonials.html"` → Testimonials, `href="contact.html"` → Contact.
  - Logo anchor `<a href="#">` → `<a href="Homepage.html">`.
- **Keep the footer block from lines 756–819 verbatim** BUT with footer nav links rewritten:
  - `href="#listings"` → `href="listings.html"`
  - `href="#about"` → `href="about.html"`
  - `href="#testimonials"` → `href="testimonials.html"`
  - `href="#contact"` → `href="contact.html"`
- **Keep the `<script>` block from lines 822–894 verbatim**, then `</body></html>`.

---

## Task 1: Create `about.html`

**Files:**
- Create: `about.html`

- [ ] **Step 1: Copy `Homepage.html` to `about.html` as starting point**

```bash
cp Homepage.html about.html
```

- [ ] **Step 2: Update the `<title>` tag**

In `about.html`, find:
```html
<title>Caribbean Homes — Find Your Paradise</title>
```
Replace with:
```html
<title>About — Caribbean Homes</title>
```

- [ ] **Step 3: Rewrite nav links in desktop + mobile menu + hero button + footer**

In `about.html`, apply these exact find/replace edits:

Desktop nav (was line ~305):
```
<a href="listings.html" class="nav-link">Listings</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#testimonials" class="nav-link">Testimonials</a>
        <a href="#contact" class="nav-link">Contact</a>
```
to
```
<a href="listings.html" class="nav-link">Listings</a>
        <a href="about.html" class="nav-link" style="color:#C8952A;opacity:1;">About</a>
        <a href="testimonials.html" class="nav-link">Testimonials</a>
        <a href="contact.html" class="nav-link">Contact</a>
```

Mobile menu (was line ~321):
```
<a href="#listings" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">Listings</a>
      <a href="#about" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">About</a>
      <a href="#testimonials" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">Testimonials</a>
      <a href="#contact" class="nav-link" style="padding:0.75rem 0;display:block;">Contact</a>
```
to
```
<a href="listings.html" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">Listings</a>
      <a href="about.html" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);color:#C8952A;opacity:1;">About</a>
      <a href="testimonials.html" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">Testimonials</a>
      <a href="contact.html" class="nav-link" style="padding:0.75rem 0;display:block;">Contact</a>
```

Logo anchor (was line ~299):
```
<a href="#" style="display:flex;align-items:center;gap:0.75rem;text-decoration:none;flex-shrink:0;" aria-label="Caribbean Homes Home">
```
to
```
<a href="Homepage.html" style="display:flex;align-items:center;gap:0.75rem;text-decoration:none;flex-shrink:0;" aria-label="Caribbean Homes Home">
```

Footer nav (was line ~782):
```
<a href="#listings" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Listings</a>
            <a href="#about" class="nav-link" style="font-size:0.82rem;opacity:0.55;">About Us</a>
            <a href="#testimonials" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Testimonials</a>
            <a href="#contact" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Contact</a>
```
to
```
<a href="listings.html" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Listings</a>
            <a href="about.html" class="nav-link" style="font-size:0.82rem;opacity:0.55;">About Us</a>
            <a href="testimonials.html" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Testimonials</a>
            <a href="contact.html" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Contact</a>
```

- [ ] **Step 4: Replace homepage body content (hero through CTA banner) with About page sections**

In `about.html`, delete everything between the closing `</nav>` tag (end of mobile menu `</div>` line 326) and the opening `<footer` tag (line 756). That is, delete the HERO section, SEARCH BAR section, FEATURED LISTINGS section, WHY CARIBBEAN HOMES section, TESTIMONIALS section, CTA BANNER section, and CONTACT section in entirety.

Replace with the following body content (paste immediately after `</nav>`, before `<footer`):

```html

  <!-- ═══════════════════════════════════════════
       PAGE HERO
  ═══════════════════════════════════════════ -->
  <section style="padding:10rem 2rem 5rem;background:linear-gradient(to bottom,#F0E6CC 0%,#EDE0C4 100%);position:relative;">
    <div style="max-width:1100px;margin:0 auto;text-align:center;">
      <p class="anim-fadeup delay-100" style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.22em;text-transform:uppercase;color:rgba(28,14,6,0.45);font-weight:600;margin-bottom:1rem;">
        <a href="Homepage.html" style="color:inherit;text-decoration:none;border-bottom:1px solid rgba(28,14,6,0.15);">Home</a>
        <span style="margin:0 0.5rem;opacity:0.4;">/</span>
        <span style="color:#C8952A;">About</span>
      </p>
      <p class="anim-fadeup delay-200" style="font-family:'Roboto Mono',monospace;font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:1.25rem;">Our Story</p>
      <h1 class="anim-fadeup delay-300" style="font-family:'Roboto Mono',monospace;font-size:clamp(2.2rem,5vw,3.5rem);font-weight:700;letter-spacing:-0.03em;color:#1C0E06;line-height:1.08;margin-bottom:1.5rem;">Building Caribbean<br/>Dreams Since 2008</h1>
      <p class="anim-fadeup delay-400" style="font-family:'Montserrat',sans-serif;font-size:1.05rem;font-weight:300;line-height:1.75;color:rgba(28,14,6,0.6);max-width:620px;margin:0 auto;">Two decades of deep roots, discerning taste, and a single promise — to connect you with the Caribbean property that feels like home.</p>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       OUR STORY
  ═══════════════════════════════════════════ -->
  <section style="padding:6rem 2rem;background:#F0E6CC;">
    <div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1.3fr 1fr;gap:4rem;align-items:center;" class="md:grid-cols-2">
      <div class="reveal">
        <p style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:0.75rem;">Our Beginning</p>
        <h2 style="font-family:'Roboto Mono',monospace;font-size:clamp(1.75rem,3.5vw,2.4rem);font-weight:700;letter-spacing:-0.03em;color:#1C0E06;line-height:1.1;margin-bottom:1.5rem;">Locally rooted.<br/>Globally minded.</h2>
        <p style="font-family:'Montserrat',sans-serif;font-size:0.95rem;font-weight:300;line-height:1.85;color:rgba(28,14,6,0.72);margin-bottom:1.25rem;">Caribbean Homes was founded in 2008 in Bridgetown by a small team of native Barbadians who shared a conviction — that the Caribbean deserved a real estate agency as refined and particular as the islands themselves.</p>
        <p style="font-family:'Montserrat',sans-serif;font-size:0.95rem;font-weight:300;line-height:1.85;color:rgba(28,14,6,0.72);margin-bottom:1.25rem;">What began as a two-person office has grown into a regional boutique representing properties across 12 islands. Our agents live where they sell. They surf the reefs, know the restaurants, and have watched neighbourhoods evolve over decades.</p>
        <p style="font-family:'Montserrat',sans-serif;font-size:0.95rem;font-weight:300;line-height:1.85;color:rgba(28,14,6,0.72);">That local intelligence — paired with a global standard of service — is why clients from London to Toronto to Singapore keep coming back.</p>
      </div>
      <div class="reveal" style="background:linear-gradient(135deg,#2D1A08 0%,#7B4A28 55%,#3D2010 100%);padding:3rem 2.5rem;border-radius:2px;position:relative;overflow:hidden;">
        <div style="position:absolute;top:-40px;right:-40px;width:180px;height:180px;border-radius:50%;border:1px solid rgba(200,149,42,0.15);pointer-events:none;"></div>
        <div style="position:absolute;bottom:-30px;left:-30px;width:130px;height:130px;border-radius:50%;border:1px solid rgba(240,230,204,0.08);pointer-events:none;"></div>
        <p style="font-family:'Roboto Mono',monospace;font-size:0.68rem;letter-spacing:0.22em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:2rem;">By the Numbers</p>
        <div style="display:flex;flex-direction:column;gap:1.75rem;position:relative;">
          <div>
            <p style="font-family:'Roboto Mono',monospace;font-size:2.25rem;font-weight:700;color:#C8952A;letter-spacing:-0.02em;line-height:1;">18</p>
            <p style="font-family:'Montserrat',sans-serif;font-size:0.78rem;letter-spacing:0.08em;text-transform:uppercase;color:rgba(240,230,204,0.6);margin-top:0.4rem;">Years Serving the Region</p>
          </div>
          <div>
            <p style="font-family:'Roboto Mono',monospace;font-size:2.25rem;font-weight:700;color:#C8952A;letter-spacing:-0.02em;line-height:1;">$1.2B+</p>
            <p style="font-family:'Montserrat',sans-serif;font-size:0.78rem;letter-spacing:0.08em;text-transform:uppercase;color:rgba(240,230,204,0.6);margin-top:0.4rem;">In Properties Transacted</p>
          </div>
          <div>
            <p style="font-family:'Roboto Mono',monospace;font-size:2.25rem;font-weight:700;color:#C8952A;letter-spacing:-0.02em;line-height:1;">12</p>
            <p style="font-family:'Montserrat',sans-serif;font-size:0.78rem;letter-spacing:0.08em;text-transform:uppercase;color:rgba(240,230,204,0.6);margin-top:0.4rem;">Islands in Our Network</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       WHY CARIBBEAN HOMES (expanded)
  ═══════════════════════════════════════════ -->
  <section style="padding:6rem 2rem;background:linear-gradient(to bottom,#F0E6CC 0%,#EDE0C4 50%,#F0E6CC 100%);">
    <div style="max-width:1280px;margin:0 auto;">
      <div class="reveal" style="text-align:center;margin-bottom:4rem;">
        <p style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:0.75rem;">Our Difference</p>
        <h2 style="font-family:'Roboto Mono',monospace;font-size:clamp(1.8rem,4vw,2.75rem);font-weight:700;letter-spacing:-0.03em;color:#1C0E06;line-height:1.1;">Why Caribbean Homes</h2>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem;">

        <div class="reveal" style="padding:2.25rem;border:1px solid rgba(28,14,6,0.1);border-radius:2px;transition:border-color 0.25s ease;" onmouseover="this.style.borderColor='rgba(200,149,42,0.3)'" onmouseout="this.style.borderColor='rgba(28,14,6,0.1)'">
          <div class="value-icon" style="margin-bottom:1.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8952A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <h3 style="font-family:'Roboto Mono',monospace;font-weight:700;font-size:1.05rem;color:#1C0E06;margin-bottom:0.75rem;letter-spacing:-0.01em;">Local Expertise</h3>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.875rem;font-weight:300;line-height:1.8;color:rgba(28,14,6,0.7);margin-bottom:1rem;">Our agents aren't flown in — they live, work, and raise families on the islands they represent. They know which side of Mullins Bay the trade winds favour in December and which Soufrière streets flood after heavy rain.</p>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.875rem;font-weight:300;line-height:1.8;color:rgba(28,14,6,0.7);">That lived-in knowledge shapes every recommendation we make.</p>
        </div>

        <div class="reveal" style="padding:2.25rem;border:1px solid rgba(28,14,6,0.1);border-radius:2px;transition:border-color 0.25s ease;" onmouseover="this.style.borderColor='rgba(200,149,42,0.3)'" onmouseout="this.style.borderColor='rgba(28,14,6,0.1)'">
          <div class="value-icon" style="margin-bottom:1.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8952A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <h3 style="font-family:'Roboto Mono',monospace;font-weight:700;font-size:1.05rem;color:#1C0E06;margin-bottom:0.75rem;letter-spacing:-0.01em;">Curated Luxury</h3>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.875rem;font-weight:300;line-height:1.8;color:rgba(28,14,6,0.7);margin-bottom:1rem;">We decline more listings than we accept. Every property that carries the Caribbean Homes name has been personally visited, structurally reviewed, and judged against a consistent standard for location, craftsmanship, and investment integrity.</p>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.875rem;font-weight:300;line-height:1.8;color:rgba(28,14,6,0.7);">You will never waste a showing on something that shouldn't be on the market.</p>
        </div>

        <div class="reveal" style="padding:2.25rem;border:1px solid rgba(28,14,6,0.1);border-radius:2px;transition:border-color 0.25s ease;" onmouseover="this.style.borderColor='rgba(200,149,42,0.3)'" onmouseout="this.style.borderColor='rgba(28,14,6,0.1)'">
          <div class="value-icon" style="margin-bottom:1.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8952A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h3 style="font-family:'Roboto Mono',monospace;font-weight:700;font-size:1.05rem;color:#1C0E06;margin-bottom:0.75rem;letter-spacing:-0.01em;">Full-Service Support</h3>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.875rem;font-weight:300;line-height:1.8;color:rgba(28,14,6,0.7);margin-bottom:1rem;">From the first virtual tour through legal closing and beyond, we coordinate every specialist you'll need — attorneys, surveyors, lenders, architects, property managers, relocation logistics.</p>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.875rem;font-weight:300;line-height:1.8;color:rgba(28,14,6,0.7);">One point of contact. One accountable team.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       MEET THE TEAM
  ═══════════════════════════════════════════ -->
  <section style="padding:6rem 2rem;background:#F0E6CC;">
    <div style="max-width:1280px;margin:0 auto;">
      <div class="reveal" style="text-align:center;margin-bottom:4rem;">
        <p style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:0.75rem;">Our People</p>
        <h2 style="font-family:'Roboto Mono',monospace;font-size:clamp(1.8rem,4vw,2.75rem);font-weight:700;letter-spacing:-0.03em;color:#1C0E06;line-height:1.1;">Meet the Team</h2>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.75rem;">

        <div class="reveal" style="background:#FFFFFF;border-radius:2px;padding:2rem;text-align:center;border-bottom:3px solid #C8952A;">
          <div style="width:96px;height:96px;border-radius:50%;background:linear-gradient(135deg,#7B4A28,#C8952A);margin:0 auto 1.25rem;"></div>
          <h3 style="font-family:'Roboto Mono',monospace;font-weight:700;font-size:1rem;color:#1C0E06;margin-bottom:0.25rem;">Anika Bovell</h3>
          <p style="font-family:'Roboto Mono',monospace;font-size:0.68rem;letter-spacing:0.12em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:0.75rem;">Founder & Principal Broker</p>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.75rem;color:rgba(28,14,6,0.45);margin-bottom:1rem;">Barbados</p>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.84rem;font-weight:300;line-height:1.7;color:rgba(28,14,6,0.65);">Eighteen years in Caribbean real estate. Third-generation Bajan. Trained in London; rooted in Bridgetown.</p>
        </div>

        <div class="reveal" style="background:#FFFFFF;border-radius:2px;padding:2rem;text-align:center;border-bottom:3px solid #C8952A;">
          <div style="width:96px;height:96px;border-radius:50%;background:linear-gradient(135deg,#C4874A,#7B4A28);margin:0 auto 1.25rem;"></div>
          <h3 style="font-family:'Roboto Mono',monospace;font-weight:700;font-size:1rem;color:#1C0E06;margin-bottom:0.25rem;">Dante Morales</h3>
          <p style="font-family:'Roboto Mono',monospace;font-size:0.68rem;letter-spacing:0.12em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:0.75rem;">Senior Agent</p>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.75rem;color:rgba(28,14,6,0.45);margin-bottom:1rem;">St. Lucia & Grenada</p>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.84rem;font-weight:300;line-height:1.7;color:rgba(28,14,6,0.65);">Specialises in hillside estates and eco-builds. Former architect. Speaks English, French, and Kweyol.</p>
        </div>

        <div class="reveal" style="background:#FFFFFF;border-radius:2px;padding:2rem;text-align:center;border-bottom:3px solid #C8952A;">
          <div style="width:96px;height:96px;border-radius:50%;background:linear-gradient(135deg,#2D2020,#7B4A28);margin:0 auto 1.25rem;"></div>
          <h3 style="font-family:'Roboto Mono',monospace;font-weight:700;font-size:1rem;color:#1C0E06;margin-bottom:0.25rem;">Priya Ramkissoon</h3>
          <p style="font-family:'Roboto Mono',monospace;font-size:0.68rem;letter-spacing:0.12em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:0.75rem;">Head of Investment</p>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.75rem;color:rgba(28,14,6,0.45);margin-bottom:1rem;">Trinidad & Cayman Islands</p>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.84rem;font-weight:300;line-height:1.7;color:rgba(28,14,6,0.65);">Advises on yield, residency-linked purchases, and structured financing. CFA charterholder with twelve years in the region.</p>
        </div>

        <div class="reveal" style="background:#FFFFFF;border-radius:2px;padding:2rem;text-align:center;border-bottom:3px solid #C8952A;">
          <div style="width:96px;height:96px;border-radius:50%;background:linear-gradient(135deg,#C8952A,#C4874A);margin:0 auto 1.25rem;"></div>
          <h3 style="font-family:'Roboto Mono',monospace;font-weight:700;font-size:1rem;color:#1C0E06;margin-bottom:0.25rem;">Marcus Whitfield</h3>
          <p style="font-family:'Roboto Mono',monospace;font-size:0.68rem;letter-spacing:0.12em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:0.75rem;">Client Relocation Lead</p>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.75rem;color:rgba(28,14,6,0.45);margin-bottom:1rem;">Jamaica & The Bahamas</p>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.84rem;font-weight:300;line-height:1.7;color:rgba(28,14,6,0.65);">Handles schools, shipping, visas, and the thousand details of an island move. Has relocated more than 200 families.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       CTA BANNER
  ═══════════════════════════════════════════ -->
  <section style="padding:5rem 2rem;background:linear-gradient(135deg,#2D1A08 0%,#7B4A28 50%,#3D2010 100%);position:relative;overflow:hidden;">
    <div style="position:absolute;top:-60px;right:-60px;width:300px;height:300px;border-radius:50%;border:1px solid rgba(200,149,42,0.1);pointer-events:none;"></div>
    <div style="position:absolute;top:-30px;right:-30px;width:200px;height:200px;border-radius:50%;border:1px solid rgba(200,149,42,0.08);pointer-events:none;"></div>
    <div style="position:absolute;bottom:-80px;left:-40px;width:250px;height:250px;border-radius:50%;border:1px solid rgba(240,230,204,0.06);pointer-events:none;"></div>
    <div class="reveal" style="max-width:800px;margin:0 auto;text-align:center;position:relative;z-index:1;">
      <p style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.22em;text-transform:uppercase;color:rgba(240,230,204,0.65);font-weight:600;margin-bottom:1rem;">Ready to Begin?</p>
      <h2 style="font-family:'Roboto Mono',monospace;font-size:clamp(1.75rem,4vw,2.75rem);font-weight:700;letter-spacing:-0.03em;color:#F0E6CC;line-height:1.1;margin-bottom:1.25rem;">Your Caribbean Home<br/>is Waiting for You</h2>
      <p style="font-family:'Montserrat',sans-serif;font-size:1rem;font-weight:300;line-height:1.75;color:rgba(240,230,204,0.65);margin-bottom:2.5rem;max-width:480px;margin-left:auto;margin-right:auto;">Schedule a private consultation with our team. No pressure, no obligations — just expert guidance towards your island dream.</p>
      <a href="contact.html" class="btn-gold" style="font-size:0.82rem;">Get in Touch</a>
    </div>
  </section>

```

- [ ] **Step 5: Start preview server and navigate to about.html**

Run (or reuse existing server):
```bash
# Server is already running on port 3000 per .claude/launch.json
```
Then open http://localhost:3000/about.html. Expected:
- Page hero "Building Caribbean Dreams Since 2008" visible with breadcrumb "Home / About"
- Our Story two-column section renders
- 3 expanded Why Caribbean Homes cards render
- 4 team cards render with gradient avatars
- CTA banner at bottom with "Get in Touch" link
- Footer renders
- No console errors

- [ ] **Step 6: Commit**

```bash
git add about.html
git commit -m "Add dedicated About page with team and expanded value props

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Task 2: Create `testimonials.html`

**Files:**
- Create: `testimonials.html`

- [ ] **Step 1: Copy `Homepage.html` to `testimonials.html`**

```bash
cp Homepage.html testimonials.html
```

- [ ] **Step 2: Update `<title>`**

Find:
```html
<title>Caribbean Homes — Find Your Paradise</title>
```
Replace:
```html
<title>Client Stories — Caribbean Homes</title>
```

- [ ] **Step 3: Apply all nav/footer link edits (same as Task 1 Step 3), but highlight "Testimonials" as the active page**

Apply the identical desktop nav, mobile menu, logo anchor, and footer nav edits from Task 1 Step 3. Then change the active-page highlight:

- In the desktop nav block, remove the `style="color:#C8952A;opacity:1;"` from the About link and ADD it to the Testimonials link:
```
<a href="about.html" class="nav-link">About</a>
        <a href="testimonials.html" class="nav-link" style="color:#C8952A;opacity:1;">Testimonials</a>
```
- In the mobile menu block, remove the `;color:#C8952A;opacity:1;` from the About link's style and ADD it to the Testimonials link:
```
<a href="about.html" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">About</a>
      <a href="testimonials.html" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);color:#C8952A;opacity:1;">Testimonials</a>
```

- [ ] **Step 4: Replace homepage body content with Testimonials page sections**

Delete everything between `</nav>` (end of mobile menu) and `<footer` — same scope as Task 1 Step 4.

Replace with:

```html

  <!-- ═══════════════════════════════════════════
       PAGE HERO
  ═══════════════════════════════════════════ -->
  <section style="padding:10rem 2rem 5rem;background:linear-gradient(to bottom,#F0E6CC 0%,#EDE0C4 100%);">
    <div style="max-width:1100px;margin:0 auto;text-align:center;">
      <p class="anim-fadeup delay-100" style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.22em;text-transform:uppercase;color:rgba(28,14,6,0.45);font-weight:600;margin-bottom:1rem;">
        <a href="Homepage.html" style="color:inherit;text-decoration:none;border-bottom:1px solid rgba(28,14,6,0.15);">Home</a>
        <span style="margin:0 0.5rem;opacity:0.4;">/</span>
        <span style="color:#C8952A;">Testimonials</span>
      </p>
      <p class="anim-fadeup delay-200" style="font-family:'Roboto Mono',monospace;font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:1.25rem;">Client Stories</p>
      <h1 class="anim-fadeup delay-300" style="font-family:'Roboto Mono',monospace;font-size:clamp(2.2rem,5vw,3.5rem);font-weight:700;letter-spacing:-0.03em;color:#1C0E06;line-height:1.08;margin-bottom:1.5rem;">What Our Clients Say</h1>
      <p class="anim-fadeup delay-400" style="font-family:'Montserrat',sans-serif;font-size:1.05rem;font-weight:300;line-height:1.75;color:rgba(28,14,6,0.6);max-width:620px;margin:0 auto;">Nine stories from families, investors, and retirees who trusted Caribbean Homes to help them cross an ocean.</p>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       BY THE NUMBERS
  ═══════════════════════════════════════════ -->
  <section style="padding:3.5rem 2rem;background:#EDE0C4;border-top:1px solid rgba(28,14,6,0.06);border-bottom:1px solid rgba(28,14,6,0.06);">
    <div class="reveal" style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:2rem;text-align:center;">
      <div>
        <p style="font-family:'Roboto Mono',monospace;font-size:2rem;font-weight:700;color:#C8952A;letter-spacing:-0.02em;line-height:1;">350+</p>
        <p style="font-family:'Montserrat',sans-serif;font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;color:rgba(28,14,6,0.55);margin-top:0.5rem;">Properties Sold</p>
      </div>
      <div>
        <p style="font-family:'Roboto Mono',monospace;font-size:2rem;font-weight:700;color:#C8952A;letter-spacing:-0.02em;line-height:1;">98%</p>
        <p style="font-family:'Montserrat',sans-serif;font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;color:rgba(28,14,6,0.55);margin-top:0.5rem;">Client Satisfaction</p>
      </div>
      <div>
        <p style="font-family:'Roboto Mono',monospace;font-size:2rem;font-weight:700;color:#C8952A;letter-spacing:-0.02em;line-height:1;">12</p>
        <p style="font-family:'Montserrat',sans-serif;font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;color:rgba(28,14,6,0.55);margin-top:0.5rem;">Islands Covered</p>
      </div>
      <div>
        <p style="font-family:'Roboto Mono',monospace;font-size:2rem;font-weight:700;color:#C8952A;letter-spacing:-0.02em;line-height:1;">$1.2B+</p>
        <p style="font-family:'Montserrat',sans-serif;font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;color:rgba(28,14,6,0.55);margin-top:0.5rem;">Transacted</p>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       TESTIMONIAL GRID (9 cards)
  ═══════════════════════════════════════════ -->
  <section style="padding:6rem 2rem;background:#F0E6CC;">
    <div style="max-width:1280px;margin:0 auto;">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.75rem;">

        <div class="testimonial-card reveal">
          <span class="quote-mark">"</span>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.9rem;font-weight:300;line-height:1.75;color:rgba(28,14,6,0.72);margin-top:1.75rem;margin-bottom:1.5rem;">Caribbean Homes found us a beachfront property in Barbados that was beyond anything we imagined. The process was seamless from start to finish.</p>
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#7B4A28,#C8952A);flex-shrink:0;"></div>
            <div>
              <p style="font-family:'Roboto Mono',monospace;font-size:0.82rem;font-weight:700;color:#1C0E06;">James &amp; Claire F.</p>
              <p style="font-family:'Montserrat',sans-serif;font-size:0.72rem;color:rgba(28,14,6,0.45);margin-top:0.1rem;">London, UK → Barbados</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card reveal">
          <span class="quote-mark">"</span>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.9rem;font-weight:300;line-height:1.75;color:rgba(28,14,6,0.72);margin-top:1.75rem;margin-bottom:1.5rem;">Their local knowledge is unmatched. We looked at 12 islands before choosing St. Lucia, and the team guided us every step of the way with patience and expertise.</p>
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#C4874A,#7B4A28);flex-shrink:0;"></div>
            <div>
              <p style="font-family:'Roboto Mono',monospace;font-size:0.82rem;font-weight:700;color:#1C0E06;">Priya M.</p>
              <p style="font-family:'Montserrat',sans-serif;font-size:0.72rem;color:rgba(28,14,6,0.45);margin-top:0.1rem;">Toronto, CA → St. Lucia</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card reveal">
          <span class="quote-mark">"</span>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.9rem;font-weight:300;line-height:1.75;color:rgba(28,14,6,0.72);margin-top:1.75rem;margin-bottom:1.5rem;">Investing in a Cayman condo was a dream. Caribbean Homes made it a reality — and the ROI in year one exceeded our projections by 30%.</p>
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#2D2020,#7B4A28);flex-shrink:0;"></div>
            <div>
              <p style="font-family:'Roboto Mono',monospace;font-size:0.82rem;font-weight:700;color:#1C0E06;">Marcus T.</p>
              <p style="font-family:'Montserrat',sans-serif;font-size:0.72rem;color:rgba(28,14,6,0.45);margin-top:0.1rem;">New York, US → Cayman Islands</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card reveal">
          <span class="quote-mark">"</span>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.9rem;font-weight:300;line-height:1.75;color:rgba(28,14,6,0.72);margin-top:1.75rem;margin-bottom:1.5rem;">We bought sight-unseen from Singapore based on video tours and Anika's honesty. Landing in Nassau felt like coming home to something we already knew.</p>
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#C8952A,#C4874A);flex-shrink:0;"></div>
            <div>
              <p style="font-family:'Roboto Mono',monospace;font-size:0.82rem;font-weight:700;color:#1C0E06;">Wei &amp; Linh T.</p>
              <p style="font-family:'Montserrat',sans-serif;font-size:0.72rem;color:rgba(28,14,6,0.45);margin-top:0.1rem;">Singapore → The Bahamas</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card reveal">
          <span class="quote-mark">"</span>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.9rem;font-weight:300;line-height:1.75;color:rgba(28,14,6,0.72);margin-top:1.75rem;margin-bottom:1.5rem;">Dante understood what a hilltop actually feels like to live on — sun angles, driveway gradients, which builders cut corners. That detail saved us from two bad decisions.</p>
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#7B4A28,#2D2020);flex-shrink:0;"></div>
            <div>
              <p style="font-family:'Roboto Mono',monospace;font-size:0.82rem;font-weight:700;color:#1C0E06;">Eleanor R.</p>
              <p style="font-family:'Montserrat',sans-serif;font-size:0.72rem;color:rgba(28,14,6,0.45);margin-top:0.1rem;">Edinburgh, UK → Grenada</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card reveal">
          <span class="quote-mark">"</span>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.9rem;font-weight:300;line-height:1.75;color:rgba(28,14,6,0.72);margin-top:1.75rem;margin-bottom:1.5rem;">Retiring to Antigua seemed impossible to organise from abroad. Marcus handled the visa paperwork, shipping, and even found us a doctor before we landed.</p>
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#C4874A,#C8952A);flex-shrink:0;"></div>
            <div>
              <p style="font-family:'Roboto Mono',monospace;font-size:0.82rem;font-weight:700;color:#1C0E06;">Harold &amp; Jeanette P.</p>
              <p style="font-family:'Montserrat',sans-serif;font-size:0.72rem;color:rgba(28,14,6,0.45);margin-top:0.1rem;">Vancouver, CA → Antigua</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card reveal">
          <span class="quote-mark">"</span>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.9rem;font-weight:300;line-height:1.75;color:rgba(28,14,6,0.72);margin-top:1.75rem;margin-bottom:1.5rem;">Priya modelled three scenarios for our Port of Spain portfolio and talked us out of the flashiest option. Twelve months later, that conservative call has proven exactly right.</p>
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#2D2020,#C8952A);flex-shrink:0;"></div>
            <div>
              <p style="font-family:'Roboto Mono',monospace;font-size:0.82rem;font-weight:700;color:#1C0E06;">Rajiv K.</p>
              <p style="font-family:'Montserrat',sans-serif;font-size:0.72rem;color:rgba(28,14,6,0.45);margin-top:0.1rem;">Mumbai, IN → Trinidad</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card reveal">
          <span class="quote-mark">"</span>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.9rem;font-weight:300;line-height:1.75;color:rgba(28,14,6,0.72);margin-top:1.75rem;margin-bottom:1.5rem;">The villa we found in Montego Bay had a quiet history the listing didn't mention. Caribbean Homes surfaced it in the first week and saved us a painful mistake.</p>
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#7B4A28,#C4874A);flex-shrink:0;"></div>
            <div>
              <p style="font-family:'Roboto Mono',monospace;font-size:0.82rem;font-weight:700;color:#1C0E06;">Sarah D.</p>
              <p style="font-family:'Montserrat',sans-serif;font-size:0.72rem;color:rgba(28,14,6,0.45);margin-top:0.1rem;">Boston, US → Jamaica</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card reveal">
          <span class="quote-mark">"</span>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.9rem;font-weight:300;line-height:1.75;color:rgba(28,14,6,0.72);margin-top:1.75rem;margin-bottom:1.5rem;">We wanted a second home that the children could one day inherit without drama. The team explained Turks &amp; Caicos title law in plain English and found us the right lawyer.</p>
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#C8952A,#2D2020);flex-shrink:0;"></div>
            <div>
              <p style="font-family:'Roboto Mono',monospace;font-size:0.82rem;font-weight:700;color:#1C0E06;">Thomas &amp; Nadine G.</p>
              <p style="font-family:'Montserrat',sans-serif;font-size:0.72rem;color:rgba(28,14,6,0.45);margin-top:0.1rem;">Zurich, CH → Turks &amp; Caicos</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       FEATURED STORY
  ═══════════════════════════════════════════ -->
  <section style="padding:5rem 2rem 6rem;background:linear-gradient(to bottom,#F0E6CC 0%,#EDE0C4 100%);">
    <div class="reveal" style="max-width:900px;margin:0 auto;background:#FFFFFF;border-radius:2px;padding:3.5rem 3rem;position:relative;border-left:4px solid #C8952A;">
      <p style="font-family:'Roboto Mono',monospace;font-size:0.68rem;letter-spacing:0.2em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:1rem;">Featured Story</p>
      <span style="font-family:'Roboto Mono',monospace;font-size:6rem;line-height:0.6;color:#C8952A;opacity:0.18;position:absolute;top:2rem;right:2.5rem;pointer-events:none;user-select:none;">"</span>
      <p style="font-family:'Montserrat',sans-serif;font-size:1.05rem;font-weight:300;line-height:1.85;color:rgba(28,14,6,0.78);margin-bottom:1.25rem;">We'd been looking on our own for three years before a friend mentioned Caribbean Homes. Within six weeks they had us walking a villa in Holetown that wasn't on any public listing. The seller's family had been quietly considering a sale for a year — Anika knew because she'd been to the house for Easter lunch the year before.</p>
      <p style="font-family:'Montserrat',sans-serif;font-size:1.05rem;font-weight:300;line-height:1.85;color:rgba(28,14,6,0.78);margin-bottom:2rem;">That's the difference. It's not a database or a search engine — it's a person who has been in the room.</p>
      <div style="display:flex;align-items:center;gap:1rem;padding-top:1.5rem;border-top:1px solid rgba(28,14,6,0.08);">
        <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#7B4A28,#C8952A);flex-shrink:0;"></div>
        <div style="flex:1;">
          <p style="font-family:'Roboto Mono',monospace;font-size:0.88rem;font-weight:700;color:#1C0E06;">David &amp; Ruth M.</p>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.78rem;color:rgba(28,14,6,0.5);margin-top:0.15rem;">Manchester, UK → Barbados · Closed 2024</p>
        </div>
        <a href="#" style="font-family:'Roboto Mono',monospace;font-size:0.72rem;letter-spacing:0.1em;text-transform:uppercase;color:#C8952A;text-decoration:none;border-bottom:1px solid rgba(200,149,42,0.4);padding-bottom:2px;white-space:nowrap;">Read full case study →</a>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       CTA BANNER
  ═══════════════════════════════════════════ -->
  <section style="padding:5rem 2rem;background:linear-gradient(135deg,#2D1A08 0%,#7B4A28 50%,#3D2010 100%);position:relative;overflow:hidden;">
    <div style="position:absolute;top:-60px;right:-60px;width:300px;height:300px;border-radius:50%;border:1px solid rgba(200,149,42,0.1);pointer-events:none;"></div>
    <div style="position:absolute;top:-30px;right:-30px;width:200px;height:200px;border-radius:50%;border:1px solid rgba(200,149,42,0.08);pointer-events:none;"></div>
    <div style="position:absolute;bottom:-80px;left:-40px;width:250px;height:250px;border-radius:50%;border:1px solid rgba(240,230,204,0.06);pointer-events:none;"></div>
    <div class="reveal" style="max-width:800px;margin:0 auto;text-align:center;position:relative;z-index:1;">
      <p style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.22em;text-transform:uppercase;color:rgba(240,230,204,0.65);font-weight:600;margin-bottom:1rem;">Your Story Next?</p>
      <h2 style="font-family:'Roboto Mono',monospace;font-size:clamp(1.75rem,4vw,2.75rem);font-weight:700;letter-spacing:-0.03em;color:#F0E6CC;line-height:1.1;margin-bottom:1.25rem;">Let's Write the Next<br/>Caribbean Homecoming</h2>
      <p style="font-family:'Montserrat',sans-serif;font-size:1rem;font-weight:300;line-height:1.75;color:rgba(240,230,204,0.65);margin-bottom:2.5rem;max-width:480px;margin-left:auto;margin-right:auto;">Tell us about your ideal island. We'll take it from there.</p>
      <a href="contact.html" class="btn-gold" style="font-size:0.82rem;">Get in Touch</a>
    </div>
  </section>

```

- [ ] **Step 5: Verify in preview**

Open http://localhost:3000/testimonials.html. Expected:
- Page hero "What Our Clients Say" with breadcrumb "Home / Testimonials"
- 4-stat strip below hero
- 9 testimonial cards in grid (responsive)
- Featured story card with gold left border and "Read full case study" link
- CTA banner at bottom
- Footer renders

- [ ] **Step 6: Commit**

```bash
git add testimonials.html
git commit -m "Add dedicated Testimonials page with 9 quotes and featured story

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Task 3: Create `contact.html`

**Files:**
- Create: `contact.html`

- [ ] **Step 1: Copy `Homepage.html` to `contact.html`**

```bash
cp Homepage.html contact.html
```

- [ ] **Step 2: Update `<title>`**

Find:
```html
<title>Caribbean Homes — Find Your Paradise</title>
```
Replace:
```html
<title>Contact — Caribbean Homes</title>
```

- [ ] **Step 3: Apply all nav/footer link edits (same as Task 1 Step 3), but highlight "Contact" as the active page**

Apply the identical link edits from Task 1 Step 3. Then:

- In desktop nav, remove the `style="color:#C8952A;opacity:1;"` from About and add it to Contact:
```
<a href="about.html" class="nav-link">About</a>
        <a href="testimonials.html" class="nav-link">Testimonials</a>
        <a href="contact.html" class="nav-link" style="color:#C8952A;opacity:1;">Contact</a>
```
- In mobile menu, move the active-style to Contact:
```
<a href="about.html" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">About</a>
      <a href="testimonials.html" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">Testimonials</a>
      <a href="contact.html" class="nav-link" style="padding:0.75rem 0;display:block;color:#C8952A;opacity:1;">Contact</a>
```

- [ ] **Step 4: Add `<details>` styles inside the `<style>` block**

Find the existing closing `</style>` tag (around line 289). Immediately before it, insert:

```css

    /* ── FAQ details ── */
    details.faq-item {
      background: #FFFFFF;
      border: 1px solid rgba(28,14,6,0.08);
      border-radius: 2px;
      padding: 1.25rem 1.5rem;
      transition: border-color 0.2s ease;
    }
    details.faq-item[open] {
      border-color: rgba(200,149,42,0.35);
    }
    details.faq-item summary {
      font-family: 'Roboto Mono', monospace;
      font-weight: 700;
      font-size: 0.92rem;
      color: #1C0E06;
      cursor: pointer;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    details.faq-item summary::-webkit-details-marker { display: none; }
    details.faq-item summary::after {
      content: '+';
      font-family: 'Roboto Mono', monospace;
      font-size: 1.5rem;
      color: #C8952A;
      font-weight: 400;
      line-height: 1;
      transition: transform 0.2s ease;
    }
    details.faq-item[open] summary::after {
      content: '−';
    }
    details.faq-item > p {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.88rem;
      font-weight: 300;
      line-height: 1.8;
      color: rgba(28,14,6,0.7);
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(28,14,6,0.06);
    }
```

- [ ] **Step 5: Replace homepage body content with Contact page sections**

Delete everything between `</nav>` and `<footer` — same as Task 1 Step 4. Replace with:

```html

  <!-- ═══════════════════════════════════════════
       PAGE HERO
  ═══════════════════════════════════════════ -->
  <section style="padding:10rem 2rem 4rem;background:linear-gradient(to bottom,#F0E6CC 0%,#EDE0C4 100%);">
    <div style="max-width:1100px;margin:0 auto;text-align:center;">
      <p class="anim-fadeup delay-100" style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.22em;text-transform:uppercase;color:rgba(28,14,6,0.45);font-weight:600;margin-bottom:1rem;">
        <a href="Homepage.html" style="color:inherit;text-decoration:none;border-bottom:1px solid rgba(28,14,6,0.15);">Home</a>
        <span style="margin:0 0.5rem;opacity:0.4;">/</span>
        <span style="color:#C8952A;">Contact</span>
      </p>
      <p class="anim-fadeup delay-200" style="font-family:'Roboto Mono',monospace;font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:1.25rem;">Get in Touch</p>
      <h1 class="anim-fadeup delay-300" style="font-family:'Roboto Mono',monospace;font-size:clamp(2.2rem,5vw,3.5rem);font-weight:700;letter-spacing:-0.03em;color:#1C0E06;line-height:1.08;margin-bottom:1.5rem;">Let's Find Your<br/>Perfect Property</h1>
      <p class="anim-fadeup delay-400" style="font-family:'Montserrat',sans-serif;font-size:1.05rem;font-weight:300;line-height:1.75;color:rgba(28,14,6,0.6);max-width:620px;margin:0 auto;">Tell us where you're heading and what matters most. A specialist for your island will respond within one business day.</p>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       CONTACT INFO + FORM
  ═══════════════════════════════════════════ -->
  <section style="padding:4rem 2rem 6rem;background:#F0E6CC;">
    <div style="max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1.3fr;gap:4rem;align-items:start;" class="md:grid-cols-2">

      <!-- Left: info -->
      <div class="reveal">
        <p style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:0.75rem;">Reach Us Directly</p>
        <h2 style="font-family:'Roboto Mono',monospace;font-size:clamp(1.5rem,3vw,2rem);font-weight:700;letter-spacing:-0.03em;color:#1C0E06;line-height:1.1;margin-bottom:1.25rem;">Prefer a Conversation?</h2>
        <p style="font-family:'Montserrat',sans-serif;font-size:0.9rem;font-weight:300;line-height:1.75;color:rgba(28,14,6,0.6);margin-bottom:2.5rem;">Our team is ready to assist you. Reach out by phone, email, or drop by the Bridgetown office.</p>

        <div style="display:flex;flex-direction:column;gap:1.25rem;">
          <div style="display:flex;align-items:center;gap:1rem;">
            <div class="value-icon" style="width:40px;height:40px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8952A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.64 4.5 2 2 0 0 1 3.6 2.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <p style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(28,14,6,0.4);margin-bottom:0.1rem;">Phone</p>
              <p style="font-family:'Montserrat',sans-serif;font-size:0.9rem;color:#1C0E06;">+1 (246) 555-0190</p>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:1rem;">
            <div class="value-icon" style="width:40px;height:40px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8952A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <p style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(28,14,6,0.4);margin-bottom:0.1rem;">Email</p>
              <p style="font-family:'Montserrat',sans-serif;font-size:0.9rem;color:#1C0E06;">hello@caribbeanhomes.com</p>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:1rem;">
            <div class="value-icon" style="width:40px;height:40px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8952A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <p style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(28,14,6,0.4);margin-bottom:0.1rem;">Office</p>
              <p style="font-family:'Montserrat',sans-serif;font-size:0.9rem;color:#1C0E06;">Bridgetown, Barbados</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: form -->
      <div class="reveal">
        <form style="display:flex;flex-direction:column;gap:1.25rem;" onsubmit="return false;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <div>
              <label style="font-family:'Roboto Mono',monospace;font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;color:rgba(28,14,6,0.5);display:block;margin-bottom:0.5rem;">First Name</label>
              <input type="text" placeholder="James" style="width:100%;background:#FFFFFF;border:1px solid rgba(28,14,6,0.12);border-radius:2px;padding:0.75rem 1rem;color:#1C0E06;font-family:'Montserrat',sans-serif;font-size:0.875rem;outline:none;transition:border-color 0.2s ease;" onfocus="this.style.borderColor='rgba(200,149,42,0.5)'" onblur="this.style.borderColor='rgba(28,14,6,0.12)'" />
            </div>
            <div>
              <label style="font-family:'Roboto Mono',monospace;font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;color:rgba(28,14,6,0.5);display:block;margin-bottom:0.5rem;">Last Name</label>
              <input type="text" placeholder="Chen" style="width:100%;background:#FFFFFF;border:1px solid rgba(28,14,6,0.12);border-radius:2px;padding:0.75rem 1rem;color:#1C0E06;font-family:'Montserrat',sans-serif;font-size:0.875rem;outline:none;transition:border-color 0.2s ease;" onfocus="this.style.borderColor='rgba(200,149,42,0.5)'" onblur="this.style.borderColor='rgba(28,14,6,0.12)'" />
            </div>
          </div>
          <div>
            <label style="font-family:'Roboto Mono',monospace;font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;color:rgba(28,14,6,0.5);display:block;margin-bottom:0.5rem;">Email</label>
            <input type="email" placeholder="james@example.com" style="width:100%;background:#FFFFFF;border:1px solid rgba(28,14,6,0.12);border-radius:2px;padding:0.75rem 1rem;color:#1C0E06;font-family:'Montserrat',sans-serif;font-size:0.875rem;outline:none;transition:border-color 0.2s ease;" onfocus="this.style.borderColor='rgba(200,149,42,0.5)'" onblur="this.style.borderColor='rgba(28,14,6,0.12)'" />
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <div>
              <label style="font-family:'Roboto Mono',monospace;font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;color:rgba(28,14,6,0.5);display:block;margin-bottom:0.5rem;">Island of Interest</label>
              <select style="width:100%;background:#FFFFFF;border:1px solid rgba(28,14,6,0.12);border-radius:2px;padding:0.75rem 1rem;color:#1C0E06;font-family:'Montserrat',sans-serif;font-size:0.875rem;outline:none;appearance:none;transition:border-color 0.2s ease;" onfocus="this.style.borderColor='rgba(200,149,42,0.5)'" onblur="this.style.borderColor='rgba(28,14,6,0.12)'">
                <option value="">Select an island…</option>
                <option>Barbados</option>
                <option>St. Lucia</option>
                <option>Jamaica</option>
                <option>Trinidad &amp; Tobago</option>
                <option>Cayman Islands</option>
                <option>The Bahamas</option>
                <option>Antigua</option>
                <option>Grenada</option>
                <option>Turks &amp; Caicos</option>
                <option>Other / Open</option>
              </select>
            </div>
            <div>
              <label style="font-family:'Roboto Mono',monospace;font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;color:rgba(28,14,6,0.5);display:block;margin-bottom:0.5rem;">Reason for Inquiry</label>
              <select style="width:100%;background:#FFFFFF;border:1px solid rgba(28,14,6,0.12);border-radius:2px;padding:0.75rem 1rem;color:#1C0E06;font-family:'Montserrat',sans-serif;font-size:0.875rem;outline:none;appearance:none;transition:border-color 0.2s ease;" onfocus="this.style.borderColor='rgba(200,149,42,0.5)'" onblur="this.style.borderColor='rgba(28,14,6,0.12)'">
                <option value="">Select a reason…</option>
                <option>Buying</option>
                <option>Selling</option>
                <option>Investment</option>
                <option>Relocation</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div>
            <label style="font-family:'Roboto Mono',monospace;font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;color:rgba(28,14,6,0.5);display:block;margin-bottom:0.5rem;">Budget Range <span style="color:rgba(28,14,6,0.3);text-transform:none;letter-spacing:0;font-weight:400;">(optional)</span></label>
            <select style="width:100%;background:#FFFFFF;border:1px solid rgba(28,14,6,0.12);border-radius:2px;padding:0.75rem 1rem;color:#1C0E06;font-family:'Montserrat',sans-serif;font-size:0.875rem;outline:none;appearance:none;transition:border-color 0.2s ease;" onfocus="this.style.borderColor='rgba(200,149,42,0.5)'" onblur="this.style.borderColor='rgba(28,14,6,0.12)'">
              <option value="">Prefer not to say</option>
              <option>Under $500K</option>
              <option>$500K – $1M</option>
              <option>$1M – $3M</option>
              <option>$3M+</option>
              <option>Flexible</option>
            </select>
          </div>
          <div>
            <label style="font-family:'Roboto Mono',monospace;font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;color:rgba(28,14,6,0.5);display:block;margin-bottom:0.5rem;">Message</label>
            <textarea rows="5" placeholder="Tell us about your ideal property…" style="width:100%;background:#FFFFFF;border:1px solid rgba(28,14,6,0.12);border-radius:2px;padding:0.75rem 1rem;color:#1C0E06;font-family:'Montserrat',sans-serif;font-size:0.875rem;outline:none;resize:vertical;transition:border-color 0.2s ease;" onfocus="this.style.borderColor='rgba(200,149,42,0.5)'" onblur="this.style.borderColor='rgba(28,14,6,0.12)'"></textarea>
          </div>
          <button type="submit" class="btn-gold" style="align-self:flex-start;">Send Message</button>
        </form>
      </div>

    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       OFFICE & HOURS
  ═══════════════════════════════════════════ -->
  <section style="padding:5rem 2rem;background:#EDE0C4;border-top:1px solid rgba(28,14,6,0.06);border-bottom:1px solid rgba(28,14,6,0.06);">
    <div style="max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1.2fr;gap:3rem;align-items:stretch;" class="md:grid-cols-2">

      <div class="reveal" style="background:#FFFFFF;padding:2.5rem;border-radius:2px;border-bottom:3px solid #C8952A;">
        <p style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:0.75rem;">Visit Us</p>
        <h3 style="font-family:'Roboto Mono',monospace;font-size:1.3rem;font-weight:700;color:#1C0E06;margin-bottom:1.5rem;letter-spacing:-0.02em;">Bridgetown Office</h3>
        <p style="font-family:'Montserrat',sans-serif;font-size:0.9rem;font-weight:400;line-height:1.75;color:rgba(28,14,6,0.72);margin-bottom:2rem;">
          14 Hastings Main Road<br/>
          Christ Church, BB15154<br/>
          Barbados
        </p>
        <p style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(28,14,6,0.4);margin-bottom:0.75rem;">Office Hours</p>
        <div style="font-family:'Montserrat',sans-serif;font-size:0.88rem;line-height:1.9;color:rgba(28,14,6,0.72);">
          <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(28,14,6,0.06);padding:0.35rem 0;"><span>Monday – Friday</span><span style="color:#1C0E06;font-weight:500;">9:00 – 18:00 AST</span></div>
          <div style="display:flex;justify-content:space-between;border-bottom:1px solid rgba(28,14,6,0.06);padding:0.35rem 0;"><span>Saturday</span><span style="color:#1C0E06;font-weight:500;">10:00 – 14:00 AST</span></div>
          <div style="display:flex;justify-content:space-between;padding:0.35rem 0;"><span>Sunday</span><span style="color:rgba(28,14,6,0.4);">Closed</span></div>
        </div>
      </div>

      <div class="reveal" style="background:linear-gradient(135deg,#C4874A 0%,#7B4A28 50%,#2D1A08 100%);border-radius:2px;position:relative;overflow:hidden;min-height:320px;display:flex;align-items:center;justify-content:center;">
        <div style="position:absolute;inset:0;background-image:radial-gradient(circle at 30% 40%,rgba(200,149,42,0.3) 0%,transparent 40%),radial-gradient(circle at 70% 60%,rgba(240,230,204,0.12) 0%,transparent 45%);pointer-events:none;"></div>
        <div style="position:absolute;top:20%;left:15%;width:3px;height:3px;background:rgba(240,230,204,0.3);border-radius:50%;"></div>
        <div style="position:absolute;top:60%;left:75%;width:3px;height:3px;background:rgba(240,230,204,0.3);border-radius:50%;"></div>
        <div style="position:absolute;top:35%;left:55%;width:2px;height:2px;background:rgba(240,230,204,0.25);border-radius:50%;"></div>
        <div style="text-align:center;position:relative;z-index:1;">
          <div style="width:56px;height:56px;border-radius:50%;background:#C8952A;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;box-shadow:0 8px 30px rgba(200,149,42,0.4);">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C0E06" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <p style="font-family:'Roboto Mono',monospace;font-size:0.72rem;letter-spacing:0.18em;text-transform:uppercase;color:rgba(240,230,204,0.85);font-weight:600;margin-bottom:0.5rem;">Bridgetown, Barbados</p>
          <p style="font-family:'Montserrat',sans-serif;font-size:0.82rem;color:rgba(240,230,204,0.55);">13.1° N, 59.6° W</p>
        </div>
      </div>

    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       FAQ
  ═══════════════════════════════════════════ -->
  <section style="padding:6rem 2rem;background:#F0E6CC;">
    <div style="max-width:900px;margin:0 auto;">
      <div class="reveal" style="text-align:center;margin-bottom:3.5rem;">
        <p style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:0.75rem;">Common Questions</p>
        <h2 style="font-family:'Roboto Mono',monospace;font-size:clamp(1.8rem,4vw,2.5rem);font-weight:700;letter-spacing:-0.03em;color:#1C0E06;line-height:1.1;">Frequently Asked</h2>
      </div>

      <div style="display:flex;flex-direction:column;gap:1rem;">

        <details class="faq-item reveal">
          <summary>What are the typical closing costs for a Caribbean purchase?</summary>
          <p>Closing costs vary by island but generally run 7–11% of purchase price. This typically includes stamp duty (usually the largest line item, 1–10% depending on jurisdiction), attorney fees (1–2%), property transfer tax, and registration fees. Your Caribbean Homes agent will prepare a full cost worksheet specific to your target island before you make an offer, so there are no surprises at closing.</p>
        </details>

        <details class="faq-item reveal">
          <summary>Can I buy remotely if I can't visit in person?</summary>
          <p>Yes — more than a third of our closings in the past two years were conducted entirely remotely. We offer detailed video walkthroughs, drone footage, independent inspection reports, and live video showings. A local attorney can execute documents on your behalf with a Power of Attorney. Many clients only visit once, after closing, to receive keys.</p>
        </details>

        <details class="faq-item reveal">
          <summary>What financing options exist for non-resident buyers?</summary>
          <p>Several regional banks lend to non-residents, typically at 60–70% loan-to-value with rates slightly above local resident mortgages. Alternatives include international private banks, portfolio-backed lending from wealth managers, and in some cases seller financing. Our investment team will introduce you to lenders matched to your situation and preferred island.</p>
        </details>

        <details class="faq-item reveal">
          <summary>Do you offer property management after I buy?</summary>
          <p>Yes. We partner with vetted local property management firms on every island we serve. Services range from caretaking (weekly inspections, maintenance coordination, utilities) to full rental management (short-term or long-term letting with 20–30% ROI on well-positioned properties). Management contracts are entirely separate from your purchase; you are under no obligation to engage them.</p>
        </details>

        <details class="faq-item reveal">
          <summary>Can buying property lead to Caribbean residency or citizenship?</summary>
          <p>Five Caribbean nations offer formal Citizenship-by-Investment programmes with real-estate qualifying paths — minimum thresholds range from $200,000 to $400,000 depending on the country. Several others offer residency via property purchase. These programmes change regularly and have strict due-diligence requirements. Priya Ramkissoon, our head of investment, specialises in structuring these purchases correctly from day one.</p>
        </details>

      </div>
    </div>
  </section>

```

- [ ] **Step 6: Verify in preview**

Open http://localhost:3000/contact.html. Expected:
- Page hero "Let's Find Your Perfect Property"
- Two-column info + form (form has First/Last name, Email, Island, Reason, Budget, Message)
- Office & Hours section with two-column card + styled "map" with gold pin
- FAQ section with 5 `<details>` items — clicking each toggles open with a `+` → `−` indicator
- Footer

Click at least one FAQ item to confirm expansion works.

- [ ] **Step 7: Commit**

```bash
git add contact.html
git commit -m "Add dedicated Contact page with expanded form, office hours, and FAQ

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Task 4: Update `Homepage.html` — rewire nav, trim contact to teaser, add learn-more links

**Files:**
- Modify: `Homepage.html`

- [ ] **Step 1: Rewire desktop nav (line 305–308)**

Find:
```html
<a href="listings.html" class="nav-link">Listings</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#testimonials" class="nav-link">Testimonials</a>
        <a href="#contact" class="nav-link">Contact</a>
```
Replace:
```html
<a href="listings.html" class="nav-link">Listings</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="testimonials.html" class="nav-link">Testimonials</a>
        <a href="contact.html" class="nav-link">Contact</a>
```

- [ ] **Step 2: Rewire mobile menu (line 321–324)**

Find:
```html
<a href="#listings" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">Listings</a>
      <a href="#about" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">About</a>
      <a href="#testimonials" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">Testimonials</a>
      <a href="#contact" class="nav-link" style="padding:0.75rem 0;display:block;">Contact</a>
```
Replace:
```html
<a href="#listings" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">Listings</a>
      <a href="about.html" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">About</a>
      <a href="testimonials.html" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">Testimonials</a>
      <a href="contact.html" class="nav-link" style="padding:0.75rem 0;display:block;">Contact</a>
```

Note: `#listings` in the mobile menu is intentionally retained (anchors to the Featured Listings section on the homepage).

- [ ] **Step 3: Rewire hero "Learn More" button (line 356)**

Find:
```html
<a href="#about" class="btn-outline">Learn More</a>
```
Replace:
```html
<a href="about.html" class="btn-outline">Learn More</a>
```

- [ ] **Step 4: Rewire CTA banner "Get in Touch" button (line 665)**

Find:
```html
<a href="#contact" class="btn-gold" style="font-size:0.82rem;">Get in Touch</a>
```
Replace:
```html
<a href="contact.html" class="btn-gold" style="font-size:0.82rem;">Get in Touch</a>
```

- [ ] **Step 5: Rewire footer nav links (line 783–785)**

Find:
```html
<a href="#listings" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Listings</a>
            <a href="#about" class="nav-link" style="font-size:0.82rem;opacity:0.55;">About Us</a>
            <a href="#testimonials" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Testimonials</a>
            <a href="#contact" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Contact</a>
```
Replace:
```html
<a href="#listings" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Listings</a>
            <a href="about.html" class="nav-link" style="font-size:0.82rem;opacity:0.55;">About Us</a>
            <a href="testimonials.html" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Testimonials</a>
            <a href="contact.html" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Contact</a>
```

- [ ] **Step 6: Add "Learn more about us →" link to Why Caribbean Homes section**

Find (around line 593–595):
```html
        </div>

      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       TESTIMONIALS
```
Replace with:
```html
        </div>

      </div>

      <div class="reveal" style="text-align:center;margin-top:3rem;">
        <a href="about.html" style="font-family:'Roboto Mono',monospace;font-size:0.72rem;letter-spacing:0.1em;text-transform:uppercase;color:#C8952A;text-decoration:none;border-bottom:1px solid rgba(200,149,42,0.4);padding-bottom:2px;transition:border-color 0.2s ease;" onmouseover="this.style.borderColor='#C8952A'" onmouseout="this.style.borderColor='rgba(200,149,42,0.4)'">Learn more about us →</a>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       TESTIMONIALS
```

- [ ] **Step 7: Add "Read more client stories →" link to Testimonials section**

Find the closing of the testimonials grid (around line 648–650):
```html
        </div>

      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       CTA BANNER
```
Replace with:
```html
        </div>

      </div>

      <div class="reveal" style="text-align:center;margin-top:3rem;">
        <a href="testimonials.html" style="font-family:'Roboto Mono',monospace;font-size:0.72rem;letter-spacing:0.1em;text-transform:uppercase;color:#C8952A;text-decoration:none;border-bottom:1px solid rgba(200,149,42,0.4);padding-bottom:2px;transition:border-color 0.2s ease;" onmouseover="this.style.borderColor='#C8952A'" onmouseout="this.style.borderColor='rgba(200,149,42,0.4)'">Read more client stories →</a>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════
       CTA BANNER
```

- [ ] **Step 8: Replace entire Contact section (lines 672–751) with a compact teaser**

Find the full Contact section. It begins with:
```html
  <!-- ═══════════════════════════════════════════
       CONTACT
  ═══════════════════════════════════════════ -->
  <section id="contact" style="padding:6rem 2rem;background:#F0E6CC;">
    <div style="max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start;" class="md:grid-cols-2">
```
and ends with the closing `</section>` just before the FOOTER comment block.

Replace the entire section (from the opening comment block through the closing `</section>`) with:

```html
  <!-- ═══════════════════════════════════════════
       CONTACT TEASER
  ═══════════════════════════════════════════ -->
  <section id="contact" style="padding:6rem 2rem;background:#F0E6CC;">
    <div class="reveal" style="max-width:900px;margin:0 auto;text-align:center;">
      <p style="font-family:'Roboto Mono',monospace;font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:#C8952A;font-weight:600;margin-bottom:0.75rem;">Get in Touch</p>
      <h2 style="font-family:'Roboto Mono',monospace;font-size:clamp(1.8rem,4vw,2.75rem);font-weight:700;letter-spacing:-0.03em;color:#1C0E06;line-height:1.1;margin-bottom:1.25rem;">Let's Find Your Perfect Property</h2>
      <p style="font-family:'Montserrat',sans-serif;font-size:0.95rem;font-weight:300;line-height:1.75;color:rgba(28,14,6,0.6);margin-bottom:2.75rem;max-width:560px;margin-left:auto;margin-right:auto;">Our team is ready to assist you. Reach out and we'll connect you with the right specialist for your island of interest.</p>

      <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:2.5rem 3rem;margin-bottom:2.75rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <div class="value-icon" style="width:36px;height:36px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8952A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.64 4.5 2 2 0 0 1 3.6 2.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div style="text-align:left;">
            <p style="font-family:'Roboto Mono',monospace;font-size:0.64rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(28,14,6,0.4);margin-bottom:0.1rem;">Phone</p>
            <p style="font-family:'Montserrat',sans-serif;font-size:0.88rem;color:#1C0E06;">+1 (246) 555-0190</p>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <div class="value-icon" style="width:36px;height:36px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8952A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div style="text-align:left;">
            <p style="font-family:'Roboto Mono',monospace;font-size:0.64rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(28,14,6,0.4);margin-bottom:0.1rem;">Email</p>
            <p style="font-family:'Montserrat',sans-serif;font-size:0.88rem;color:#1C0E06;">hello@caribbeanhomes.com</p>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <div class="value-icon" style="width:36px;height:36px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8952A" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div style="text-align:left;">
            <p style="font-family:'Roboto Mono',monospace;font-size:0.64rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(28,14,6,0.4);margin-bottom:0.1rem;">Office</p>
            <p style="font-family:'Montserrat',sans-serif;font-size:0.88rem;color:#1C0E06;">Bridgetown, Barbados</p>
          </div>
        </div>
      </div>

      <a href="contact.html" class="btn-gold">Contact Us</a>
    </div>
  </section>
```

- [ ] **Step 9: Verify in preview**

Reload http://localhost:3000/Homepage.html. Expected:
- Desktop nav links go to the new pages (click "About" → `about.html`, "Testimonials" → `testimonials.html`, "Contact" → `contact.html`)
- Hero "Learn More" button goes to `about.html`
- "Why Caribbean Homes" section still shows 3 cards and now has "Learn more about us →" link below
- "Testimonials" section still shows 3 cards and now has "Read more client stories →" link below
- CTA banner "Get in Touch" goes to `contact.html`
- The Contact section is now a compact centered teaser (no form), with 3 horizontal info items and a gold "Contact Us" button going to `contact.html`
- Footer links go to new pages

- [ ] **Step 10: Commit**

```bash
git add Homepage.html
git commit -m "Rewire homepage nav to dedicated pages and trim Contact to teaser

Nav, footer, and CTA links point to about.html, testimonials.html, and
contact.html. Homepage keeps About and Testimonials sections intact with
new 'Learn more' links. Contact section replaced with a compact teaser
so the dedicated Contact page owns the form.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Task 5: Update `listings.html` and `property-beachfront-villa.html` nav/footer links

**Files:**
- Modify: `listings.html`
- Modify: `property-beachfront-villa.html`

- [ ] **Step 1: Update `listings.html` desktop nav (line 586–588)**

Find:
```html
<a href="Homepage.html#about" class="nav-link">About</a>
        <a href="Homepage.html#testimonials" class="nav-link">Testimonials</a>
        <a href="Homepage.html#contact" class="nav-link">Contact</a>
```
Replace:
```html
<a href="about.html" class="nav-link">About</a>
        <a href="testimonials.html" class="nav-link">Testimonials</a>
        <a href="contact.html" class="nav-link">Contact</a>
```

- [ ] **Step 2: Update `listings.html` mobile menu (line 602–604)**

Find:
```html
<a href="Homepage.html#about" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">About</a>
      <a href="Homepage.html#testimonials" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">Testimonials</a>
      <a href="Homepage.html#contact" class="nav-link" style="padding:0.75rem 0;display:block;">Contact</a>
```
Replace:
```html
<a href="about.html" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">About</a>
      <a href="testimonials.html" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">Testimonials</a>
      <a href="contact.html" class="nav-link" style="padding:0.75rem 0;display:block;">Contact</a>
```

- [ ] **Step 3: Update `listings.html` footer nav (line 1283–1285)**

Find:
```html
<a href="Homepage.html#about" class="nav-link" style="font-size:0.82rem;opacity:0.55;">About Us</a>
            <a href="Homepage.html#testimonials" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Testimonials</a>
            <a href="Homepage.html#contact" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Contact</a>
```
Replace:
```html
<a href="about.html" class="nav-link" style="font-size:0.82rem;opacity:0.55;">About Us</a>
            <a href="testimonials.html" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Testimonials</a>
            <a href="contact.html" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Contact</a>
```

- [ ] **Step 4: Update `property-beachfront-villa.html` desktop nav (line 690–692)**

Find:
```html
<a href="Homepage.html#about" class="nav-link">About</a>
        <a href="Homepage.html#testimonials" class="nav-link">Testimonials</a>
        <a href="Homepage.html#contact" class="nav-link">Contact</a>
```
Replace:
```html
<a href="about.html" class="nav-link">About</a>
        <a href="testimonials.html" class="nav-link">Testimonials</a>
        <a href="contact.html" class="nav-link">Contact</a>
```

- [ ] **Step 5: Update `property-beachfront-villa.html` mobile menu (line 702–704)**

Find:
```html
<a href="Homepage.html#about" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">About</a>
      <a href="Homepage.html#testimonials" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">Testimonials</a>
      <a href="Homepage.html#contact" class="nav-link" style="padding:0.75rem 0;display:block;">Contact</a>
```
Replace:
```html
<a href="about.html" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">About</a>
      <a href="testimonials.html" class="nav-link" style="padding:0.75rem 0;display:block;border-bottom:1px solid rgba(28,14,6,0.06);">Testimonials</a>
      <a href="contact.html" class="nav-link" style="padding:0.75rem 0;display:block;">Contact</a>
```

- [ ] **Step 6: Update `property-beachfront-villa.html` "Request Information" button (line 1034)**

Find:
```html
<a href="Homepage.html#contact" class="btn-outline" style="display:block;text-align:center;width:100%;">Request Information</a>
```
Replace:
```html
<a href="contact.html" class="btn-outline" style="display:block;text-align:center;width:100%;">Request Information</a>
```

- [ ] **Step 7: Update `property-beachfront-villa.html` "Contact Agent" link (line 1175)**

Find:
```html
<a href="Homepage.html#contact" style="font-family:'Roboto Mono',monospace;font-size:0.68rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#C8952A;text-decoration:none;">Contact Agent →</a>
```
Replace:
```html
<a href="contact.html" style="font-family:'Roboto Mono',monospace;font-size:0.68rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#C8952A;text-decoration:none;">Contact Agent →</a>
```

- [ ] **Step 8: Update `property-beachfront-villa.html` footer nav (line 1210–1212)**

Find:
```html
<a href="Homepage.html#about" class="nav-link" style="font-size:0.82rem;opacity:0.55;">About Us</a>
            <a href="Homepage.html#testimonials" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Testimonials</a>
            <a href="Homepage.html#contact" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Contact</a>
```
Replace:
```html
<a href="about.html" class="nav-link" style="font-size:0.82rem;opacity:0.55;">About Us</a>
            <a href="testimonials.html" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Testimonials</a>
            <a href="contact.html" class="nav-link" style="font-size:0.82rem;opacity:0.55;">Contact</a>
```

- [ ] **Step 9: Audit for any remaining stale references**

Run a repo-wide search for stale anchor links:
```bash
grep -n "Homepage.html#\(about\|testimonials\|contact\)" *.html || echo "None found"
grep -n 'href="#\(about\|testimonials\|contact\)"' Homepage.html || echo "None in Homepage"
```
Expected output:
- First command: `None found`
- Second command: Empty or just the `id="contact"` on the teaser section anchor (which is a valid self-anchor if referenced internally — none are, but it's retained for any deep links).

Actually the second command will find nothing because the `id="contact"` line is not `href="#contact"`. Confirm both show `None`.

- [ ] **Step 10: Commit**

```bash
git add listings.html property-beachfront-villa.html
git commit -m "Rewire listings and property page nav to dedicated About/Testimonials/Contact pages

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Task 6: Final visual verification across all pages

**Files:** None modified; verification only.

- [ ] **Step 1: Ensure preview server is running**

Verify the server started in Task 1. If not, run:
```bash
# Uses mcp__Claude_Preview__preview_start with name "real-estate-site"
```

- [ ] **Step 2: Visit each page and confirm it renders without errors**

For each URL, load in the preview and check:
- Page renders with no missing content
- Fonts load (Roboto Mono + Montserrat visible)
- No console errors

URLs to visit:
1. http://localhost:3000/Homepage.html
2. http://localhost:3000/about.html
3. http://localhost:3000/testimonials.html
4. http://localhost:3000/contact.html
5. http://localhost:3000/listings.html
6. http://localhost:3000/property-beachfront-villa.html

- [ ] **Step 3: Nav link sweep — confirm every nav link routes correctly**

Use `mcp__Claude_Preview__preview_eval` to enumerate nav links per page:
```javascript
Array.from(document.querySelectorAll('nav a.nav-link, footer a.nav-link')).map(a => ({text: a.textContent.trim(), href: a.getAttribute('href')}))
```

Expected per page — nav links resolve to:
- Listings: `listings.html`
- About: `about.html`
- Testimonials: `testimonials.html`
- Contact: `contact.html`

No `#about`, `#testimonials`, `#contact`, or `Homepage.html#…` values should appear in any nav/footer link.

- [ ] **Step 4: Screenshot each new page at desktop width for visual confirmation**

Call `mcp__Claude_Preview__preview_screenshot` for each new page (about, testimonials, contact). Confirm layouts look correct and match the homepage's visual language.

- [ ] **Step 5: Test mobile menu on one new page**

On `about.html`, narrow the viewport (via `mcp__Claude_Preview__preview_resize` to ~600px wide), click the hamburger, confirm menu opens with all 4 links visible.

- [ ] **Step 6: Test FAQ expansion on contact.html**

On `contact.html`, use `preview_eval`:
```javascript
document.querySelector('details.faq-item').open = true; document.querySelector('details.faq-item').open
```
Expected: `true`, and visually the first FAQ item expands to show the answer paragraph.

- [ ] **Step 7: Confirm contact teaser on Homepage links to contact.html**

Use `preview_eval` on Homepage.html:
```javascript
document.querySelector('#contact a.btn-gold').getAttribute('href')
```
Expected: `"contact.html"`

- [ ] **Step 8: Final commit** (only if verification surfaces fixes)

If all checks pass, no commit needed. If any fixes are required, address them and commit with a descriptive message.

---

## Self-Review

**Spec coverage check (against `docs/superpowers/specs/2026-04-19-dedicated-pages-design.md`):**

- [x] Three new files at repo root (`about.html`, `testimonials.html`, `contact.html`) — Tasks 1, 2, 3.
- [x] Nav + footer + CTA banner links across all 5 pages routed to new pages — Tasks 1, 2, 3 (for new pages), Task 4 (Homepage), Task 5 (listings + property).
- [x] Homepage hero "Learn More" → `about.html` — Task 4 Step 3.
- [x] About page: hero, Our Story, expanded Why Caribbean Homes, Meet the Team (4 cards), CTA banner — Task 1 Step 4.
- [x] Testimonials page: hero, By the Numbers (4 stats), 9 testimonials, featured story, CTA banner — Task 2 Step 4.
- [x] Contact page: hero, two-column info+form (with Reason and Budget fields), Office & Hours, styled map placeholder, 5 FAQ items — Task 3 Step 5 + Step 4 for FAQ styles.
- [x] Homepage "Why Caribbean Homes" + "Testimonials" sections kept intact with new "Learn more" links — Task 4 Steps 6, 7.
- [x] Homepage Contact section replaced with compact teaser (3 info items + button) — Task 4 Step 8.
- [x] `id="contact"` retained on homepage teaser for deep-link preservation — Task 4 Step 8.
- [x] Shared visual system (`.btn-gold`, `.nav-link`, `.testimonial-card`, `.reveal`, etc.) reused via copy-from-Homepage approach — Tasks 1–3 Step 1.
- [x] Mobile menu + scroll-reveal + scroll-aware navbar JS carried forward via the copy pattern.
- [x] Verification plan covers all 5 pages visually and via nav-link sweep — Task 6.

**Placeholder scan:** no TBDs, TODOs, "similar to Task N", or vague steps. Each content block is fully specified.

**Type consistency:** class names (`.testimonial-card`, `.value-icon`, `.btn-gold`, `.reveal`, `.anim-fadeup`, `delay-*`, `.grain`, `.diagonal-divider`, `.faq-item`, `.nav-link`) used consistently across all tasks. Form field labels (`First Name`, `Last Name`, `Email`, `Island of Interest`, `Reason for Inquiry`, `Budget Range`, `Message`) are consistent with spec.

No issues found.
