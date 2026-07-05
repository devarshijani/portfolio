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

This is my **personal developer portfolio** — a single-file, hand-crafted web experience built entirely from scratch with no frameworks, no build tools, and zero dependencies. Every pixel, animation, and interaction is intentionally designed to reflect how I approach software: **clean, performant, and production-ready**.

> *"I measure my work by one thing — does it run reliably for real users?"*

<br/>

## 🎨 Design Philosophy

| Principle | Implementation |
|:--|:--|
| **Dark-first aesthetics** | Custom deep navy palette (`#0B1220`) with amber (`#F5A524`) and teal (`#3FD6C2`) accents |
| **Typography system** | [Sora](https://fonts.google.com/specimen/Sora) for headings · [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) for body · [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) for code elements |
| **Zero-dependency animations** | CSS `@keyframes` for the pulse beacon, SVG stroke-dashoffset for the route drawing, IntersectionObserver for scroll reveals |
| **Accessibility** | `prefers-reduced-motion` support, semantic HTML5, ARIA labels, `:focus-visible` outlines, proper heading hierarchy |
| **Performance** | Single HTML file · No JS frameworks · No build step · Loads in < 1s |

<br/>

## 🏗️ Architecture

```
devarshi-portfolio/
├── index.html                # The entire portfolio — HTML + CSS + JS in one file
├── Devarshi_Jani_Resume.pdf  # Downloadable resume
└── README.md                 # You are here
```

### Why a single file?

Simplicity is a feature. A single `index.html` means:
- **⚡ Instant deployment** — drop it on any static host
- **🔒 Zero supply chain risk** — no `node_modules`, no CVEs
- **📦 Fully portable** — works offline, works anywhere
- **🎯 Forces discipline** — every byte earns its place

<br/>

## 🖥️ Sections & Features

<table>
<tr>
<td width="50%" valign="top">

### 🏠 Hero
- Animated grid background with CSS masks
- SVG route visualization with stroke-dashoffset draw animation
- Pulsing "2 platforms live" status beacon
- Responsive CTA buttons + social icon bar

### 👤 About
- Personal narrative with journey timeline
- Interactive value cards with hover elevations
- Technology chip cloud

### 🛠️ Skills
- Three-column grouped skill layout
- Custom monospace icon glyphs
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
- Contact information cards with icon system
- Functional contact form → `mailto:` pre-filled draft
- Zero backend required

### 🦶 Footer
- Auto-updating copyright year via JS
- Social links mirror

</td>
</tr>
</table>

<br/>

## ⚙️ Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![SVG](https://img.shields.io/badge/SVG_Animations-FFB13B?style=flat-square&logo=svg&logoColor=black)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=googlefonts&logoColor=white)

</div>

<details>
<summary><strong>🔍 Technical Deep Dive</strong></summary>

<br/>

| Feature | How It Works |
|:--|:--|
| **Scroll Reveal** | `IntersectionObserver` with `threshold: 0.12` — elements fade-in and translate up when 12% visible |
| **Route Animation** | SVG `<path>` with `stroke-dasharray: 640` + `stroke-dashoffset` animated to `0` via CSS keyframes |
| **Pulse Beacon** | Pseudo-element `::after` with infinite scale + fade animation on the status chip |
| **Mobile Menu** | Toggle `.open` class on nav links container; auto-close on link click |
| **Contact Form** | Intercepts `submit`, constructs a `mailto:` URI with URL-encoded subject + body, opens default email client |
| **Responsive Grid** | CSS Grid with `clamp()` typography and breakpoints at `900px` / `720px` |
| **Dark Theme** | CSS custom properties (`--bg`, `--ink`, `--amber`, `--teal`) for consistent theming |
| **Reduced Motion** | `@media (prefers-reduced-motion: reduce)` disables all animations and enables instant scroll |

</details>

<br/>

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/devarshijani/portfolio.git

# Open in browser — no build step needed!
cd portfolio
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
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
