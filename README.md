# EduErpee Technology — Website

A premium, multilingual, SEO-ready marketing site for **EduErpee Technology
Private Limited**, built with React 19, TypeScript, Tailwind CSS v4, React
Router and Framer Motion.

Content (services, solutions, testimonials, team, contact details) is
sourced from the existing [eduerpee.com](https://www.eduerpee.com/) — no
clients, stats, awards or team members are invented anywhere in this build.

## Status: solid foundation, not the full 49-section spec

The original brief asked for a very large production system — full CMS blog,
25 fully-translated languages, complete legal review, CI/CD, multi-cloud
deploy configs, and more. Building all of that is realistically a
multi-week engineering project. What's shipped here is a **working,
buildable, production-quality core** you (or a dev team) can extend:

**Fully built:**
- Component architecture per the brief (`components/{layout,sections,cards,forms,common}`)
- Homepage with every section from the brief (hero, trust bar, about,
  solutions, services w/ tabs, tech stack, industries, why-us, process,
  testimonials, team, global presence, footer CTA)
- Solutions & Services index + dynamic detail pages (Hero/Problem/Features/FAQ/CTA)
- About, Team, Industries, Technologies, Case Studies, Contact, Blog
  (CMS-ready empty state), Careers, 5 legal pages, 404
- i18n architecture: URL-based locales (`/en/`, `/hi/…`), RTL support,
  **English, Hindi, Spanish and Arabic fully translated**; all 25 requested
  languages (Urdu excluded, as specified) are registered in the language
  switcher, ready for a translator to drop in a dictionary file
- Dark mode (class-based, persisted, respects system preference)
- SEO: per-page title/description/canonical/hreflang/OG/Twitter tags,
  Organization + SoftwareApplication + Service JSON-LD, `sitemap.xml`,
  `robots.txt`
- **3D AI robot hero**: procedural Three.js/React Three Fiber robot with a
  glowing AI core, floating tech modules and animated data connections —
  WebGL-detected, reduced-motion aware, lazy-loaded so it never blocks the
  initial page (see "3D AI robot hero" below)
- Contact form with client-side validation, structured for server-side wiring
- Cookie consent banner (4 categories, consent-gated analytics loading),
  WhatsApp button, back-to-top, accessible skip link, reduced-motion support
- `prefers-reduced-motion` respected; keyboard focus states throughout

**Scaffolded, needs follow-up before production:**
- **21 of 25 languages** need real translations (see "Adding a language" below)
- **Blog & case studies** are UI-only — wire to a headless CMS (see below)
- **Legal pages** are structurally correct placeholders — have counsel review
  final copy before publishing
- **Contact form** currently simulates submission client-side — needs a real
  API endpoint (see below)
- **CAPTCHA/Turnstile, rate limiting, CSP headers** — configured at the
  hosting/edge layer, not in this repo (see "Security headers" below)
- Automated tests, CI pipeline

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-checks + production build to dist/
npm run preview   # serve the production build locally
```

Copy `.env.example` to `.env` and fill in values as you wire up the backend
and analytics (see below). Nothing in `.env` should contain secrets consumed
only server-side — the frontend never holds API keys.

## Project structure

```
src/
├── components/
│   ├── common/     Container, CTAButton, SectionHeader, StatsCounter,
│   │               SEO, ModuleMap (signature diagram), PageHero,
│   │               WhatsAppButton, BackToTop, CookieBanner
│   ├── layout/     Header (mega menu, language + theme switchers), Footer, RootLayout
│   ├── sections/   Hero, TrustBar, About, Solutions/Services/TechStack/
│   │               Industries/WhyUs/Process/Testimonials/Team/GlobalPresence, FooterCTA
│   ├── cards/      SolutionCard, ServiceCard, TestimonialCard, TeamCard
│   └── forms/      ContactForm
├── pages/          One file per route + pages/legal/*
├── i18n/           I18nProvider, config (language registry), locales/*.ts
├── data/           content.ts (real EduErpee content), nav.ts
├── types/          content.ts (shared TS interfaces)
├── hooks/          useTheme
└── utils/          icon.tsx (lucide resolver), domain.ts (color tokens)
```

## 3D AI robot hero (superseded — see "Follow-up rebuild" below)

> **Note:** the homepage hero no longer uses this 3D system — it was
> replaced by a flat 2D illustration (`src/components/hero-flat/`) to match
> a supplied reference design. This section is kept for anyone who wants to
> switch back to (or build on) the WebGL version; nothing here currently
> ships to users since `Hero.tsx` no longer imports it.

The homepage hero (`src/components/sections/Hero.tsx`) uses a procedural 3D
AI robot built with **Three.js + React Three Fiber + drei** — no external
GLTF asset required, so there's nothing extra to download or license.

`src/components/hero3d/`:
- `AIRobot.tsx` — the robot itself: glass/metal torso, glowing chest "AI
  core" with rotating data rings, soft cyan eyes, subtle idle breathing and
  cursor-tracking head/body rotation (clamped to a small, premium-feeling range)
- `ConnectionLines.tsx` / `techModulesData.ts` — six floating glass tech
  cards (AI, Cloud, ERP, SaaS, Automation, Security) connected to the core
  by animated lines with traveling data particles
- `HoloPlatform.tsx`, `BackgroundParticles.tsx`, `HoloPanels.tsx` —
  decorative platform, ambient particles and status chips (all illustrative,
  no unverified business metrics)
- `AIRobotHero.tsx` — the entry point: detects WebGL support and
  `prefers-reduced-motion`, lazy-loads the Three.js scene only once it's
  actually going to render (so the headline/CTA are interactive immediately,
  before the 3D chunk finishes downloading), and pauses the render loop via
  `IntersectionObserver` when the hero scrolls off-screen
- `RobotFallback.tsx` — the accessible static fallback (reuses the
  `ModuleMap` SVG diagram) shown when WebGL is unsupported, reduced motion
  is requested, or the scene hasn't finished loading yet

**Performance/quality tiers:** `useDeviceTier()` (in `src/hooks/useWebGLSupport.ts`)
checks screen size, pointer type and `navigator.deviceMemory` to pick
`"high"` or `"low"`. Low tier halves geometry segment counts, shows 4 of 6
tech modules instead of 6, and skips background particles, environment
lighting and mouse-follow — matching the brief's mobile/low-end requirements.

**Accessibility:** the fallback poster has a descriptive `alt`/`aria-label`,
holographic panels are `aria-hidden`, all CTAs are real `<a>`/`<button>`
elements outside the canvas, and no information is only available inside
the 3D scene — everything it visualizes (services, technology stack) is
also in the surrounding HTML sections.



## Fix round: robot cropping, service ecosystem, multilingual gaps

A follow-up pass addressed three specific issues raised after the first
build:

**1. Robot was getting cropped.** Root cause was a fixed camera
distance/FOV that didn't account for container size or breakpoint. Fixed
with `ResponsiveCameraRig.tsx`, which computes camera distance from the
robot's actual measured bounding box (and the wider ecosystem's bounding
box, when shown) against the live canvas aspect ratio, for three explicit
breakpoint profiles (`useBreakpointTier.ts`: mobile <640px, tablet
640–1023px, desktop ≥1024px). This is a geometry fix, not `overflow:hidden`.

**2. Robot is now the center of a real service ecosystem.**
`ServiceEcosystem.tsx` replaced the old generic tech-module cards with
EduErpee's actual 8 services (from `data/content.ts` — `web-dev`,
`mobile-apps`, `ui-ux`, `cloud-devops`, `digital-marketing`, `ai-chatbot`,
`branding`, `support`), positioned radially around the robot with glowing
arrows (real arrowheads via `ArrowHead`), animated data particles flowing
robot→service, and hover interactivity: the hovered node scales up, its
arrow brightens, a tooltip card expands with the real service description
and an "Explore Service" link, and the robot's AI core glows/tints toward
that service's color. Clicking navigates to the real service page (plain
`<a>` tags are used inside the R3F/Html tree rather than React Router's
`<Link>`, since Canvas renders through a separate React reconciler root
that outside Router/Context providers don't automatically bridge into —
`lang` and label strings are passed down as props instead). On mobile, the
in-canvas ecosystem is hidden entirely and `MobileServiceList.tsx` renders
a normal HTML vertical list of the same 8 services below the robot, per
the brief's mobile layout.

**3. Multilingual system — persistence, suggestion, and wider coverage.**
- `setLanguage()` now persists the choice to `localStorage`
  (`eduerpee-lang`), and the root `/` route (`RootRedirect.tsx`) reads it
  back — so a returning visitor lands in the language they last chose
  instead of always English.
- `LanguageSuggestionBanner.tsx` shows a one-time, dismissible banner
  ("This site is also available in हिन्दी") when the browser's language
  matches an implemented language different from the current one — never
  an automatic redirect, and it won't reappear once dismissed or once a
  language has been explicitly chosen.
- The translation dictionary grew from nav/hero-only to also cover About,
  Solutions, Industries, Technologies, Why-Us, Global Presence, Footer CTA,
  Case Studies and all 5 legal page titles, across all 4 implemented
  languages (en/hi/es/ar). Because the dictionary is a typed TypeScript
  object (`t.about.heading`, not a string-keyed lookup like `t("about.heading")`),
  there's no way for a raw key like `"about.heading"` to leak to the user —
  a missing translation is a compile error, not a runtime fallback.
- Generated proper per-language sitemaps: `sitemap-en.xml`, `sitemap-hi.xml`,
  `sitemap-es.xml`, `sitemap-ar.xml`, each with `hreflang` alternates to
  every other language plus `x-default`, referenced from a `sitemap.xml`
  sitemap index (`robots.txt` points at the index). Confirmed no `ur`/Urdu
  code path exists anywhere in the app, config, or sitemaps.

**Follow-up tuning pass — larger robot, no wasted space.** A later request
asked for a noticeably larger, more dominant robot with the empty band
above it eliminated. Root cause of that empty space: the hero's robot
container was a portrait-oriented box (narrow, tall) while the 3D content's
bounding shape was landscape-oriented (wide, short) — the camera rig was
correctly avoiding cropping, but it had to pull back further than the
silhouette needed just to satisfy the mismatched *width*, leaving unused
vertical margin. Fixed by:
- Matching the container's CSS `aspect-ratio` to the content's actual
  bounding aspect ratio per breakpoint (`aspect-square` mobile, `4/3`
  tablet, `3/2` desktop) instead of arbitrary fixed pixel heights, so the
  camera's width- and height-constraints land much closer together.
- Tightening the ellipse the service nodes sit on (`ELLIPSE_RY` in
  `serviceEcosystemData.ts`, 2.25 → 1.9) so the topmost node sits close to
  the robot's own head height rather than floating above it.
- Scaling the robot's own geometry up by `ROBOT_SCALE = 1.15` (in
  `AIRobot.tsx`) — everything else that reads the robot's position
  (`ServiceEcosystem.tsx`'s `CORE_POS`, the bounds in
  `serviceEcosystemData.ts`) was updated to match, so hover pulses and
  arrows still originate exactly at the (now bigger, now higher) glowing core.
- Reducing `ResponsiveCameraRig.tsx`'s padding multiplier (1.2–1.32 → 1.06–1.1)
  now that the bounds themselves carry a smaller, more deliberate buffer,
  rather than stacking two large safety margins.
- `lg:min-h-[90vh]` on the hero section and a bigger container footprint
  (`max-w-md` → `max-w-3xl` across breakpoints) so the hero uses more of
  the viewport on large screens instead of floating in a smaller fixed box.

Net effect: robot reads roughly 20–30% larger at every breakpoint with the
same no-cropping guarantee, verified via `npm run build` + `npm run lint`
(0 errors) — actual on-screen framing across the requested viewport list
(1920×1080 down to 375×812) still needs a real-browser check, since this
sandbox has no GPU/display to render against.

**Follow-up restructure — robot on top, content below, full width.** A
further request changed the hero from a side-by-side (text-left,
robot-right) layout to a vertical composition: full-width robot + service
ecosystem band first, then centered headline/description/CTA/trust-metrics
below it. Changes:
- `Hero.tsx` no longer uses a two-column grid; it's two stacked `Container`
  blocks — the robot band, then the centered text block (`max-w-[900px]`
  headline, `max-w-[820px]` description, both `mx-auto text-center`).
- The aspect-ratio responsibility moved from `Hero.tsx` into
  `AIRobotHero.tsx` itself, wrapping only the canvas — this fixes a real
  bug where the aspect-ratio box previously wrapped the mobile service list
  too, squeezing it into the robot's box instead of letting it flow below
  with natural height.
- `serviceEcosystemData.ts`'s ellipse widened (`ELLIPSE_RX` 2.7 → 3.4) to
  match the new full-width band's `aspect-video` (16:9) desktop shape,
  since the content is no longer confined to a narrow right-hand column.
- Desktop robot band aspect is `aspect-video`; with the band living inside
  the site's existing `max-w-7xl` container, this lands the hero visual
  around 700–800px tall on a typical desktop width — inside the brief's
  suggested 650–800px range — without hardcoding a pixel height.
- Headline/description font sizes are explicit (`32px → 44px → 60px` /
  mobile → tablet → desktop) per the brief's suggested ranges, rather than
  Tailwind's default type scale.

**Follow-up rebuild — flat 2D hero matching a supplied reference image.**
A later request included a screenshot of a target hero design: a
photorealistic white/orange humanoid robot centered on the page, with 10
glass-morphism service cards in two flanking columns connected to the
robot via elbow-style lines, headline/CTA/stats below. Two things aren't
achievable exactly as shown, and were adapted honestly rather than faked:

- **The robot is a hand-drawn flat SVG illustration**
  (`hero-flat/RobotIllustration.tsx`), not a photorealistic render. Producing
  the reference's actual render quality needs either an image-generation
  model or a licensed/custom 3D asset pipeline — neither is available in
  this environment. The SVG matches the reference's *read* (white/silver
  humanoid, warm orange glow at the eyes and chest "E" emblem, standing on
  a glowing ring platform) using gradients, glow filters and a couple of
  slow pulse animations, but it's illustration-quality, not photoreal.
- **8 real service nodes, not 10.** The reference mockup's 10 nodes include
  "ERP Solutions," "Cybersecurity," "SaaS Development" and "Data &
  Analytics" as distinct service cards. In EduErpee's actual verified site
  content, ERP is a *solution* category (not a distinct service), and the
  other three aren't offered as separately named services — so, consistent
  with the "never invent services" rule this project has followed
  throughout, only the 8 real services from `data/content.ts` are used
  (4 left / 4 right), each linking to its real service page.

Everything else was rebuilt to match: two-column card layout with
right-angle ("elbow") connector lines carrying a slow traveling data
particle back to the robot, glass-morphism card style with a colored
left-accent per service, the headline split into three parts so the middle
clause renders in brand orange while the rest stays white
(`hero.headlinePart1/2/3` in each locale file, replacing the old single
`hero.headline` key), and a 5th "Global Delivery" stat badge alongside the
4 verified numeric stats (no invented headcount or project-count figures —
the reference's "50+ Expert Developers" card doesn't appear anywhere in
EduErpee's real site content, so it wasn't carried over).

**Files added:** `src/components/hero-flat/{RobotIllustration,ServiceCard2D,
ConnectorLines,HeroEcosystem,heroEcosystemLayout}.tsx`. `Hero.tsx` now
renders `HeroEcosystem` instead of the old WebGL `AIRobotHero`. The prior
Three.js/React-Three-Fiber 3D system (`src/components/hero3d/`) is left in
the repo unused rather than deleted, in case the 3D direction is wanted
back — since nothing imports it anymore, Vite's bundler drops it from the
build entirely (confirmed: the ~970KB Three.js chunk disappeared from
`npm run build` output), so it costs nothing at runtime either way. The
`three`/`@react-three/*` npm dependencies are likewise unused now but left
installed; remove them from `package.json` if the 3D path is permanently retired.

**Robot movement.** `RobotIllustration.tsx` animates as an idling machine
rather than a static pose: the upper body sways at the waist while the
legs/feet stay grounded, the head independently turns like it's scanning
the room on its own rhythm, each arm swings on a different duration/offset
so they never mirror each other, the antenna trails the body's motion, and
the eyes occasionally glance sideways in sync with the head turn. All of
it goes through an `anim()` helper that returns `undefined` when
`prefers-reduced-motion` is set, so it settles to the static pose for
anyone with that preference.

**Gap fix — robot box aspect mismatch.** A visible gap between the
ecosystem and the headline below it (reported via screenshot) traced back
to a real bug, not just a spacing value: the robot's absolute box was
sized `w-[27%] h-[94%]` — a shape that doesn't match the robot SVG's own
3:4 aspect ratio. With the default `preserveAspectRatio`, the browser
shrinks the SVG to fit the narrower dimension (width) and centers it,
leaving large empty margins above and below the actual robot inside its
own box. Fixed by sizing the box with `aspect-[3/4]` (matching the SVG's
`viewBox="0 0 420 560"`) instead of an unrelated fixed height, and
shortening the container itself (`aspect-[16/11]` → `aspect-[16/9]`) plus
the margin between the ecosystem and the headline block
(`mt-10/14/16` → `mt-4/6/8`). Verified with real before/after screenshots,
not just by re-reading the CSS.

**Follow-up: business focus shift — AI, Azure, and IT staff augmentation.**
The founder is now actively launching this as a startup and asked to (1)
elevate AI and Microsoft Azure across the site, (2) add developer
outsourcing/staff augmentation as a real offering, and (3) audit for
optimization opportunities. Changes:

- **Real performance fix**: `utils/icon.tsx` was `import * as Icons from
  "lucide-react"`, which pulls all ~1600 icons into the bundle because
  dynamic `Icons[name]` lookups can't be tree-shaken. Rewrote it to
  explicit named imports for the ~54 icons actually used. **Main bundle:
  866KB → 233KB** (74KB gzipped) — verified via `npm run build` output,
  not estimated.
- **New service**: "IT Staff Augmentation" added to `data/content.ts`
  (category `outsourcing`, own accent color) — real content the founder
  directed, not fabricated. Automatically got a working detail page at
  `/services/staff-augmentation` (the route is data-driven, no new file
  needed), a nav mega-menu entry, a services-page filter tab, and a slot
  in the homepage hero ecosystem (now 9 real services, 5 left / 4 right —
  confirmed no overlap via screenshot).
- **AI/Azure elevated**: hero eyebrow reordered to lead with "AI ·
  Microsoft Azure" (was last) across all 4 implemented languages; "AI &
  Chatbot Development" renamed "AI Development & Automation" with an
  Azure-AI-specific description; tech stack reordered to lead with Azure;
  About/meta/page-title copy updated to lead with AI, Azure, ERP, staff
  augmentation instead of generic "software and ERP."
- **Sitemaps regenerated** — also caught 2 existing service pages
  (`/branding`, `/maintenance-support`) that were missing from the
  sitemap before this pass, unrelated to the new content.

**Follow-up: hero polish — 4/4 balance and a real contrast bug.**
- "Logo & Brand Identity" removed from the **homepage hero display only**
  (still fully live everywhere else — `/services`, its filter tab, nav,
  sitemap, detail page) so the hero's 8 remaining real services split
  evenly 4 left / 4 right instead of the previous uneven 5/4.
- **Real contrast bug fixed**, not just a tweak: the decorative ambient
  glow behind the hero (`bg-domain-ai/15`, positioned to light the left
  edge) sat directly behind the left card column, and cards were only
  70% opaque (`bg-navy-900/70`), so the glow bled through and washed out
  the text — worst on the purple "AI Development & Automation" card,
  since it was purple text on a purple-tinted glow. Fixed by pushing the
  glow further off-canvas and dimming it (`-left-32`→`-left-56`,
  `/15`→`/10`) and making the cards near-opaque (`bg-navy-950/95`), plus
  bumping description text from 60%→75% opacity. Verified via screenshot,
  not just by reading the CSS.
- Explored (via a temporary, screenshotted preview page, since removed)
  adding a 3D "AI core" visual (glowing pulsing sphere + rotating rings,
  extracted from the unused 3D robot) to the homepage — decided against
  for now. The extracted component was removed rather than left as
  unused dead code, unlike the larger 3D robot system which stayed as a
  deliberate "might revert to it" choice — this was a smaller, one-off
  exploration with no clear future use once declined.

**Still open / not addressed this round** (an honest "what else is
missing" list, since that was explicitly asked): the 21 non-`en/hi/es/ar`
languages still need dictionaries; solution *content* (not just services)
doesn't yet reflect the AI/Azure focus — e.g. "Custom & Cloud ERP" could
explicitly mention Azure hosting; no case study yet demonstrates the new
staff-augmentation offering (real client work would need to exist first);
Lighthouse/Core Web Vitals haven't been measured end-to-end (the icon fix
should help significantly, but that's inference, not a measured score);
no analytics are wired up yet to see whether "AI" or "staff augmentation"
traffic actually converts once repositioned; service/solution card copy
(names, feature chips, descriptions) is still English-only even in
hi/es/ar, since those are product-content strings rather than UI chrome —
translating ~15 product descriptions per language is a larger follow-up
than the UI labels tackled in earlier rounds.

(The contact form's service dropdown *was* checked and fixed as part of
this round — it was missing the new service and still had the old "AI &
Chatbot Development" name; see `ContactForm.tsx`.)



## Navigation feedback (scroll reset, loading bar) + site-wide mobile overflow bug

Three issues reported together: no visible feedback while a page was
loading (easy to think a click didn't register), scroll position not
resetting between pages (landing mid-page on the new page reads as "did
this even navigate?"), and general mobile responsiveness complaints.

**Scroll reset — straightforward, verified with a real interaction
test**: `ScrollToTop.tsx`, mounted in `RootLayout`, calls
`window.scrollTo(0,0)` on every `pathname` change. Proved it with
Playwright rather than assuming: scrolled 4000px down the homepage,
clicked a footer link, and confirmed `scrollY` dropped to `0`
**immediately** (150ms after the click, before the new page even
finished loading) and stayed there on the new URL.

**Loading progress bar — first attempt was wrong, caught by testing,
not shipped broken.** The obvious approach — show a bar as the
`<Suspense>` fallback for lazy-loaded route chunks — doesn't work with
React Router: it wraps navigation state updates in `startTransition`
internally, which makes React deliberately keep the *previous* page's
committed content on screen and skip rendering the fallback while the
next chunk loads. Confirmed this empirically (not from documentation) by
intercepting a route's JS chunk with an artificial 1.8s delay and
polling the DOM every 150ms — the fallback never appeared once across
the entire delay window. Rebuilt with a different mechanism instead:
`useNavigationProgress.tsx` listens for clicks on internal links at the
document level (capture phase) and shows a bar immediately — a real
synchronous state update, not deferred — clearing it only once
`useLocation()` confirms the new route actually committed. Re-tested the
same way: the bar now appears at 0ms (same event as the click) and
disappears exactly when the page finishes loading, both confirmed via
DOM polling, not assumed from re-reading the code.

**Mobile overflow — a real, site-wide bug, not vague "responsiveness."**
Checked every page's `document.documentElement.scrollWidth` vs.
`clientWidth` at 375px width rather than guessing which page was
affected: **all 12 pages checked had identical horizontal overflow**
(394px content in a 375px viewport), meaning the bug was in a shared
component, not page-specific content. Traced to one exact element via a
DOM query for anything whose bounding rect extended past the viewport
edge: the footer's `support@eduerpee.com` mailto link. Flex items don't
shrink below their content's natural width by default (`min-width: auto`),
and an email address has no natural line-break points, so the link
refused to wrap and forced the whole page wider. Fixed with `min-w-0
break-all` on the email link (and `min-w-0 break-words` on the phone/
address for the same class of risk). Re-ran the exact same overflow
check across all 12 pages after the fix — all clean
(`scrollWidth === clientWidth`) — plus checked the mobile hamburger
menu specifically, since that's a separate DOM subtree.

## Header logo size + mega menu clipping fix

A screenshot showed two real problems: the header logo (icon + wordmark +
tagline) was too small (`h-10`) and read as cramped next to the nav
links, and — more importantly — the "Solutions" mega menu was **visually
missing icons for its entire left column**. Investigating rather than
guessing revealed the icons weren't missing at all: the dropdown was
positioned with `left-1/2 -translate-x-1/2` (centered under its trigger)
at a fixed `w-[560px]`. Since "Solutions" is the first nav item, close to
the left edge of the header, centering a 560px-wide panel under it pushed
roughly half the menu off the left edge of the viewport — the icons
(positioned to the left of their labels within each grid cell) were
rendering at a negative x-coordinate, genuinely off-screen, not absent.

**Fixed both:**
- Logo bumped to `h-14`, header's ineffective `h-18` (not a real Tailwind
  scale value, so it was silently not applying any height at all) replaced
  with `min-h-[76px]` so the larger logo has proper room and stays
  vertically centered against the nav row.
- Mega menu positioning changed from centered to **edge-aware anchoring**:
  items in the first half of `primaryNav` (Solutions, Services,
  Industries) anchor `left-0` to their trigger's left edge; items in the
  second half (Technologies, Company, Contact) anchor `right-0` instead.
  This means a wide dropdown under a near-edge trigger extends *inward*
  toward the center of the header rather than outward off the viewport.

**Verified at three widths, not just the width the bug report showed**:
1100px (near the original bug's viewport, confirming both Solutions
*and* Company — the two edge-case triggers — no longer clip on either
side), 1600px (typical desktop, confirming normal-width behavior is
unaffected), and mobile (confirming the larger logo doesn't get clipped
by the mobile header — an initial too-short test viewport briefly
looked broken until re-checked with a taller one, which showed it was a
screenshot artifact, not a real bug).

## Client logo normalization (fixed-size container, not source dimensions)

A detailed brief flagged that once real client logos are uploaded, their
wildly different source dimensions (a 2000×500 wide logo vs. a 500×500
square one) would make the 3D card grid look inconsistent — some huge,
some tiny — since the previous implementation just set a fixed pixel
`height` on the `<img>` with a loose `max-width`.

**Fixed properly, not just described:** `ClientCard3D.tsx` now gives
every logo a **fixed-size container** (78% of card width × 62% of card
content height, both computed from the *card's* dimensions, never the
source image's), with `object-fit: contain` so nothing is ever cropped or
stretched, centered on a light backdrop panel (`bg-white/92`) so any
logo color — dark, light, colorful — stays readable against the dark
glass card without recoloring the original brand asset.

**The one thing CSS genuinely can't solve alone** (and the brief called
this out specifically): a logo with a lot of built-in transparent padding
— e.g. a small centered mark inside a huge transparent canvas — still
renders too small even inside a correctly-sized container, because
`object-fit: contain` fits the *whole file*, padding included, not just
the visible content. For this, `Client` (`types/content.ts`) gained two
optional fields:
- `logoScale?: number` — a per-client multiplier (default 1) for exactly
  this case
- `logoObjectPosition?: string` — for logos whose visible content isn't
  centered within their own transparent bounds

**Verified, not assumed:** since no real logos exist yet, I generated 4
throwaway test PNGs at deliberately extreme dimensions — 600×150 (wide),
400×400 (square), 200×500 (tall), and 800×800 with only a tiny 100×100
mark in the center (the padding case) — temporarily wired them to 4 real
clients, screenshotted both the mobile grid and the desktop 3D orbit, and
confirmed all four read as consistently-sized, professional logos. The
padded case initially rendered as a barely-visible speck exactly as the
brief warned it would; setting `logoScale: 6` on that one client fixed it
in the same screenshot pass, proving the escape hatch actually works
before shipping it. All test files and temporary data changes were then
reverted — the real client data is untouched, still showing initials
badges (confirmed via a final screenshot) until real logo files exist.

**To add a real logo:** drop the image in `public/logos/`, set
`logoUrl: "/logos/client-name.png"` on that client in `data/content.ts`,
and only add `logoScale`/`logoObjectPosition` if it looks off after that
— most logos won't need either.

## Real logo assets applied (header, footer, favicon)

Two uploaded logo SVGs are now live:

- `public/logo-light.svg` — the full horizontal lockup (icon + "EduErpee"
  wordmark + "Simplify · Automate · Grow" tagline), dark navy text.
  Used in the **header** (`Header.tsx`) — checked via screenshot that the
  header actually renders with a light, opaque background in practice
  (not the transparent-over-dark-hero state the CSS suggests at a glance),
  so the dark-text logo reads cleanly there.
- `public/logo-dark.svg` — a self-contained icon-only mark with its own
  dark navy square backdrop baked in (rx-rounded, no text). Used in the
  **footer** (`Footer.tsx`) next to the existing white "EduErpee" text —
  its own opaque backdrop means it stays visible against the footer's
  near-black background regardless of the exact navy shade underneath,
  unlike the light logo's fixed dark text would have been.
- **Favicon fixed to an actual circle**: `public/favicon.svg` was
  previously a rounded square (`rx="7"` on a 32×32 box, not a true
  circle) — replaced with a proper `<circle>` orange monogram, matching
  what was asked ("favicon icon monogram logo with circle E") rather than
  the approximation that existed before.

All three confirmed via real screenshots — header (desktop + mobile),
footer, and the favicon file rendered directly — not assumed from reading
the SVG source.

## TrustBar removed

The flat "Trusted by Businesses Across Industries" scrolling logo strip
(`TrustBar.tsx`) that used to sit between the hero and the 3D client
ecosystem was removed entirely — it had become redundant, showing the
same 6 real clients as `ClientShowcase3D.tsx` immediately below it.
Unlike the superseded 3D robot hero system (kept unused in case of a
revert — a large investment worth preserving), this file was deleted
outright rather than left as dead code, since there's no plausible future
use for a duplicate of a section that already exists.

Removing it also meant fixing a real spacing issue: `Hero.tsx` and
`ClientShowcase3D.tsx` are both `bg-navy-950`, and with the differently-
toned `TrustBar` no longer sitting between them to justify a visual
break, their combined padding (`Hero`'s `pb-16/24/28` + `ClientShowcase3D`'s
own `py-20/28`) would have left an oversized, unbroken dark gap — up to
~224px on large screens — between the hero stats and the next heading.
Trimmed `Hero`'s trailing padding down to `pb-6 sm:pb-8`, letting
`ClientShowcase3D`'s own standard section padding (the same rhythm every
other section already uses) carry the spacing instead of doubling up.
Confirmed via screenshot that the transition now reads as one continuous
section rather than two stacked gaps.

## AI-themed animated backgrounds (Technology, Industries, Solutions)

A request to "take reference from ibotix.ai for AI animation images" for
these sections came with an important constraint I flagged and respected:
**their actual images/animations weren't copied** — those are a
competing company's proprietary brand assets, both a copyright issue and
simply not appropriate to lift into a different company's site. Instead,
`src/components/common/AINetworkField.tsx` is an **original** component —
softly pulsing nodes connected by faint lines, built from scratch with
SVG + CSS animations (deterministic pseudo-random layout via a hash
function, not `Math.random()`, so it's stable across renders) — applied
to `TechStackSection.tsx`, `IndustriesSection.tsx`, and
`SolutionsSection.tsx`. Respects `prefers-reduced-motion` (renders static
nodes instead of pulsing).

**Two rendering bugs caught via screenshot, fixed before shipping:**
1. The tech-category cards were `bg-navy-950/60` (60% opaque), letting
   the network dots visibly bleed through and sit on top of the card
   text — bumped to `/90` so the field stays a background effect, not a
   foreground distraction.
2. The SVG used `preserveAspectRatio="none"` to stretch to fill each
   section, which squashed the circular nodes into visible ellipses on
   wide sections. Switched to `xMidYMid slice` (uniform scale + crop)
   so nodes render as true circles.

No WebGL, no new dependencies — confirmed via build output that the main
bundle is unchanged (234KB) with this added to three sections.

## 3D client ecosystem (CSS-only, no WebGL) — 3-orbit rebuild

`src/components/sections/ClientShowcase3D.tsx` was rebuilt again after a
detailed brief asked for a full 3-orbit "client ecosystem" (inner/middle/
outer rings, mouse parallax, connection network, central core, entrance
sequence) modeled on a reference image, but explicitly **without**
reintroducing WebGL/Three.js — a prior message had specifically chosen the
lighter CSS route to keep the bundle small, and the brief's own preferred
stack (React Three Fiber) would have undone that. Built as pure CSS 3D
instead; confirmed via build output that the main bundle is still 234KB
with the full 3-orbit version in place.

**Structure:** `clientOrbitData.ts` (data-driven orbit config — radius,
card size, rotation duration/direction, tilt, per orbit), `OrbitRing.tsx`
(one reusable rotating ring), `ClientCard3D.tsx` (individual card with
hover: scale up, brighten, logo desaturate→color, industry tooltip
reveal), `EcosystemCore.tsx` (central pulsing "E" mark), `ConnectionLines.tsx`
(static lines radiating from the core).

**Only 6 real clients exist**, so per the brief's own fallback guidance
("if fewer logos available, repeat carefully") they're cycled to fill all
three orbits (6/6/8 slots) — every name shown is still real and verified,
just repeated, the same technique already used in `TrustBar`'s infinite
scroll.

**Depth-of-field is real, not simulated:** card size/foreshortening as
they rotate toward and away from the viewer comes from genuine CSS
`perspective` + `translateZ` projection — not a hand-rolled opacity/scale
keyframe hack synced to the rotation timing, which risks drifting out of
phase. A synced-keyframe approach was considered and deliberately dropped
for this reason.

**Two rounds of screenshot-driven fixes**, not just written and shipped:
1. First pass had wildly inconsistent card sizes between orbits (outer
   orbit cards rendered 3-4x larger than inner ones) and read as scattered
   debris rather than a cohesive sphere — traced to too-aggressive
   perspective distance (1100px) combined with large radius/tilt deltas
   between orbits. Fixed by tightening the radius/tilt values closer
   together and increasing perspective to 1600px.
2. Reduced-motion testing (via Playwright's `reduced_motion: "reduce"`
   context, comparing two screenshots 3 seconds apart to confirm zero
   movement) revealed all three orbits started with their "card 0" facing
   the camera simultaneously, so the resting/no-motion state — which is
   permanent for reduced-motion users — had maximum overlap. Fixed with a
   `baseAngleOffset` per orbit (0°/25°/47°) that statically staggers each
   ring's starting rotation.

**Known accepted tradeoff:** cards still overlap each other somewhat at
various rotation phases. Three independently-rotating rings at different
speeds constantly change their phase relationship, so guaranteeing zero
overlap at every moment isn't achievable without either synchronizing
their rotation (defeats the "independent orbits" brief) or spreading them
much further apart (would need a much taller section). The reference
image itself shows meaningfully overlapping cards, so this was accepted
as consistent with that aesthetic rather than pursued further — flagged
here rather than left silently.

**Mobile still uses the static 2-column grid** from the previous version,
not a new 3D carousel — the brief's section 18 wanted one, but given the
real-client-count constraint and the two rounds of desktop tuning already
needed, the already-solid, previously-verified mobile fallback was kept
rather than risking a third fragile surface.

**Responsive:** desktop = full 3 orbits (`orbits` in `clientOrbitData.ts`).
Tablet = 2 orbits, ~12 cards total (`tabletOrbits`), per the brief's
"8-12 logos" tablet guidance. Mobile = static grid.

**Mouse parallax:** ±8° tilt response to cursor position over the scene,
clamped per the brief's "5-10 degrees, not gamey" guidance, implemented
with plain React state + `onMouseMove` (no animation loop).

**Adding real logo images (currently all 6 clients show initials badges,
since no logo files exist yet):**
1. Drop logo image files (PNG/SVG, transparent background works best)
   into `public/logos/` — e.g. `public/logos/silos.png`
2. In `src/data/content.ts`, add `logoUrl: "/logos/silos.png"` to that
   client's entry in the `clients` array
3. That's it — `ClientShowcase3D.tsx` and the existing `TrustBar.tsx` both
   already check for `logoUrl` and use the real image instead of the
   initials fallback automatically, no other code changes needed

**A CSS 3D quirk that was actually caught and fixed, not just assumed
away:** cards past 90° of rotation initially rendered as mirrored/
backwards text — a classic "looking at the back of the card" artifact
inherent to CSS 3D transforms without `backface-visibility: hidden`.
Fixed by adding that property to each card, confirmed via actual
screenshots across multiple points in the rotation (not just reading the
CSS and assuming it'd work).

**Accepted simplification:** cards disappear abruptly once they rotate
past 90° rather than fading out smoothly — a fully custom fade would need
a JS `requestAnimationFrame` loop computing each card's angle every
frame, which reintroduces the complexity/cost tradeoff a "lighter CSS
version" was specifically chosen to avoid. The rotation itself is a
single CSS `@keyframes` animation, not a per-frame JS loop.

**Mobile:** the ring doesn't have room to breathe below `sm` width, so
mobile shows the same 6 real clients as a static 2-column grid instead of
cropping or squeezing the 3D effect.

## Adding a language

1. Duplicate `src/i18n/locales/en.ts` → `src/i18n/locales/xx.ts`, translate
   every string, typed against the shared `Dictionary` interface (TypeScript
   will flag anything missed).
2. Import it in `src/i18n/I18nProvider.tsx` and add it to the `dictionaries`
   map.
3. Flip `implemented: true` for that language in `src/i18n/config.ts`.
4. Regenerate the per-language sitemaps (`public/sitemap-xx.xml` +
   `public/sitemap.xml` index) to include the new language.

RTL languages just need `dir: "rtl"` in `config.ts` — the provider sets
`document.documentElement.dir` automatically.

## Wiring the contact form

`src/components/forms/ContactForm.tsx` currently validates client-side and
simulates a submit. To make it real:

1. Stand up an API endpoint (e.g. `POST /v1/contact`) that re-validates
   input server-side, sanitizes it, verifies a CAPTCHA/Turnstile token, and
   rate-limits by IP.
2. Point `VITE_CONTACT_API_URL` in `.env` at it.
3. Replace the `setTimeout` simulation in `onSubmit` with a real `fetch`
   call to that URL, sending the Turnstile token from `VITE_TURNSTILE_SITE_KEY`.

Never call a database or email provider directly from the frontend, and
never embed provider secrets in `VITE_*` variables — those are public at
build time.

## Blog & case studies (CMS-ready)

`BlogPage.tsx` renders an empty state today. To go live:

1. Pick a headless CMS (Contentful, Sanity, Strapi, or a simple database +
   API) and add a typed client in `src/services/blog.ts`.
2. Add `BlogPostPage.tsx` and a route `blog/:slug` in `App.tsx`.
3. Add `Article` JSON-LD per post using the `SEO` component's `jsonLd` prop.

## Security headers

This is a static SPA build — headers like CSP, `X-Frame-Options`,
`Referrer-Policy` and `Permissions-Policy` should be set at the hosting/CDN
layer (Vercel `vercel.json` headers, Cloudflare Transform Rules, or an
Nginx/IIS config), not in application code. A starting CSP:

```
Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; connect-src 'self' https://api.eduerpee.com;
```

Tighten `script-src`/`connect-src` once analytics and the contact API are
finalized.

## Analytics (consent-gated, now actually wired up)

This used to be a stub — `CookieBanner.tsx` had a comment saying where
analytics would go, but nothing loaded. It's now real:

**What's live:**
- `src/utils/analytics.ts` — loads GA4 (`gtag.js`) and Microsoft Clarity,
  each independently no-op if its env var isn't set, so nothing breaks
  before real IDs exist
- Loads **only** after the person accepts analytics cookies —
  `CookieBanner.tsx` calls `loadAnalytics()` on "Accept all" / "Save
  preferences" (if analytics is checked), and also on mount for a
  **returning** visitor who already consented in a previous session (the
  original stub only fired on the click, so returning visitors never got
  analytics loaded again — fixed)
- `src/utils/RouteTracker.tsx`, mounted in `RootLayout`, fires a GA4
  `page_view` on every client-side route change — required for an SPA,
  since GA4's automatic pageview only fires once on the very first load
- CTA clicks fire a `cta_click` event with which button was clicked
  (`hero_start_project`, `header_book_demo`, `footer_talk_to_expert`, etc.)
- Every hero service card (desktop ecosystem and the mobile list) fires
  `hero_service_click` with the service id — this is what answers "is the
  AI/Azure repositioning working": filter GA4's Events report by this
  event and break down by the `service` parameter
- Contact form submission fires `generate_lead` (a GA4-recommended event
  name, so it gets GA4's built-in lead reporting) with
  `service_requested` set to whatever they picked in the dropdown — the
  actual conversion signal, tied to which service drove it

**Verified working**, not just written: built with a placeholder
Measurement ID, loaded in a real headless browser, and confirmed via
`window.dataLayer` inspection that accepting cookies injects the GA4
script, clicking a service card pushes the right event, submitting the
contact form pushes `generate_lead` with the selected service, and a
returning visitor with stored consent gets analytics loaded without
re-showing the banner.

**To actually turn this on:**
1. Create a free GA4 property at [analytics.google.com](https://analytics.google.com) → get a Measurement ID (`G-XXXXXXXXXX`)
2. Put it in `.env`: `VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX`
3. *(Optional)* Create a free project at [clarity.microsoft.com](https://clarity.microsoft.com) for heatmaps/session recordings → `VITE_CLARITY_PROJECT_ID=...`
4. Rebuild and deploy — no code changes needed

**Separately (not code, a manual verification step):** to see what search
queries actually bring people to the site — the thing that answers
whether the AI/Azure SEO push is working — verify the domain at
[Google Search Console](https://search.google.com/search-console) and
submit `sitemap.xml` (already generated at `public/sitemap.xml`). Search
Console has no npm package or API key to wire up here; it's account
verification on Google's side.

## Deployment

Static build in `dist/` deploys to any static host:

- **Vercel**: `vercel --prod` (zero-config for Vite)
- **Cloudflare Pages**: build command `npm run build`, output `dist`
- **AWS**: upload `dist/` to S3 + CloudFront (set a SPA fallback to `index.html`)
- **Docker**: multi-stage build — `npm run build`, then serve `dist/` with
  `nginx:alpine` (add an `nginx.conf` with SPA fallback + the CSP headers above)
- **IIS/Nginx**: same static-file + SPA-fallback pattern

### Running with Docker

A `Dockerfile`, `nginx.conf` and `docker-compose.yml` are included at the
project root.

```bash
# Build the image
docker build -t eduerpee-web .

# Run it (site available at http://localhost:8080)
docker run -d -p 8080:80 --name eduerpee-web eduerpee-web
```

Or with Compose:

```bash
docker compose up -d --build
```

What the image does:
1. **Build stage** (`node:22-alpine`) — `npm ci`, then `npm run build` to
   produce a static `dist/` folder.
2. **Runtime stage** (`nginx:1.27-alpine`) — only `dist/` and `nginx.conf`
   are copied in; no Node, no source, no `node_modules` in the final image.
3. `nginx.conf` adds the SPA fallback (`try_files … /index.html`, so deep
   links like `/en/solutions/school-erp` work on refresh), gzip, long-cache
   headers for hashed `/assets/`, and the same baseline security headers
   listed above (CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy).

To push to a registry for cloud deployment (AWS ECS/Fargate, Azure
Container Apps, Cloudflare, etc.):

```bash
docker build -t <registry>/<namespace>/eduerpee-web:latest .
docker push <registry>/<namespace>/eduerpee-web:latest
```

If the contact API URL or other build-time `VITE_*` values differ per
environment, pass them as build args rather than baking a single `.env`
into the image:

```bash
docker build --build-arg VITE_CONTACT_API_URL=https://api.eduerpee.com/v1/contact -t eduerpee-web .
```

(This requires adding `ARG`/`ENV` lines in the Dockerfile's build stage for
each variable you want configurable at build time.)

Because every route is client-rendered, hosts need a rewrite/fallback rule
sending unmatched paths to `index.html` so deep links (e.g.
`/en/solutions/school-erp`) work on refresh. For stronger SEO than a pure
SPA offers, the codebase is structured so it can be ported to Next.js App
Router with the same component/data layer — pages simply become server
components.

## What content is real vs. placeholder

Real, sourced from eduerpee.com: company description, mission/vision/values,
all 6 solutions, all 8 services, tech stack, industries list, 5-step
process, all 6 client testimonials, all 6 team members, both office
addresses, phone/email/social links.

Not invented, intentionally left as placeholders for the client to supply:
awards, certifications, revenue/employee counts, additional office
locations, blog posts, and case-study numeric results beyond what's already
public on the current site.
