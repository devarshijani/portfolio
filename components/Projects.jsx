'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Reveal from './Reveal';

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  const hoverAnimation = shouldReduceMotion ? {} : { y: -4 };

  return (
    <section id="projects">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Featured projects</p>
        </Reveal>
        <Reveal>
          <h2>Built, hardened, deployed</h2>
        </Reveal>
        <Reveal>
          <p className="section-sub">Not demos — platforms with users, auth, and uptime to protect.</p>
        </Reveal>

        <div className="projects-list">
          {/* SOLMARKT */}
          <Reveal>
            <motion.article
              className="pcard"
              whileHover={hoverAnimation}
              transition={{ duration: 0.25 }}
            >
              <div className="pcover">
                <Image
                  src="/projects/solmarkt.png"
                  alt="Solmarkt marketplace dashboard"
                  fill
                  sizes="(max-width: 900px) 100vw, 500px"
                  className={`object-cover pcover-img ${shouldReduceMotion ? '' : 'hover-scale'}`}
                />
                <div className="pcover-overlay" aria-hidden="true"></div>
                <div className="pcover-badge">
                  <span>● live at solmarkt.com</span>
                </div>
              </div>
              <div className="pbody">
                <p className="pkind">B2B Marketplace · Production</p>
                <h3>Solmarkt</h3>
                <p>
                  A live B2B solar marketplace connecting Customers, EPCs, Vendors, and Installers across the full supply chain. I architected the backend: 5 user roles, 11 Firestore collections, 30+ Next.js Server Actions for bids, milestones, and order fulfillment, plus a zero-polling real-time notification system and a Firestore quota-fallback layer for free-tier resilience.
                </p>
                <div className="ptags">
                  <span>Next.js 16</span>
                  <span>React 19</span>
                  <span>TypeScript</span>
                  <span>Firestore</span>
                  <span>JWT</span>
                  <span>Tailwind 4</span>
                </div>
                <div className="plinks">
                  <a
                    className="plink primary"
                    href="https://solmarkt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site ↗
                  </a>
                  <a
                    className="plink"
                    href="https://github.com/devarshijani/solmarkt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          </Reveal>

          {/* SARTHI */}
          <Reveal>
            <motion.article
              className="pcard"
              whileHover={hoverAnimation}
              transition={{ duration: 0.25 }}
            >
              <div className="pcover">
                <Image
                  src="/projects/sarthi.png"
                  alt="Sarthi live ride-tracking screen"
                  fill
                  sizes="(max-width: 900px) 100vw, 500px"
                  className={`object-cover pcover-img ${shouldReduceMotion ? '' : 'hover-scale'}`}
                />
                <div className="pcover-overlay" aria-hidden="true"></div>
                <div className="pcover-badge">
                  <span>● captain en route — socket stream</span>
                </div>
              </div>
              <div className="pbody">
                <p className="pkind">Real-time Platform · MERN</p>
                <h3>Sarthi</h3>
                <p>
                  A ride-sharing platform with separate rider and captain workflows. JWT-authenticated Socket.io connections with per-event ownership checks, geospatial captain matching via MongoDB 2dsphere, live driver location streamed onto Leaflet maps with dynamic route polylines, 6-digit OTP ride starts with expiry + attempt lockout, and dynamic fares across auto, car, and bike — hardened with helmet, rate limiting, and env validation.
                </p>
                <div className="ptags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Socket.io</span>
                  <span>Leaflet</span>
                  <span>GSAP</span>
                </div>
                <div className="plinks">
                  <a
                    className="plink primary"
                    href="https://sarthi-pied.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo ↗
                  </a>
                  <a
                    className="plink"
                    href="https://github.com/devarshijani/sarthi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
