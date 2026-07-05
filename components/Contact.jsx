'use client';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fname = (formData.get('fname') || '').trim();
    const lname = (formData.get('lname') || '').trim();
    const femail = (formData.get('femail') || '').trim();
    const fsubject = (formData.get('fsubject') || '').trim();
    const fmsg = (formData.get('fmsg') || '').trim();

    const subject = encodeURIComponent(fsubject || 'Hello from your portfolio');
    const body = encodeURIComponent(
      `Hi Devarshi,\n\n${fmsg}\n\n— ${fname} ${lname}\n${femail}`
    );
    window.location.href = `mailto:janidevarshi8@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact">
      <div className="wrap">
        <p className="eyebrow reveal">Get in touch</p>
        <h2 className="reveal">Let&apos;s build something that ships</h2>
        <p className="section-sub reveal">
          Open to internships, freelance work, and interesting problems. I reply fast.
        </p>

        <div className="contact-grid">
          <div className="reveal">
            <div className="cinfo-item">
              <span className="cicon">
                <svg viewBox="0 0 24 24">
                  <path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm10 8.35L3.6 6h16.8L12 12.35ZM3 8.24V18h18V8.24l-9 6.53-9-6.53Z" />
                </svg>
              </span>
              <div>
                <small>Email</small>
                <a href="mailto:janidevarshi8@gmail.com">janidevarshi8@gmail.com</a>
              </div>
            </div>
            <div className="cinfo-item">
              <span className="cicon">
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>
              </span>
              <div>
                <small>Phone</small>
                <a href="tel:+919106884503">+91 91068 84503</a>
              </div>
            </div>
            <div className="cinfo-item">
              <span className="cicon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 9.5A2.5 2.5 0 1 0 12 6.5a2.5 2.5 0 0 0 0 5Z" />
                </svg>
              </span>
              <div>
                <small>Location</small>
                <p>Surat, Gujarat, India</p>
              </div>
            </div>
            <p className="contact-note">
              Whether it&apos;s a role, a project, or a question about how something on this page was built — my inbox is open.
            </p>
          </div>

          <form id="contactForm" className="reveal" onSubmit={handleSubmit}>
            <div className="frow">
              <div className="fgroup">
                <label htmlFor="fname">First name</label>
                <input id="fname" name="fname" type="text" required />
              </div>
              <div className="fgroup">
                <label htmlFor="lname">Last name</label>
                <input id="lname" name="lname" type="text" />
              </div>
            </div>
            <div className="fgroup">
              <label htmlFor="femail">Your email</label>
              <input id="femail" name="femail" type="email" required />
            </div>
            <div className="fgroup">
              <label htmlFor="fsubject">Subject</label>
              <input id="fsubject" name="fsubject" type="text" required />
            </div>
            <div className="fgroup">
              <label htmlFor="fmsg">Message</label>
              <textarea id="fmsg" name="fmsg" required></textarea>
            </div>
            <button className="btn btn-amber" type="submit">
              Send message
            </button>
            <p className="form-hint">Opens your email app with the message pre-filled.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
