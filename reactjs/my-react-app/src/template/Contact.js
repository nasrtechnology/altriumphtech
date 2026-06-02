
import "./contact-style.css";
const Contact = () => {
  return (
      <main>
    <section class="page-hero-section contact-hero">
      <div class="container hero-grid-simple">
        <div>
          <p class="eyebrow">Feel free to get in touch</p>
          <h1>Lets talk about your next digital project.</h1>
          <p class="hero-description">AL-TRIUMPH Technology FZ-LLC is ready to help with websites, branding, digital strategy, and business-focused solutions tailored to your goals.</p>
        </div>
      </div>
    </section>

    <section class="contact-main-section">
      <div class="container contact-layout">
        <div class="contact-info-column">
          <p class="eyebrow">Get in touch with us</p>
          <h2>Do you need help? Contact us now.</h2>

          <div class="contact-info-list">
            <article class="contact-info-card">
              <div class="contact-icon-badge">📍</div>
              <div>
                <h3>Visit our office</h3>
                <p>Dubai, United Arab Emirates<br/>Business Bay / Office Location</p>
              </div>
            </article>

            <article class="contact-info-card">
              <div class="contact-icon-badge">📞</div>
              <div>
                <h3>Call us directly</h3>
                <p>Phone: <a href="tel:+1234567890">+971-507047685</a><br/>Support: <a href="tel:+971-507047685">+971-507047685</a></p>
              </div>
            </article>

            <article class="contact-info-card">
              <div class="contact-icon-badge">✉️</div>
              <div>
                <h3>Email our team</h3>
                <p><a href="mailto:altriumph.technology@gmail.com">altriumph.technology@gmail.com</a><br/><a href="mailto:hello@altriumphtechnology.com">hello@altriumphtechnology.com</a></p>
              </div>
            </article>
          </div>
        </div>

        <div class="contact-form-column">
          <div class="contact-form-card">
            <h2>Say hello!</h2>
            <form action="#" method="post" class="custom-contact-form">
              <div class="form-row">
                <input type="text" name="name" placeholder="Enter your name*" required />
              </div>
              <div class="form-row">
                <input type="email" name="email" placeholder="Enter your email*" required />
              </div>
              <div class="form-row">
                <input type="text" name="subject" placeholder="Subject" />
              </div>
              <div class="form-row">
                <textarea name="message" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <button class="btn btn-primary form-submit-btn" type="submit">Send Message</button>
              <p class="form-note">I understand that my data will be held securely in accordance with the privacy policy.</p>
            </form>
            <div class="form-angle-shape">&lt;</div>
          </div>
        </div>
      </div>

      <div class="container social-connect-row">
        <div class="social-title-block">
          <h3>Connect with social media</h3>
        </div>
        <div class="social-divider"></div>
        <div class="social-links-large">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>

    <section class="map-section-wrapper">
      <div class="container-fluid-map">
        <div class="custom-map-card">
          <div class="map-overlay-card">
            <h3>AL-TRIUMPH Technology FZ-LLC</h3>
            <p>Dubai, United Arab Emirates</p>
            <a href="https://maps.google.com/?q=Dubai+UAE" target="_blank" rel="noopener noreferrer">View larger map</a>
          </div>
          <iframe
            title="AL-TRIUMPH location map"
            src="https://www.google.com/maps?q=Dubai%2C%20UAE&z=12&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
      </main>
  );
};

export default Contact;