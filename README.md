# Aqib Habib — Aerospace Portfolio Website

A premium static portfolio website for UAV, eVTOL, flight-control, autonomy, research, and coding projects.

## What is included

- `index.html` — main website
- `styles.css` — responsive aerospace-style visual design
- `script.js` — interactive aircraft project selector and clickable component highlights
- Fully static: no build system required
- Mobile-responsive layout
- Interactive project case studies
- Thesis/research section
- Code/simulation project section
- Contact section

## How to preview locally

Open `index.html` directly in your browser.

Or run a local server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## How to customize

### 1. Replace placeholder text

Open `index.html` and edit:

- Hero headline
- About/summary text
- Research cards
- Experience section
- Contact links

### 2. Edit aircraft project data

Open `script.js` and edit the `projects` array.

Each project has:

```js
{
  id: "fixed-wing-evtol",
  title: "Fixed-Wing eVTOL UAV",
  category: "Bachelor Thesis / UAV Prototype",
  summary: "...",
  meta: ["eVTOL", "Airframe", "Pixhawk"],
  components: [ ... ]
}
```

### 3. Replace LinkedIn/GitHub links

In `index.html`, search for:

```html
https://www.linkedin.com/
https://github.com/
```

Replace these with your real profile links.

### 4. Add your CV

Create a folder named `cv` or use the existing `docs` folder, add your PDF, then link it from the hero/contact section:

```html
<a class="btn secondary" href="docs/Aqib_Habib_CV.pdf" target="_blank">Download CV</a>
```

## Hosting options

### Option A: GitHub Pages

1. Create a new GitHub repository, for example `aqib-portfolio`.
2. Upload all files from this folder.
3. Go to repository `Settings` → `Pages`.
4. Choose `Deploy from branch`.
5. Select the `main` branch and root folder.
6. Save.
7. GitHub will provide a public website URL.

### Option B: Netlify

1. Go to Netlify.
2. Drag and drop this folder into Netlify Drop.
3. Netlify will instantly host it.
4. Later, connect the GitHub repository for automatic deployments.

### Option C: Vercel

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Set framework preset to `Other` or static site.
4. Deploy.
5. Add a custom domain such as `aqibhabib.com`.

## Recommended next upgrades

- Replace stylized aircraft drawings with your own public-safe renders.
- Add project-specific pages for each aircraft.
- Add demo videos/GIFs from MATLAB, Simulink, RViz, Unity, PX4, or Gazebo.
- Add a downloadable thesis PDF if permitted.
- Add GitHub links to public repositories.
- Convert to Next.js later if you want blog posts, MDX case studies, and advanced SEO.

## Public-safety note for aerospace work

Do not upload proprietary CAD, company drawings, dimensions, internal test results, or confidential aircraft details. Use generic diagrams, public-safe summaries, and self-created visuals.
