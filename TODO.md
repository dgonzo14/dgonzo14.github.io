# Portfolio launch checklist

The redesign is implemented locally. This checklist covers the remaining verification, publication, and optional upgrades from the follow-up discussion. The implementation history is in [REDESIGN_PLAN.md](REDESIGN_PLAN.md).

## 1. Browser and accessibility verification

- [ ] **Check desktop browsers.** Test Chrome, Edge, Firefox, and Safari; record which browsers and versions were actually tested.
- [ ] **Check mobile browsers.** Test iOS Safari and Android Chrome for touch navigation, scrolling, text wrapping, and project dialogs.
- [ ] **Check both languages across browsers.** Verify EN/ES switching, saved preferences, translated controls, and long Spanish text.
- [ ] **Run an automated accessibility audit.** Use axe or Lighthouse and record actionable findings.
- [ ] **Complete a keyboard-only walkthrough.** Verify the skip link, navigation, filters, disclosures, dialogs, focus visibility, focus return, and Escape behavior.
- [ ] **Check screen-reader behavior.** Verify landmarks, headings, image descriptions, language changes, dialog names, and status announcements.
- [ ] **Check contrast and zoom.** Verify text and control contrast, 200% text enlargement, and reflow at 400% browser zoom.
- [ ] **Test reduced-motion mode.** Confirm decorative movement stops and project illustrations retain their correct positions.
- [ ] **Test with JavaScript disabled.** Confirm core content, all nine native project disclosures, travel destinations, and contact links remain usable.
- [ ] **Resolve and retest findings.** Fix discovered issues and record any checks that could not be completed in the available environment.

## 2. Live external links

- [ ] **Verify DG Atlas.** Open `https://dgonzo14.github.io/world_DG/` and confirm the public project loads correctly.
- [ ] **Verify the transit repository.** Open `https://github.com/dgonzo14/DMM-Transportation-Final-Project` and confirm it is publicly accessible and is the intended repository.
- [ ] **Verify the GitHub profile.** Confirm `https://github.com/dgonzo14` reaches the correct profile.
- [ ] **Verify the LinkedIn profile.** Confirm `https://www.linkedin.com/in/diego-gonzalezz` reaches the correct profile.
- [ ] **Verify the email link.** Confirm it opens a draft addressed to `gonzalez.diego14@outlook.com`, without sending a message.
- [ ] **Correct any broken destinations.** Update affected links consistently and retest them.

## 3. Publication

- [ ] **Select the hosting destination and final URL.** Check any existing deployment configuration before choosing the release path.
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
