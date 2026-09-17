# Final visual polish — 2026-09-17

## Scope

Existing dark / violet / blue identity preserved. Homepage layout and hierarchy refined; prices, project URLs, contacts and calculator formula unchanged. `app/neryo/page.tsx`, the shared base stylesheet and dependencies are unchanged.

- Desktop headline reduced by approximately 13%; expanded layered hero with subtle pointer response.
- Service directions replace numerical hero claims; compact What I Build section added.
- NERYO is a full-width featured case with abstract branded screenshot slots.
- Russian pricing names; BUSINESS is the highlighted offer.
- Compact process with one-time progress animation; vertical mobile timeline.
- Capability cards, compact FAQ with onboarding text, personal trust block and grouped CTA.
- Conditional contact links, visible keyboard focus, reduced-motion handling and lazy responsive project images.

## Verification

- `npm run build`: PASS, including `/neryo`.
- Production export served locally with `serve out`.
- Browser checks at 1440×900, 390×844 and 1920×900: no horizontal page overflow; NERYO card width equals the project grid width; valid section anchors; BUSINESS highlighted.
- Desktop and mobile section screenshots visually inspected.
- Calculator: 39,900 → 57,900 after selecting Interactive; 72,300 with 14 sections; 63,300 with interactive option disabled; 57,300 with animations disabled. Original formula retained.
- Keyboard activation: menu expands; FAQ reveals the answer; featured case opens `/neryo`.
- `/neryo` checked on desktop and mobile.
- Console and page errors: none observed.
- Reduced motion: all decorative hero/featured animations disabled; calculator transform is none; no React state loop for pointer motion.
- Loaded images: no broken images observed.

Screenshots and repeatable browser capture scripts are stored outside the deploy in `H:\Фриланс\portfolio-polish-qa`.

## Manual assets

When available, add the approved real portrait and NERYO screenshots under `public/`, then set `portrait` and `neryoScreens` in `src/config/visuals.ts`. Empty paths deliberately show a monogram and abstract branded concepts. No generated face or invented app interface is used.
