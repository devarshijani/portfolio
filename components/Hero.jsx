'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const buttonTap = shouldReduceMotion ? {} : { scale: 0.98 };

  return (
    <header className="hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true"></div>
      <div className="wrap hero-inner">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="status-chip" variants={itemVariants}>
            <span className="pulse"></span>
            2 platforms live in production
          </motion.span>
          <motion.h1 variants={itemVariants}>
            Hi, I&apos;m<br />
            Devarshi <span className="amber">Jani</span>
          </motion.h1>
          <motion.p className="hero-tag" variants={itemVariants}>
            <b>Full-Stack Developer</b> — B.Tech AI &amp; Data Science &apos;27
          </motion.p>
          <motion.p className="hero-desc" variants={itemVariants}>
            I build platforms that run in the real world — a B2B solar marketplace serving live users and a real-time ride-sharing system with sockets, maps, and OTP-secured trips. From schema design to deployment, I ship the whole stack.
          </motion.p>
          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a
              className="btn btn-amber"
              href="/Devarshi_Jani_Resume.pdf"
              download="Devarshi_Jani_Resume.pdf"
              whileTap={buttonTap}
            >
              Download CV
            </motion.a>
            <motion.a
              className="btn btn-ghost"
              href="#projects"
              whileTap={buttonTap}
            >
              See my work
            </motion.a>
            <div className="socials">
              <a
                href="https://github.com/devarshijani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/devarshi-jani-7074b52a0/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8.16h4.56V23H.22V8.16Zm7.44 0h4.37v2.02h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 6.99V23h-4.55v-7.21c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V23H7.66V8.16Z" />
                </svg>
              </a>
              <a href="mailto:janidevarshi8@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24">
                  <path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm10 8.35L3.6 6h16.8L12 12.35ZM3 8.24V18h18V8.24l-9 6.53-9-6.53Z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* signature: live route drawing, pickup → sun */}
        <div className="route-visual" aria-hidden="true">
          <svg viewBox="0 0 440 400" xmlns="http://www.w3.org/2000/svg">
            <g opacity=".35" stroke="#22304F" strokeWidth="1">
              <path d="M30 90 H410 M30 190 H410 M30 290 H410" />
              <path d="M110 30 V370 M220 30 V370 M330 30 V370" />
            </g>
            <motion.path
              className="route-path"
              d="M60 330 C 120 330, 120 250, 180 250 S 250 170, 300 150 S 360 110, 380 80"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 3, ease: 'easeInOut', delay: 0.5 }
              }
            />
            <circle className="route-dot-a" cx="60" cy="330" r="7" />
            <circle cx="60" cy="330" r="13" fill="none" stroke="#3FD6C2" strokeOpacity=".4" />
            <text className="route-label" x="80" y="336">pickup — sarthi live tracking</text>
            <g transform="translate(380 80)">
              <circle className="route-dot-b" r="12" />
              <g className="sun-rays">
                <line x1="0" y1="-20" x2="0" y2="-27" />
                <line x1="0" y1="20" x2="0" y2="27" />
                <line x1="-20" y1="0" x2="-27" y2="0" />
                <line x1="20" y1="0" x2="27" y2="0" />
                <line x1="14" y1="-14" x2="19" y2="-19" />
                <line x1="-14" y1="14" x2="-19" y2="19" />
                <line x1="14" y1="14" x2="19" y2="19" />
                <line x1="-14" y1="-14" x2="-19" y2="-19" />
              </g>
            </g>
            <text className="route-label" x="255" y="55">solmarkt — solar b2b</text>
          </svg>
        </div>
      </div>
    </header>
  );
}
