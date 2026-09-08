# K + P Wedding Website — Master Design & Build Specification

## 1. Purpose
This package is the source-of-truth design brief for rebuilding the K + P wedding website in a playful editorial scrapbook/festival-ticket style. The site must remain a usable wedding information website first and a visual collage second.

**Core principle:** 75% clean, readable responsive website + 25% deliberately playful scrapbook styling.

The visual language must NOT feel like:
- a traditional wedding template
- an “Irish colours” theme
- a generic South Asian wedding theme
- a rainbow children’s party
- a black-background nightclub site

It SHOULD feel like:
- independent arts/festival branding
- modern editorial design
- gig/festival tickets
- handmade scrapbook/collage
- bold, cheerful, slightly irreverent
- polished enough to feel intentionally art-directed

## 2. Existing information architecture to preserve
Keep the useful structure of the existing site:
1. Home / welcome
2. Schedule / events
3. Wedding venue
4. Travel / getting there
5. Full wedding weekend schedule
6. Accommodation
7. FAQs
8. Contact / RSVP where applicable

Do not force every section into a radically different layout. Preserve clear content hierarchy and scanability.

## 3. Colour system
The site background is predominantly warm white.

| Token | Hex | Role |
|---|---|---|
| Paper | #FFFDF8 | Default page background, ticket cut-outs |
| Ink | #111111 | Headings, body, icons |
| Pink | #F58BC1 | Primary accent, Jago, CTA, tape |
| Yellow | #FFD92F | Sangeet, highlight notes, starbursts |
| Blue | #28AEEF | Travel, badges, secondary CTA |
| Lilac | #C7A6F4 | Wedding, accommodation cards |
| Green | #36C86B | Tiny accents/tape only |
| Muted | #F3F0EA | Subtle neutral panels |
| Line | #D9D5CD | Dividers/accordion borders |

### Colour rules
- White/paper should occupy roughly 65–75% of the page.
- Black is the dominant typography colour.
- Pink/yellow/blue/lilac are accents, not full-page competing backgrounds.
- Use a maximum of 2 accent colours in any viewport-sized composition.
- Green is rare: tape, tiny doodle, one small sticker. Never a major section background.
- Do not introduce red.
- Do not recolour venue photography unnaturally unless intentionally creating a small editorial duotone asset.

## 4. Typography
Use three roles only.

### Display
Desired feeling: chunky, irregular, poster-like, friendly, very bold.
Preferred free web-font direction: **Bowlby One SC**. Alternatives: **Bowlby One**, **Archivo Black**, **Anton** (less quirky).
Use for H1/H2/event names only.

Desktop:
- Hero H1: clamp(72px, 10vw, 150px)
- Section H2: 52–84px
- Card title: 32–48px

Mobile:
- Hero H1: 48–64px
- Section H2: 38–52px
- Card title: 28–36px

Line height 0.86–0.98. Tight tracking (-1% to -4%).

### Body / UI
Use **Inter** or **DM Sans**. Clean, readable, neutral.
Body: 16–18px desktop; 16px mobile.
Small labels: 11–13px, uppercase, letter-spacing .12em.

### Handwritten annotations
Use **Caveat** (preferred) or another legible handwritten web font.
Use only for 2–8 word annotations. Never body copy, nav, FAQs or essential instructions.

Examples:
- “Better together ♥”
- “Mark your calendars!”
- “Rest. Recharge. Repeat.”
- “Good times ahead”
- “Any other questions? Just ask ♥”

## 5. Layout language
### Desktop
- Max content width: 1180px.
- Base horizontal padding: 24px minimum, preferably 40–56px on large screens.
- Use clean 12-column logic underneath the collage.
- Decorative objects may overlap columns but content must remain aligned.
- Major sections: 80–140px vertical spacing.

### Mobile
- 16px page gutters.
- Single-column content.
- Decorative items must NEVER cause horizontal scrolling.
- Reduce photo rotation to about ±1–1.5 degrees.
- Stickers may overlap photos by 8–20px, not text.
- Maintain at least 44px touch targets.
- Avoid placing essential content inside rotated elements.

## 6. Signature components

### A. Angled photo / Polaroid
- White frame: 7–12px.
- Rotation: desktop ±1.5–3deg; mobile ±0.5–1.5deg.
- Soft shadow.
- Optional tape strip at top.
- `overflow: visible` on local wrapper but page must clip/contain accidental overflow.
- Image itself remains rectangular and undistorted.

### B. Tape
Create with CSS or SVG, not raster.
- Pink, yellow, blue or green.
- Slight opacity (0.88–0.95).
- 70–110px wide.
- Rotation ±2–6deg.
- Decorative only; `aria-hidden=true`.

### C. Stickers
Shapes:
- circle badge
- 8-point star/spark
- 5-petal flower
- jagged burst
- square sticky note
- simple doodle icon

Sticker typography should be black and bold. Stickers should look screen-printed rather than glossy.

### D. Event tickets
Each event is a real semantic card, not an image.
- Jago = pink
- Sangeet = yellow
- Wedding = lilac
- side notch/circle cut-outs using pseudo-elements
- event date in small uppercase
- event name in display font
- venue below in body font
- optional icon top/right
- arrow indicating detail link
- hover: rotate toward 0deg and translateY(-2px), 150–220ms

### E. Doodles
Use SVG stroke icons in black/currentColor:
- heart
- music note
- disco ball
- bed
- plane
- bus
- train
- question mark
- arrow
- star/spark
- flower

Keep stroke imperfect-looking but simple. Do not use emoji as production icons.

### F. Buttons
Rectangular/pill hybrid, bold uppercase label, arrow.
Primary: pink.
Secondary: blue or yellow.
On hover: small translate and optional slight rotation; never distracting.

## 7. Page-by-page design

### HOME
Hero:
- white background
- K + P small top-left
- desktop navigation top-right; hamburger on mobile
- oversized “KARISHMA + PARTHA”
- one large angled couple/venue photo
- 2–3 decorations max: star, badge, handwritten note
- do NOT fill every gap

Welcome:
- “WE’RE GETTING MARRIED!”
- short welcome copy
- CTA
- one small note/sticker

Event teaser:
- three ticket cards
- desktop in row; mobile stacked
- one small decorative doodle between/around cards

Venue teaser:
- large angled Martinstown photo + text
- tape strip + one handwritten “See you there?” note

### EVENTS / SCHEDULE
Top:
- “THE EVENTS”
- short intro
- three event tickets

Full schedule:
- Preserve chronological order.
- Use day blocks rather than a complicated timeline.
- Each day gets its event colour as a narrow top bar or ticket-style header.
- Time column is bold and fixed-width.
- Details are clean black text on white.
- Calendar links are real buttons/links.
- Optional sticker such as “Timings may be subject to change” at end.

Do not put every individual schedule item on a coloured card; this becomes visually noisy.

### ACCOMMODATION / STAY
Hero:
- “STAY”
- subtitle: “A few options for your stay”
- one angled accommodation photo with tape
- handwritten “Rest / Recharge / Repeat”

Option hierarchy:
1. At venue — Glamping
2. At venue — Stables
3. Nearby hotels
4. Dublin / other city options if retained

Each accommodation option:
- clean white card or lightly tinted paper card
- coloured label/tab
- title
- 2–4 line summary
- icon
- CTA arrow
- expandable details or dedicated section

Amenities:
Use a simple icon row/grid for beds, towels, showers, breakfast, parking, charging, etc. Keep these black line icons with tiny coloured circles behind some icons.

### TRAVEL
Hero:
- “TRAVEL”
- angled plane/train/coach photo
- tape + one note (“Adventure awaits”)

Transport options as a clean vertical list:
- Flights — blue circle + plane
- Coaches — pink circle + bus
- Driving — yellow circle + car/arrow
- Trains — lilac circle + train

Do not turn all travel text into stickers. The playful treatment is framing; instructions remain clean.

### FAQ
Hero:
- “FAQS”
- small star/flower
- short line: “Quick answers to the big (and small) questions.”

Accordion:
- white background
- 1px neutral dividers
- black question text
- plus icon on right, rotates to × on open
- no large colour fills
- optional photo/sticker after 5–6 questions

FAQ categories may include:
- Who is invited to which events?
- RSVP
- Where to stay
- Transport
- Dress code
- Children
- Plus ones
- Parking
- What happens at a Sangeet?
- Weather/outdoor plans
- Gifts

### OUR STORY
Use the scrapbook style most strongly here:
- one or two angled photos
- tape
- 1–2 handwritten notes
- large “OUR STORY”
- body copy remains in clean column
Avoid fake timeline clutter unless there is meaningful content.

### RSVP / CONTACT
Keep it simple.
- huge “RSVP”
- one primary pink CTA
- optional venue/couple image
- one badge
- contact details clean and accessible
No decorative object should compete with the form/CTA.

## 8. Responsive behaviour
Breakpoints:
- 0–699px: mobile
- 700–1023px: tablet
- 1024px+: desktop

Rules:
- Desktop nav -> hamburger below 700px.
- Ticket row -> stack on mobile.
- Two-column image/text -> stack; usually image first when it creates context, text first for task-oriented sections.
- Never shrink body copy below 16px.
- Decorations can be hidden at mobile if they cause crowding.
- Use `clamp()` for display type.
- Apply `overflow-x: clip` to page shell as a safeguard, not as a substitute for correct positioning.

## 9. Motion
Very restrained:
- cards: 2px lift
- stickers: 1–2deg rotate on hover
- buttons: arrow shifts 4px
- accordion: 180–240ms
- respect `prefers-reduced-motion`
No parallax required. No constant spinning stickers.

## 10. Accessibility
- WCAG AA contrast for functional text.
- Decorative SVGs: `aria-hidden="true"`.
- Meaningful photos need alt text.
- Never embed important copy in an image.
- Keyboard-visible focus states.
- FAQ uses semantic buttons with `aria-expanded`.
- Event dates must be text, not graphical assets.
- Minimum touch target 44x44.
- Do not rely on colour alone to identify events.

## 11. Asset strategy
### Build as SVG/CSS
All doodles, stars, flowers, arrows, tape, ticket cut-outs and simple stickers.

### Use raster/WebP/AVIF
Venue and couple photography only.

### Do NOT
- screenshot text into graphics
- use giant flattened page images
- use raster icons
- use emoji as final icons
- use stock sticker packs with inconsistent line weights

## 12. Asset files supplied in this package
`assets/svg/` contains starter vector assets:
- spark-8.svg
- flower-5.svg
- heart-doodle.svg
- music-note.svg
- disco-ball.svg
- bed.svg
- plane.svg
- bus.svg
- train.svg
- question.svg
- arrow.svg

These use `currentColor` so the implementation can recolour them via CSS.

`assets/references/` contains the visual style reference if available.
`assets/mockups/` contains the generated desktop/mobile concepts if available.

## 13. Build instructions for Claude
1. Treat this document as the visual source of truth.
2. Preserve the existing site's useful information architecture and content.
3. Implement components, not flattened mockups.
4. Start with tokens and reusable primitives: PhotoCard, Tape, Sticker, Ticket, DoodleIcon, Button, Accordion.
5. Build mobile-first.
6. Use the provided SVGs or recreate them as inline SVG components.
7. Keep the white background dominant.
8. Use decoration sparingly and intentionally.
9. Ensure every route/page feels like the same design system.
10. Before finishing, compare desktop and mobile against the supplied mockups for *style*, not pixel-perfect content.

## 14. Definition of done
The build is successful when:
- It unmistakably feels like the supplied scrapbook/festival reference.
- It still feels clean and premium rather than chaotic.
- The same component vocabulary repeats across all pages.
- Mobile is as intentionally designed as desktop.
- There is no horizontal overflow.
- All essential text is selectable, responsive and accessible.
- Angled imagery, tape and stickers feel layered but never obstruct content.
- White remains the dominant background.
- No red is introduced.
