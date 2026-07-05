'use client';

import { motion, useReducedMotion } from 'framer-motion';
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
                <svg
                  viewBox="0 0 400 300"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Solmarkt solar panel illustration"
                >
                  <rect width="400" height="300" fill="#0E1830" />
                  <g transform="translate(310 60)">
                    <circle r="26" fill="#F5A524" />
                    <g stroke="#F5A524" strokeWidth="3" strokeLinecap="round">
                      <line y1="-38" y2="-48" />
                      <line y1="38" y2="48" />
                      <line x1="-38" x2="-48" />
                      <line x1="38" x2="48" />
                      <line x1="27" y1="-27" x2="34" y2="-34" />
                      <line x1="-27" y1="27" x2="-34" y2="34" />
                      <line x1="27" y1="27" x2="34" y2="34" />
                      <line x1="-27" y1="-27" x2="-34" y2="-34" />
                    </g>
                  </g>
                  <g transform="translate(40 130) skewX(-12)">
                    <rect width="230" height="130" rx="6" fill="#131F38" stroke="#3FD6C2" strokeOpacity=".5" />
                    <g stroke="#22304F" strokeWidth="2">
                      <line x1="0" y1="43" x2="230" y2="43" />
                      <line x1="0" y1="86" x2="230" y2="86" />
                      <line x1="57" y1="0" x2="57" y2="130" />
                      <line x1="115" y1="0" x2="115" y2="130" />
                      <line x1="172" y1="0" x2="172" y2="130" />
                    </g>
                    <rect x="115" y="43" width="57" height="43" fill="#F5A524" opacity=".25" />
                    <rect x="57" y="0" width="58" height="43" fill="#3FD6C2" opacity=".14" />
                  </g>
                  <text x="40" y="60" fontFamily="monospace" fontSize="12" fill="#93A1BD">
                    RFQ → bid → order → fulfillment
                  </text>
                  <text x="40" y="288" fontFamily="monospace" fontSize="11" fill="#3FD6C2">
                    ● live at solmarkt.com
                  </text>
                </svg>
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
                <svg
                  viewBox="0 0 400 300"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Sarthi live map illustration"
                >
                  <rect width="400" height="300" fill="#0E1830" />
                  <g stroke="#22304F" strokeWidth="1.5" opacity=".7">
                    <path d="M0 80 H400 M0 160 H400 M0 240 H400 M80 0 V300 M180 0 V300 M290 0 V300" />
                    <path d="M80 80 L180 160 M290 160 L400 240" strokeDasharray="4 6" />
                  </g>
                  <path
                    d="M60 250 C 120 250, 130 170, 200 160 S 300 110, 340 70"
                    fill="none"
                    stroke="#3FD6C2"
                    strokeWidth="3"
                    strokeDasharray="8 7"
                  />
                  <circle cx="60" cy="250" r="8" fill="#3FD6C2" />
                  <circle cx="60" cy="250" r="15" fill="none" stroke="#3FD6C2" strokeOpacity=".35" />
                  <g transform="translate(340 70)">
                    <circle r="9" fill="#F5A524" />
                    <path d="M0 -22 L6 -9 L-6 -9 Z" fill="#F5A524" />
                  </g>
                  <rect x="150" y="195" width="120" height="34" rx="8" fill="#131F38" stroke="#22304F" />
                  <text x="163" y="217" fontFamily="monospace" fontSize="12" fill="#E9EEF9">
                    OTP · 6 3 8 2 9 1
                  </text>
                  <text x="40" y="288" fontFamily="monospace" fontSize="11" fill="#3FD6C2">
                    ● captain en route — socket stream
                  </text>
                </svg>
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
