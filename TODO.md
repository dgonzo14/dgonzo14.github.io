# Portfolio launch checklist

The redesign is implemented locally. This checklist covers the remaining verification, publication, and optional upgrades from the follow-up discussion. The implementation history is in [REDESIGN_PLAN.md](REDESIGN_PLAN.md).

## 1. Browser and accessibility verification

Tested 2026-10-22 on Windows 11 against the local preview, with headless Chrome 155.0.8059.85, Edge 155.0.4283.62, and Firefox 158.0.1 driven by real keyboard, mouse, and touch input, plus axe-core 4.10.2.

- [ ] **Check desktop browsers.** Test Chrome, Edge, Firefox, and Safari; record which browsers and versions were actually tested.
  - Chrome, Edge, and Firefox pass at 1280 × 800 in both languages: fonts and images load, no console errors, no horizontal overflow.
  - **Remaining:** Safari (needs a Mac).
- [ ] **Check mobile browsers.** Test iOS Safari and Android Chrome for touch navigation, scrolling, text wrapping, and project dialogs.
  - Emulated Android Chrome with touch at 390 px and 320 px passes: the menu opens, closes, and closes on Escape; menu links land below the sticky header; the project dialog fits and closes. Firefox passes the same layout and tap checks.
  - **Remaining:** real iOS Safari and Android Chrome devices.
- [x] **Check both languages across browsers.** Verify EN/ES switching, saved preferences, translated controls, and long Spanish text.
  - Chrome and Edge pass switching, persistence after reload, and the translated title, navigation, filter, close-button, and portrait labels, plus the project count and country list. Spanish fits without overflow at 1280, 640, 390, and 320 px in all three browsers.
- [x] **Run an automated accessibility audit.** Use axe or Lighthouse and record actionable findings.
  - axe (WCAG 2.0–2.2 A/AA and best practices) ran in all three browsers in English, in Spanish, at phone width, and with a dialog open. It found one issue: the inactive EN/ES button had 2.85:1 contrast. Fixed; zero violations remain.
- [x] **Complete a keyboard-only walkthrough.** Verify the skip link, navigation, filters, disclosures, dialogs, focus visibility, focus return, and Escape behavior.
  - Chrome and Edge: the skip link appears and moves focus into the page. All 48 tab stops show a focus ring and none is hidden behind the sticky header. Filters respond to Enter and Space. Project rows and featured links open the dialog with focus on Close, and Tab stays inside it. Escape closes it and returns focus to the trigger. Rotations and leadership details toggle.
  - Headless Firefox cannot take window focus, so its keyboard behavior could not be tested. Spot-check Firefox and Safari by hand.
- [ ] **Check screen-reader behavior.** Verify landmarks, headings, image descriptions, language changes, dialog names, and status announcements.
  - Chrome's accessibility tree is sound in both languages:
    - Landmarks: banner, main, navigation, and six named regions.
    - Headings: one h1, four h2s, with h3s beneath.
    - The portrait has alt text in both languages.
    - The dialog is named by its project heading.
    - Filters and language buttons expose their pressed state.
    - The project count and copy status are polite live regions.
  - Fixed:
    - The MARTA illustration link label now changes with the language.
    - The pipeline label is now valid (`role="group"`).
    - The decorative × in the hero credential line is hidden from assistive technology.
  - **Remaining:** a pass with NVDA or VoiceOver.
- [x] **Check contrast and zoom.** Verify text and control contrast, 200% text enlargement, and reflow at 400% browser zoom.
  - The lowest measured text contrast is 4.80:1 (rotation dates). The page reflows without horizontal scrolling at 640 × 400 (1280 × 800 at 200%) and 320 × 256 (400%), and dialogs fit.
  - Fixed: the sticky header covered 28% of the screen at 400% zoom. It now stops sticking when the viewport is 480 px tall or less.
- [x] **Test reduced-motion mode.** Confirm decorative movement stops and project illustrations retain their correct positions.
  - In Chrome, Edge, and Firefox, no animations run (five normally do) and smooth scrolling is off. The dialog opens without animation, and hovering leaves the three project illustrations at rest.
- [x] **Test with JavaScript disabled.** Confirm core content, all nine native project disclosures, travel destinations, and contact links remain usable.
  - Chrome and Edge:
    - All nine project disclosures, the rotations, and the 29 destinations open natively.
    - The email, LinkedIn, and GitHub links are present.
    - Controls that need JavaScript are hidden.
    - Featured "explore" links scroll to the closed project row, one click from its details.
  - Fixed: phones showed only a non-working menu button. They now show Work, Experience, About, and "Let's talk" in the header. Firefox screenshots confirm the same header.
- [x] **Resolve and retest findings.** Fix discovered issues and record any checks that could not be completed in the available environment.
  - All fixes above were retested in the three browsers.
  - Not possible here: Safari, real devices, a real screen reader, Firefox keyboard input, and the email draft (section 2).

## 2. Live external links

- [x] **Verify DG Atlas.** Open `https://dgonzo14.github.io/world_DG/` and confirm the public project loads correctly.
  - The site loads over HTTPS; its GitHub Pages build reports "built". In Chrome it renders the globe, 29 countries, and route controls without console errors.
- [x] **Verify the transit repository.** Open `https://github.com/dgonzo14/DMM-Transportation-Final-Project` and confirm it is publicly accessible and is the intended repository.
  - The repository is public. Its README describes the MTA × TfL bronze/silver/gold pipeline shown on the project card.
- [x] **Verify the GitHub profile.** Confirm `https://github.com/dgonzo14` reaches the correct profile.
  - It resolves to Diego Gonzalez (`dgonzo14`).
- [ ] **Verify the LinkedIn profile.** Confirm `https://www.linkedin.com/in/diego-gonzalezz` reaches the correct profile.
  - LinkedIn rejects automated requests (HTTP 999). **Remaining:** open the link once in a browser.
- [ ] **Verify the email link.** Confirm it opens a draft addressed to `gonzalez.diego14@outlook.com`, without sending a message.
  - The address matches in the contact link, the dialog footer, and the copy button. **Remaining:** click it once to confirm your mail app opens a draft.
- [x] **Correct any broken destinations.** Update affected links consistently and retest them.
  - No broken destinations were found.

## 3. Publication

- [ ] **Select the hosting destination and final URL.** Check any existing deployment configuration before choosing the release path.
  - Findings so far:
    - This repository has no Git remote.
    - `https://dgonzo14.github.io/` returns 404 because no `dgonzo14.github.io` repository exists. The public repositories are `dgonzo14`, `DMM-Transportation-Final-Project`, `SHPE_Website`, and `world_DG`.
    - The current Open Graph URLs only work if the site is published from a repository named `dgonzo14.github.io`. A project repository would serve it at `https://dgonzo14.github.io/<repo>/`, and the metadata would need updating.
- [ ] **Align metadata with the final URL.** Check the absolute Open Graph URL and image URL, page title, description, favicon, and social-preview image.
- [ ] **Prepare the release files.** Include `index.html`, `styles.css`, `script.js`, and `assets/`; exclude `.preview/`, local backups, and implementation helpers.
- [ ] **Publish the redesigned portfolio.** Deploy to the selected hosting destination.
- [ ] **Smoke-test the published site.** Verify HTTPS, asset loading, navigation, direct project links, filters, dialogs, languages, and contact controls on the live URL.
- [ ] **Verify link previews.** Confirm the live share image and metadata are accessible and render correctly in a preview inspector.
- [ ] **Record the release.** Add the final URL, deployment date, and remaining known limitations to the README.

## 4. Optional upgrades

These are enhancements, not blockers for the original redesign request.

- [ ] **Choose real project screenshots.** Select representative images from DG Atlas and any other projects with shareable interfaces.
- [ ] **Integrate the screenshots.** Optimize image sizes, add accurate alternative text, and retain clear labels wherever illustrative concepts remain.
- [ ] **Prepare a current résumé PDF.** Use Diego's actual résumé and review the contact information intended for public download.
- [ ] **Add a résumé download link.** Place it in an obvious location, then verify the PDF opens and downloads on desktop and mobile.
