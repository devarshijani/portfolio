<div align="center">

<!-- Hero Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0B1220,50:F5A524,100:3FD6C2&height=220&section=header&text=Devarshi%20Jani&fontSize=52&fontColor=E9EEF9&fontAlignY=35&desc=Full-Stack%20Developer%20%E2%80%A2%20Portfolio&descSize=18&descAlignY=55&animation=fadeIn" width="100%" />

<br/>

[![Live Site](https://img.shields.io/badge/🌐_Live_Portfolio-Visit_Now-F5A524?style=for-the-badge&logoColor=white)](https://devarshijani.github.io/portfolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/devarshi-jani-7074b52a0/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/devarshijani)
[![Email](https://img.shields.io/badge/Email-Say_Hello-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:janidevarshi8@gmail.com)

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Sora&weight=700&size=24&duration=3000&pause=1200&color=F5A524&center=true&vCenter=true&multiline=true&repeat=true&width=620&height=70&lines=I+build+platforms+that+run+in+the+real+world;Not+demos+—+products+with+users+and+uptime" alt="Typing SVG" />

</div>

---

## ✦ About This Project

This is my **personal developer portfolio** — a modern, performant web experience built with **Next.js (App Router)**, **Tailwind CSS (v4)**, and **Framer Motion**. Every pixel, animation, and interaction is intentionally designed to reflect how I approach software: **clean, modular, and production-ready**.

> *"I measure my work by one thing — does it run reliably for real users?"*

<br/>

## 🎨 Design Philosophy

| Principle | Implementation |
|:--|:--|
| **Dark-first aesthetics** | Custom deep navy palette (`#0B1220`) with amber (`#F5A524`) and teal (`#3FD6C2`) accents |
| **Typography system** | [Sora](https://fonts.google.com/specimen/Sora) for headings · [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) for body · [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) for code elements |
| **Fluid animations** | Smooth entrance staggers, interactive scroll reveals, and SVG path drawing animations powered by **Framer Motion** |
| **Accessibility** | `prefers-reduced-motion` support (via framer-motion hooks and media queries), semantic HTML5, ARIA labels, `:focus-visible` outlines, proper heading hierarchy |
| **Performance** | Next.js code splitting, optimized Google Font loading, and clean component architecture |

<br/>

## 🏗️ Architecture

```
devarshi-portfolio/
├── app/                      # Next.js App Router files (page.js, layout.js, globals.css)
├── components/               # React components (Navbar.jsx, Hero.jsx, About.jsx, Skills.jsx, etc.)
├── public/                   # Static assets (Devarshi_Jani_Resume.pdf, SVG icons)
└── README.md                 # You are here
```

- **Modular Components** — structured sections kept focus-specific and highly reusable
- **CSS Custom Variables** — design system tokens ported to `:root` and extended inside Tailwind `@theme` configuration
- **Asset Serving** — static downloadable assets like `Devarshi_Jani_Resume.pdf` served cleanly from the `public/` directory

<br/>

## 🖥️ Sections & Features

<table>
<tr>
<td width="50%" valign="top">

### 🏠 Hero
- Animated grid background with CSS masks
- Staggered mount animations for typography and CTA components
- Real-time SVG route visualization drawn smoothly using Framer Motion pathLength properties
- Pulsing "2 platforms live" status beacon
- Responsive CTA buttons + social icon bar

### 👤 About
- Personal narrative with journey timeline
- Monospace tech tag cloud
- Value cards featuring interactive hover elevations (`whileHover={{ y: -3 }}`)

### 🛠️ Skills
- Three-column grouped tool layout
- Custom monospace icon glyphs and inline SVGs
- LeetCode stats strip with profile link (150+ problems)

</td>
<td width="50%" valign="top">

### 🚀 Projects
- **Solmarkt** — Live B2B solar marketplace
  - 5 user roles · 11 Firestore collections · 30+ Server Actions
  - Next.js 16 · React 19 · TypeScript · Tailwind 4
- **Sarthi** — Real-time ride-sharing platform
  - JWT-authenticated sockets · geospatial matching
  - Live location streaming · OTP-secured rides
  - React · Node.js · MongoDB · Socket.io · Leaflet

### 📬 Contact
- Contact information cards with inline SVG system
- Fully functional controlled email client integration using mailto query parameters
- Tap micro-interactions (`whileTap={{ scale: 0.98 }}`) on submit action button

### 🦶 Footer
- Dynamic copyright year auto-updating via JS
- Linked social mirrors

</td>
</tr>
</table>

<br/>

## ⚙️ Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React 19](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=googlefonts&logoColor=white)

</div>

<details>
<summary><strong>🔍 Technical Deep Dive</strong></summary>

<br/>

| Feature | How It Works |
|:--|:--|
| **Scroll Reveal** | Framer Motion `<Reveal>` wrapper tracking `whileInView` with a threshold of `amount: 0.15` and custom spring eases |
| **Route Animation** | SVG `<motion.path>` drawing itself using `pathLength: 0` to `1` over `3s` with a `0.5s` delay |
| **Pulse Beacon** | CSS keyframe scale + opacity animations on the live status chip |
| **Reduced Motion** | Native integration of `useReducedMotion()` hooks; immediately disables motion values for a static layout if OS preferences dictate |
| **Mobile Menu** | React client-state toggle adding layout styles to the navigation links overlay |
| **Contact Form** | Intercepts submits, cleans inputs, URL-encodes, and issues a structured mailto redirection |
| **Responsive Grid** | Adaptive grid layouts reflowing smoothly at `900px` and `720px` breakpoints |

</details>

<br/>

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/devarshijani/portfolio.git

# Install dependencies
npm install

# Run the local Next.js development server
npm run dev
```

Or simply **[visit the live site →](https://devarshijani.github.io/portfolio/)**

<br/>

## 📱 Responsive Design

The portfolio is fully responsive across all device sizes:

| Breakpoint | Layout Changes |
|:--|:--|
| **> 900px** | Full multi-column grid layouts for all sections |
| **720px – 900px** | Single-column stacking, project cards reflow vertically |
| **< 720px** | Hamburger menu, simplified form layout, optimized spacing |

<br/>

## 🤝 Connect With Me

<div align="center">

| Channel | Link |
|:--|:--|
| 📧 **Email** | [janidevarshi8@gmail.com](mailto:janidevarshi8@gmail.com) |
| 💼 **LinkedIn** | [Devarshi Jani](https://www.linkedin.com/in/devarshi-jani-7074b52a0/) |
| 🐙 **GitHub** | [@devarshijani](https://github.com/devarshijani) |
| 📞 **Phone** | +91 91068 84503 |
| 📍 **Location** | Surat, Gujarat, India |

</div>

<br/>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0B1220,50:F5A524,100:3FD6C2&height=120&section=footer" width="100%" />

**Designed & built from scratch** by [Devarshi Jani](https://github.com/devarshijani)

*If you found this helpful, consider giving it a ⭐*

</div>
