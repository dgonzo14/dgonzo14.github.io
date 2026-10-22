# Portfolio redesign plan

## Goal

Make Diego Gonzalez immediately memorable as a creative software, ML, and data engineer, while letting a hiring manager quickly understand his experience, inspect substantive work, and get in touch.

## What the current portfolio gets right

- Distinctive aviation/travel identity grounded in Delta experience and personal interests.
- Strong supplied evidence: four Delta co-op rotations, 98% fewer engineer hours on a compliance process, production ML, teaching, and leadership.
- Nine projects with specific technical decisions, bilingual content, and working public project links.
- Lightweight HTML/CSS/JavaScript with no build step.

## What needs to change

- The oversized departures board and metaphor-heavy labels delay the answer to “what can this candidate do?”
- The strongest work is below long biography and experience sections.
- Projects need visual differentiation, clear ownership, and a problem → implementation → result narrative.
- The page needs stronger hierarchy and pacing, less repeated dense text, and more obvious contact actions.

## Creative direction: engineering in motion

Use an editorial, aviation-informed visual system: warm paper, near-black ink, electric chartreuse, oversized typography, fine technical rules, route graphics, and restrained motion. Keep the human details—English/Spanish, the existing portrait, travel, teaching—without making the visitor decode the navigation.

Create visuals directly in SVG/HTML/CSS so the portfolio demonstrates craft without adding stock imagery or heavy dependencies. Project graphics will be explicitly described as illustrative diagrams, not represented as screenshots or confidential production data.

## Implementation sequence

1. **Foundation and first impression**
   - Replace the header with plain-language Work, Experience, About, and Contact navigation.
   - Create a high-impact hero with Diego's name, an engineering proposition, May 2027 availability, and a custom orbital route visual.
   - Put verified-from-existing-content proof points directly beneath the hero.
2. **Work that earns attention**
   - Lead with Delta's compliance automation outcome and the scope of end-to-end engineering.
   - Feature DG Atlas, UNI-T, and MARTA with original explanatory graphics.
   - Preserve all nine projects in a filterable project index with keyboard-accessible detail dialogs and direct links.
3. **Experience and personality**
   - Turn the four Delta rotations into a readable progression with expandable details.
   - Preserve teaching, SHPE leadership, education, scholarship, skills, and travel in a more selective layout.
   - Retain EN/ES throughout, including interactive controls and accessible labels.
4. **Contact and polish**
   - Make email, copy-email, GitHub, and LinkedIn easy to find.
   - Respect reduced motion, visible keyboard focus, native dialog behavior, and mobile layouts.
   - Preserve useful no-JavaScript content; avoid hiding core claims behind animation.
5. **Verification**
   - Run JavaScript syntax and document/link consistency checks.
   - Inspect desktop and mobile layouts in a browser when available.
   - Exercise project filters, dialogs, language persistence, navigation, and contact controls.
   - Update the README and record what shipped and any verification limitations here.

## Content boundaries

Use the existing portfolio as the source of claims. Do not invent employers, endorsements, new metrics, live-product adoption, a resume file, or public links for private repositories. Keep concept work identified as concept work. Do not publish or change hosting as part of this local repository redesign.

## Completion record

- [x] Audit and plan saved before implementation.
- [x] Visual redesign implemented.
- [x] All nine projects and bilingual content preserved.
- [x] Interaction and responsive checks completed.
- [x] README updated.

### Delivered

The new editorial design includes the original SVG globe, a prominent Delta outcome, three illustrated project stories, all nine projects in a filterable index with native detail dialogs, four expandable Delta rotations, education and leadership, a travel list, and a clear contact section. The favicon and 1200 × 630 social-preview image match the new identity. The original source files and share image are preserved in the ignored `.preview/` directory.

### Validation notes

- Browser-tested every project dialog and all five filters (all: 9, software: 5, ML: 3, data: 3, geo: 3).
- Confirmed Escape dismissal, focus inside the modal, direct project links, language persistence after reload, mobile-menu open/close, and successful email-copy feedback.
- Inspected 1280px desktop, 1024px and 768px tablet, 390px mobile, and 320px narrow-mobile widths. English and Spanish fit without page-level horizontal overflow at the narrow breakpoint.
- Fixed the sticky-header back-to-top target and Spanish headline overflow found during QA.
- Confirmed all original project IDs have replacements, all local anchor targets and assets exist, IDs are unique, all four rotations and 29 destinations remain, and original evidence was retained.
- JavaScript syntax checks pass. No application console errors or warnings were observed.
- Reduced-motion and no-JavaScript behavior are implemented in source; no dedicated automated accessibility audit or cross-browser suite was run.
- External project destinations were preserved from the original portfolio; their live service health was not part of this local redesign.

### Scope

Implemented locally. No hosting or publication changes. Start the preview with `node server.cjs`; the existing local launch configuration now uses Node because Python was unavailable on this machine.
