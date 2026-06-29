# Aqib Habib — Portfolio

Personal portfolio site: flight control, state estimation, and fault detection for unmanned aircraft.

**Live:** `https://aqib-habib.github.io` (after the deploy step below)

Single self-contained `index.html` — no build step, no dependencies, no framework. Custom SVG graphics throughout, and a live observer-based fault-detection monitor in the hero that demonstrates the core of the thesis.

---

## Deploy to GitHub Pages (5 minutes)

You have two options. **Option A** gives you the cleanest URL.

### Option A — user site at `aqib-habib.github.io`
1. Create a new public repo named **exactly** `Aqib-Habib.github.io`.
2. Add `index.html` (and `README.md`) to the repo root and commit.
3. Go to **Settings → Pages**. Under *Build and deployment → Source*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. Wait ~1 minute. The site is live at `https://aqib-habib.github.io`.

### Option B — project site in any repo
1. Put `index.html` in the repo root.
2. **Settings → Pages → Deploy from a branch → main → /(root)**.
3. Live at `https://aqib-habib.github.io/<repo-name>/`.

> Tip: from the command line —
> ```bash
> git init
> git add index.html README.md
> git commit -m "Portfolio"
> git branch -M main
> git remote add origin https://github.com/Aqib-Habib/Aqib-Habib.github.io.git
> git push -u origin main
> ```

---

## Customize

Everything lives in `index.html`. The pieces you'll most likely touch:

| What | Where to look |
|---|---|
| **Project repo links** | Search for `TODO` and for `github.com/Aqib-Habib` inside the project cards — swap in the exact repo URLs once they're public. |
| **Your own images** | Each project card has a `.thumb` block containing an SVG. To use a photo/render instead, replace the `<svg>…</svg>` with `<img src="assets/your-image.jpg" alt="…" style="width:100%;height:100%;object-fit:cover">` and drop the file in an `assets/` folder. |
| **Add a headshot** | Optional. Easiest spot is the hero — replace the telemetry `<div class="panel">…</div>` with an image, or add an "About" section. (I'd keep the telemetry panel — it's the strongest part.) |
| **Colors** | The `:root` block at the top of `<style>`. `--signal` is the cyan accent, `--alert` the amber fault color. |
| **Fonts** | Space Grotesk (headings), IBM Plex Sans (body), IBM Plex Mono (data) — loaded from Google Fonts in `<head>`. |
| **Copy** | All text is plain HTML — edit in place. |

### Custom domain (optional)
Buy a domain, add a file named `CNAME` to the repo root containing just your domain (e.g. `aqibhabib.com`), then point a DNS `CNAME`/`A` record at GitHub Pages per the [docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## What's inside

- **Hero** — live residual-monitor demo (HTML canvas): residual sits at baseline, an actuator fault is injected, the trace crosses the threshold, and the detector flips to *FAULT DETECTED*.
- **Selected work** — six projects, each with a bespoke SVG thumbnail (FDI residual, ROS 2 trajectory, INDI step response, eVTOL airframe, FEA wing, octacopter).
- **Research** — thesis summary + the four observer schemes (Luenberger / Thau / EKF / UKF).
- **Experience** — timeline from TAI structures to FSD flight systems.
- **Skills, certifications, contact.**

Accessibility: keyboard focus styles, skip link, `prefers-reduced-motion` respected (the animation freezes to a static frame), responsive to mobile.

---

© Aqib Habib · Munich
