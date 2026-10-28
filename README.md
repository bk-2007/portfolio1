# Gorle Balakrishna – Personal Portfolio

A fast, accessible, hand-crafted personal portfolio website for **Gorle Balakrishna**, B.Tech Computer Science & Data Science student. Built with **Next.js (App Router)** and **Tailwind CSS** using a bespoke **neo-brutalist-lite** design system (flat, bold, tactile, human-made).

---

## 🎨 Design System: "Neo-Brutalist-Lite"

- **Background:** `#FFF8EC` (Warm Cream)
- **Text & Borders:** `#141414` (Deep Ink)
- **Accents:** 
  - Coral: `#FF5A5F`
  - Sunny Yellow: `#FFC93C`
  - Teal: `#00A896`
  - Cobalt: `#2D5BFF`
- **Typography:**
  - Headings: *Bricolage Grotesque* (700 / 800)
  - Body: *DM Sans* (400 / 500 / 700)
- **Shadows:** Tactile `4px 4px 0 #141414` (expands to `8px 8px 0 #141414` on hover with `-translate-x-0.5 -translate-y-1`)
- **Strictly Avoids:** Gradients, glassmorphism, glow/blur orbs, blobs, 3D particles, emojis in copy, dark mode, carousels, or typing animations.

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: v18.17.0+ (Tested on v24.x)
- **npm** or **yarn** or **pnpm**

### Installation & Development
1. Clone the repository and navigate into the project directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. To build for production and test the static build:
   ```bash
   npm run build
   npm run start
   ```

---

## 📁 Content Management (Single Source of Truth)

**All portfolio content, URLs, and text live strictly in [`/data/content.js`](./data/content.js).**  
Components only read from this file; no copy or links are hard-coded into React components.

### Schema in `/data/content.js`:
- `profile`: `{ name, title, intro, location, languages[], email, phone, github, linkedin, resumePath, photoPath }`
- `about`: Verbatim biographical paragraph
- `skills`: Categorized arrays with color-coded accents (`coral`, `cobalt`, `teal`, `sunny`)
- `experience`: Professional experience timeline with role, org, period, accent, and bullet points
- `projects`: Project cards array with `id`, `title`, `subtitle`, `stack[]`, `description`, `url`, and `accent`
- `education`: 3 formal education milestones
- `certifications`: Technical credentials with title, issuer, and status
- `activities`: Extracurricular campus involvement & fest coordination
- `navLinks`: Header navigation anchors
- `siteMeta`: SEO metadata, canonical URL, and Open Graph information

---

## 🔄 Replacing Assets (Photo & Resume)

1. **Profile Photo**:
   - Location: `public/photo.jpg`
   - Format: JPEG / PNG / WebP, square aspect ratio recommended (e.g., 800x800px).
   - Display: Displayed via `next/image` with `priority` inside a tilted, offset neo-brutalist colored frame.
   - Fallback: If `photo.jpg` is removed or fails to load, the site automatically renders a graceful fallback avatar with Balakrishna's initials (`GB`).

2. **Resume**:
   - Location: `public/resume.pdf`
   - Replace this file with your updated PDF resume. The "Download Resume" button on the hero section will automatically download this file.

---

## ☁️ Zero-Configuration Vercel Deployment

This project is a 100% static Next.js application with zero backend or database dependencies.

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of neo-brutalist portfolio"
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep the default settings:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `next build`
   - Output Directory: `.next`
5. Click **Deploy**. Vercel will build and deploy the site in under 60 seconds with zero configuration required.

---

## 📋 Outstanding Placeholders Checklist

Below is the exhaustive list of every `[PLACEHOLDER]` in [`data/content.js`](./data/content.js) that requires a real value from the owner:

| # | Placeholder | Current Value in `content.js` | Location | Action Required |
|---|-------------|-------------------------------|----------|-----------------|
| 1 | `[LINKEDIN_URL]` | `"[LINKEDIN_URL]"` | `profile.linkedin` | Replace with your live LinkedIn profile URL (e.g. `https://linkedin.com/in/balakrishna-gorle`). Card automatically activates when updated. |
| 2 | `[NOVA_CART_URL]` | `"[NOVA_CART_URL]"` | `projects[0].url` | Replace with the live URL for Nova Cart once deployed. While set to placeholder, the card displays a tactile "Coming soon" state. |
| 3 | `[CHATWAVE_URL]` | `"[CHATWAVE_URL]"` | `projects[1].url` | Replace with the live deployment URL for ChatWave. |
| 4 | `[EVENTRAA_URL]` | `"[EVENTRAA_URL]"` | `projects[2].url` | Replace with the live deployment URL for Eventraa. |
| 5 | `[ALUMCONNECT_URL]` | `"[ALUMCONNECT_URL]"` | `projects[3].url` | Replace with the live deployment URL for AlumConnect. |
| 6 | `[MODULE_COUNT]` | `"multi-module"` | `projects[0].description` | Confirm with owner whether Nova Cart has 8 or 9 modules (defaults to `"multi-module"`). |
| 7 | `[CERT_ISSUER]` | `"[CERT_ISSUER: Intrnforte]"` | `certifications[0].issuer` | Verify correct spelling of issuer ("Intrnforte" vs "Internforte"). |

---

## ♿ Accessibility & Quality Standards

- **Semantic landmarks:** `<header>`, `<main id="main-content">`, `<section>`, `<footer>`, `<nav>`.
- **Heading Hierarchy:** Strictly one `<h1>` in the Hero; all section titles are `<h2>`; card titles are `<h3>`.
- **WCAG AA Contrast:** Text colors on all accents (Cobalt `#2D5BFF`, Coral `#FF5A5F`, Sunny Yellow `#FFC93C`, Teal `#00A896`, Cream `#FFF8EC`) have been tested and verified for high contrast.
- **Project Cards:** The entire card is an accessible `<a>` element with descriptive `aria-label`, visible keyboard focus rings, and pinned CTA that inverts color on hover/focus. When URL is empty or a placeholder, gracefully falls back to a non-link `<div>` with "Coming soon".
- **Reduced Motion:** Fully adheres to `prefers-reduced-motion: reduce` by disabling smooth scrolling and transforms.
