export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <p className="eyebrow reveal">About me</p>
        <h2 className="reveal">Logic-first builder, production-first mindset</h2>
        <p className="section-sub reveal">
          I&apos;m a full-stack developer who measures work by one thing: does it run reliably for real users?
        </p>

        <div className="about-grid">
          <div className="about-journey reveal">
            <h3>My journey</h3>
            <p>
              I&apos;m pursuing a B.Tech in <strong>Artificial Intelligence &amp; Data Science</strong> at A.D. Patel Institute of Technology (&apos;27), but most of my learning happens in production. As a full-stack intern I architected the backend of <strong>Solmarkt</strong> — a live B2B solar marketplace with 5 user roles, 11 Firestore collections, and 30+ server actions covering everything from RFQs to order fulfillment.
            </p>
            <p>
              Before that I built <strong>Sarthi</strong>, a real-time ride-sharing platform: JWT-authenticated sockets, geospatial captain matching with MongoDB 2dsphere, live location streaming onto Leaflet maps, and OTP-secured ride starts with expiry and lockout. I care about the unglamorous parts — auth, rate limiting, error handling — because that&apos;s what production means.
            </p>
            <p>
              Outside code: <strong>NCC Army Attachment Training</strong> at Jamnagar military base taught me discipline and how to function in a team under pressure.
            </p>
            <div className="chips">
              <span className="chip">Next.js</span>
              <span className="chip">React</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Node.js</span>
              <span className="chip">MongoDB</span>
              <span className="chip">Firestore</span>
              <span className="chip">Socket.io</span>
              <span className="chip">Tailwind</span>
            </div>
          </div>

          <div className="value-cards">
            <div className="vcard reveal">
              <h4><span>◆</span>Production first</h4>
              <p>Two platforms deployed and serving real users. I design for the day after launch — security, fallbacks, and monitoring included.</p>
            </div>
            <div className="vcard reveal">
              <h4><span>◆</span>Real-time systems</h4>
              <p>Authenticated sockets, live location streams, zero-polling notifications — I build things that update the moment the world does.</p>
            </div>
            <div className="vcard reveal">
              <h4><span>◆</span>Clean architecture</h4>
              <p>Role-based auth, service layers, validated environments, consistent APIs. Code a teammate can pick up without a tour guide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
