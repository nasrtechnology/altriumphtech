import React from "react";
import "./contact-style.css";

const Contact = () => {
  return (
    <main>
      <section className="page-hero-section contact-hero">
        <div className="container hero-grid-simple">
          <div>
            <p className="eyebrow">Feel free to get in touch</p>
            <h1>
              {/* <span className="hero-icon" aria-hidden>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.6 5.3L20 9.1l-4 3.9.95 6.2L12 17.9 7.05 19.2 8 13l-4-3.9 5.4-1.8L12 2z" fill="#f96f4a"/></svg>
              </span> */}
              Let's talk about your next digital project.
            </h1>
            <p className="hero-description">AL-TRIUMPH Technology FZ-LLC partners on strategy, websites, e‑commerce, SaaS integrations, digital marketing and enterprise transformation we build measurable outcomes.</p>
          </div>
        </div>
      </section>

      

      <section className="contact-main-section">
        <div className="container contact-layout">
          <div className="contact-info-column">
            <p className="eyebrow">Get in touch with us</p>
            <h2>Do you need help? Contact us now.</h2>

            <div className="contact-info-list">
              <article className="contact-info-card">
                <div className="contact-icon-badge">📍</div>
                <div>
                  <h3>Visit our office</h3>
                  <p>Dubai, United Arab Emirates<br/>Business Village Block B is 3C Street, Port Saeed, Deira, Dubai </p>
                </div>
              </article>

              <article className="contact-info-card">
                <div className="contact-icon-badge">📞</div>
                <div>
                  <h3>Call us directly</h3>
                  <p>Phone: <a href="tel:+1234567890">+971 50 704 7685</a><br/>Support: <a href="tel:+971-507047685">+91 8750311016</a></p>
                </div>
              </article>

              <article className="contact-info-card">
                <div className="contact-icon-badge">✉️</div>
                <div>
                  <h3>Email our team</h3>
                  <p><a href="mailto:altriumph.technology@gmail.com">altriumph.technology@gmail.com</a></p>
                </div>
              </article>
            </div>
          </div>

          <div className="contact-form-column">
            <div className="contact-form-card">
              <h2>Say hello!</h2>
              <form action="#" method="post" className="custom-contact-form">
                <div className="form-row">
                  <input type="text" name="name" placeholder="Enter your name*" required />
                </div>
                <div className="form-row">
                  <input type="email" name="email" placeholder="Enter your email*" required />
                </div>
                <div className="form-row">
                  <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div className="form-row">
                  <select name="projectType" aria-label="Project type">
                    <option value="">Project type (select)</option>
                    <option value="website">Website / Web App</option>
                    <option value="ecommerce">E‑commerce</option>
                    <option value="saas">SaaS / Platform</option>
                    <option value="brand">Brand & Marketing</option>
                    <option value="integration">Integrations / API</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-row">
                  <input type="text" name="budget" placeholder="Estimated budget (AED) optional" />
                </div>
                <div className="form-row">
                  <label className="file-label">Attach brief (optional)
                    <input type="file" name="attachment" className="file-input" />
                  </label>
                </div>
                <div className="form-row">
                  <textarea name="message" rows="5" placeholder="Enter your message"></textarea>
                </div>
                <button className="btn btn-primary form-submit-btn" type="submit">Send Message</button>
                {/* <p className="form-note">I understand that my data will be held securely in accordance with the privacy policy.</p>
                <div className="contact-tips">
                  <strong>Tip:</strong> Mention your desired launch date, target audience and any references. If you have a brief, attach it to help us respond faster.
                </div> */}
              </form>
              <div className="form-angle-shape">&lt;</div>
            </div>
          </div>
        </div>

        <div className="container social-connect-row">
          <div className="social-title-block">
            <h3>Connect with social media</h3>
          </div>
          <div className="social-divider"></div>
          <div className="social-links-large">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/altriumph.technology?igsh=MTV0MHJiaGlnNzhieQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://ae.linkedin.com/company/al-triumph-technology/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      <section className="what-we-do-section">
        <div className="container">
          <p className="eyebrow">What we do</p>
          <h2>Typical projects we deliver</h2>
          <div className="what-grid">
            <article className="what-card">
              {/* <div className="what-icon">🔧</div> */}
              <div>
                <h4>Product & Platform Builds</h4>
                <p>We design and ship web applications and internal platforms that grow with your business fast, secure, and focused on clear user outcomes.</p>
              </div>
            </article>

            <article className="what-card">
              {/* <div className="what-icon">🛒</div> */}
              <div>
                <h4>E‑commerce & Marketplaces</h4>
                <p>Conversion-first stores and marketplaces with seamless checkout, payment integrations and operations-friendly workflows.</p>
              </div>
            </article>

            <article className="what-card">
              {/* <div className="what-icon">💡</div> */}
              <div>
                <h4>Brand & Growth</h4>
                <p>Distinct positioning, messaging and growth programs that turn visitors into customers and measurable marketing wins.</p>
              </div>
            </article>

            <article className="what-card">
              {/* <div className="what-icon">🔐</div> */}
              <div>
                <h4>Compliance & Integrations</h4>
                <p>We handle UAE billing & VAT, plus integrations to ERP, CRM and payment gateways so procurement and compliance are predictable.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="map-section-wrapper">
        <div className="container-fluid-map">
          <div className="custom-map-card">
            <div className="map-overlay-card">
              <h3>AL-TRIUMPH Technology FZ-LLC</h3>
              <p>Dubai, United Arab Emirates</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Business+Village+Block+B%2C+Port+Saeed%2C+Deira%2C+Dubai" target="_blank" rel="noopener noreferrer">View larger map</a>
            </div>
            <iframe
              title="AL-TRIUMPH location map"
              src="https://www.google.com/maps?q=Business+Village+Block+B,+Port+Saeed,+Deira,+Dubai&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
