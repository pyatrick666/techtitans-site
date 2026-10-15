# Tech Titans — Promotional Website (Task B2)

Static website (HTML, CSS and a little JavaScript). No build step, so it works on GitHub Pages as-is.

## Pages
| File | Purpose (B2 brief) |
|---|---|
| `index.html` | Home — who we are and what we build; Services section (`#services`); mission statement |
| `demo.html` | Portfolio — live embedded prototype, demo log-ins, what's inside |
| `about.html` | About/Team — roles, mission statement, corporate identity (logo, colours, fonts) |
| `contact.html` | Contact — email form (opens the visitor's email app) and mailto link |

Prototype linked from the site: https://abiralpokhrel-learns.github.io/cyberawareprototype/

## Deploy on GitHub Pages
1. Create a new GitHub repository (e.g. `techtitans-site`) and upload **the contents of this folder** (so `index.html` is at the top level of the repo).
2. Repo **Settings → Pages**.
3. Under *Build and deployment*, set **Source: Deploy from a branch**, branch **main**, folder **/ (root)**, then Save.
4. After about a minute your live URL appears: `https://<your-username>.github.io/<repo-name>/`. This is the URL you submit.

## Things to personalise
- **Logo:** replace `assets/img/logo.png` (dark text, for light backgrounds) and `assets/img/logo-light.png` (white text, for the dark footer). `favicon.svg` is the browser-tab icon.
- **Team:** the four cards in `about.html` (names, roles, one-line descriptions).
- **Hero photo:** replace `assets/img/hero.jpg` with a full-resolution warehouse photo (about 1920×1080).
- **Email address:** `hello@techtitans.training` appears in the page footers, `contact.html` and `js/main.js` (`CONTACT_EMAIL`). Change it everywhere if your real address differs.
- **Colours / fonts:** the variables at the top of `css/styles.css`.

## Submission checklist (B2)
- [ ] Live URL
- [ ] ZIP of these website files
- [ ] Updated design documentation
- [ ] Finalised zero-budget marketing plan
