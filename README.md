# Diego Gonzalez · Engineering in motion

A bilingual portfolio for software engineering, machine learning, and data systems. Built with plain HTML, CSS, and JavaScript. No build step or package installation.

## Preview

With Node.js installed:

```sh
node server.cjs
```

Open `http://127.0.0.1:5173`. Press Ctrl+C to stop the server. Set `PORT` if you need a different port. The preview server serves only the page, stylesheet, script, and public assets.

You can also open `index.html` directly. The site uses Google Fonts when available and local fallback fonts otherwise.

## Experience

- Editorial hero with an original SVG travel globe and clear May 2027 availability.
- Impact-led Delta feature, followed by DG Atlas, UNI-T, and MARTA project stories.
- Nine projects, five filters, keyboard-accessible native dialogs, and shareable project links such as `#project-globe`.
- Four expandable Delta rotations, education, leadership, teaching, skills, and 29 travel destinations.
- EN/ES switching with a remembered preference and Spanish browser-language detection.
- Responsive navigation, active section indicators, email copy feedback, and reduced-motion support.
- Core content and project disclosures remain available without JavaScript; phones then get plain header links instead of the menu button.
- The header stops sticking on viewports 480 px tall or less (landscape phones, high zoom).

## Files and editing

| File | Purpose |
| --- | --- |
| `REDESIGN_PLAN.md` | Initial audit, creative direction, implementation plan, and completion notes |
| `index.html` | All portfolio content, bilingual copy, inline illustrations, and project detail sources |
| `styles.css` | Design tokens, layout, interaction states, breakpoints, and print/reduced-motion styles |
| `script.js` | Language, filters, dialogs, navigation, clock, and clipboard enhancement |
| `server.cjs` | Optional dependency-free local HTTP preview |
| `_config.yml` | Keeps docs and local helpers out of the GitHub Pages build |
| `assets/avatar.png` | Original pixel-art portrait |
| `assets/favicon.svg` | New DG mark |
| `assets/og.svg` / `assets/og.png` | Editable social-preview source and 1200 × 630 share image |

Each project lives in a `<details class="project-entry">` block in `index.html`. Its `data-categories` controls filtering: `web`, `ml`, `data`, and `geo`. Featured links use `data-project` to open the same content in a dialog; there is no duplicate project-content store.

Keep English and Spanish copy together using `lang="en"` and `lang="es"`. If changing travel destinations, update both the static country list in `index.html` and the language-aware array in `script.js`.

The original three source files and original share image are preserved in `.preview/`, which is ignored by Git and excluded from the local preview server. That directory also holds local implementation helpers and QA screenshots; it is not part of the website.

## Verification performed

- JavaScript syntax checks for application and preview server.
- Browser checks for all nine project dialogs, all five filters, Escape dismissal, Spanish persistence, mobile menu behavior, and email copying.
- Responsive inspection at desktop, tablet, and narrow phone widths, including 320px in both languages.
- Local asset, anchor-target, duplicate-ID, and source-content checks.
- No application console warnings or errors in the tested browser session.
- Cross-browser accessibility pass (2026-10-22) in headless Chrome 155, Edge 155, and Firefox 158. It covered axe-core 4.10.2 in both languages with zero violations, keyboard walkthroughs, reduced motion, JavaScript disabled, and reflow at 200% and 400% zoom. Results and the checks still needing a person are in [TODO.md](TODO.md).

## Publishing

GitHub Pages publishes the `main` branch of the public [`dgonzo14/dgonzo14.github.io`](https://github.com/dgonzo14/dgonzo14.github.io) repository to `https://dgonzo14.github.io/`, and every push to `main` redeploys. `_config.yml` limits the published site to `index.html`, `styles.css`, `script.js`, and `assets/`; add any new non-site file to its `exclude` list. The social metadata uses absolute `https://dgonzo14.github.io/` URLs; update them if the domain changes.

Keep private repositories private. Project visuals are illustrative diagrams or interface concepts, not production screenshots. No resume PDF or phone number is included.
