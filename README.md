# Ravindu Lakshitha — Personal Portfolio

A responsive, dark personal portfolio built with HTML, CSS, and vanilla JavaScript. No frameworks, packages, build step, or npm required. It uses system fonts and does not depend on external assets.

## Files

- `index.html`: Content, navigation, project details, and contact details.
- `style.css`: Theme colors, layouts, cards, responsive styles, and animations.
- `script.js`: Mobile menu, active section highlighting, and automatic footer year.
- `README.md`: Editing and deployment instructions.

## Preview

Open `index.html` directly in your browser. All content and section links work without a server. Resize the browser to try the mobile layout. JavaScript enables the collapsible mobile menu; without JavaScript, navigation remains visible.

## Personalize

1. Edit the text in `index.html` to update your about, projects, skills, or education.
2. The contact email is [ravindulakshitha233@gmail.com](mailto:ravindulakshitha233@gmail.com). Update both its visible text and `mailto:` address together in `index.html`.

3. LinkedIn is omitted because no URL was provided. You can add a `contact-item` link later if needed. Use `target="_blank" rel="noopener noreferrer"` for external links.
4. The GitHub links already use your supplied profile. Project repository links are not included because specific repository URLs were not supplied. NSBM AURA’s repository is private; its card displays `assets/images/nsbm-aura-landing.png` without a repository or live project link.
5. Change the variables under `:root` in `style.css` to customize the palette. Styles are grouped with comments; responsive overrides are near the bottom.

Email is a clickable link that opens the visitor’s email application. There is no contact form or backend.

## Deploy with GitHub Pages

1. Create a GitHub repository (for example, `ravindu-portfolio`).
2. Upload these four files and the `assets` folder to the repository root. Keep their filenames unchanged.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your default branch (usually `main`) and the **/ (root)** folder, then save.
6. Once deployment finishes, open the website URL shown in Pages settings.

With the example repository name, the expected project URL is `https://ravindulakshitha233-bit.github.io/ravindu-portfolio/`. This is an expected URL, not a claim that the site has already been published. For a profile-root site, name the repository `ravindulakshitha233-bit.github.io` instead. Relative stylesheet and script paths support either option.

## Accessibility and behavior

- Semantic sections, a skip link, visible keyboard focus, and a labeled navigation menu.
- Mobile menu supports Escape, outside clicks, and closing after navigation.
- Smooth scrolling respects the device’s reduced-motion preference.
- Content remains readable without JavaScript, with no animation-dependent visibility.
- Skill levels, dates, email addresses, and project URLs have not been invented.

## Before sharing

Review your details, and try the menu and section links on your phone. External GitHub links open in a new tab.
