'use client';

import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Where I've worked</p>
        </Reveal>
        <Reveal>
          <h2>Experience</h2>
        </Reveal>
        <Reveal>
          <p className="section-sub">
            My professional journey in building, hardening, and scaling software systems.
          </p>
        </Reveal>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          <div className="timeline-items">
            {/* Entry 1 */}
            <Reveal>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-header">
                  <div className="timeline-title-group">
                    <span className="timeline-company">Mirani Marketing, Surat</span>
                    <h3 className="timeline-role">Full-Stack Developer Intern</h3>
                  </div>
                  <span className="timeline-date">May 2026 – Jun 2026</span>
                </div>
                <ul className="timeline-bullets">
                  <li>
                    Built Solmarkt, a production B2B solar marketplace deployed at{' '}
                    <a
                      href="https://solmarkt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-link"
                    >
                      solmarkt.com
                    </a>
                    ;
                  </li>
                  <li>
                    Engineered the backend with Next.js 16 Server Actions and Firebase Admin SDK — multi-role JWT auth, OTP verification, password reset via Nodemailer;
                  </li>
                  <li>
                    Designed 11 Firestore collections and a zero-polling real-time notification system.
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Entry 2 */}
            <Reveal>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-header">
                  <div className="timeline-title-group">
                    <span className="timeline-company">Webito Infotech, Surat</span>
                    <h3 className="timeline-role">Node.js Developer Intern</h3>
                  </div>
                  <span className="timeline-date">Dec 2025 – Feb 2026</span>
                </div>
                <ul className="timeline-bullets">
                  <li>
                    Built a production backend processing 500+ API requests daily at 99.5% uptime;
                  </li>
                  <li>
                    Created and validated 15+ REST endpoints with comprehensive error handling;
                  </li>
                  <li>
                    Optimized query performance ~25% through schema design;
                  </li>
                  <li>
                    collaborated with 5+ senior engineers on CI/CD.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
