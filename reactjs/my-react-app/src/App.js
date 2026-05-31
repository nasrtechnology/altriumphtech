import logo from './logo.svg';
import './App.css';
import new_logo from "./assets/img/new_logo.png";
import './company-style.css';
import "./assets/css/icon.min.css";
import "./assets/css/navbar.css";
import Header from "./template/Header";


function App() {
  return (
    <div className="">
       <Header/>
  <main>
    <section class="page-hero">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow">Digital Technology Company</p>
          <h1>Helping businesses move forward with confidence.</h1>
          <p class="lead">
            AL-TRIUMPH Technology FZ-LLC delivers modern digital support through strategy,
            branding, web solutions, and long-term business partnership.
          </p>
        </div>

        <div class="hero-logo-card hero-image-card">
          <img src={require("./assets/img/final_home_img.png")} alt="AL-TRIUMPH business team hero image"/>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container intro-grid">
        <div>
          <span class="tag">Welcome to AL-TRIUMPH</span>
          <h2>Guiding your business to achieve success.</h2>
        </div>
        <div>
          <p>We build strong digital foundations for companies that want modern presentation, better online visibility, and a reliable technology partner. Our focus is on practical execution, clear communication, and long-term value.</p>
        </div>
      </div>

      <div class="container card-grid four-grid">
        <article class="info-card">
          <div class="icon-box">01</div>
          <h3>Trusted company</h3>
          <p>We work with a reliable process that emphasizes transparency, quality, and business-focused delivery.</p>
        </article>
        <article class="info-card">
          <div class="icon-box">02</div>
          <h3>Professional work</h3>
          <p>Every solution is designed to look premium, function smoothly, and support measurable growth.</p>
        </article>
        <article class="info-card">
          <div class="icon-box">03</div>
          <h3>Results driven</h3>
          <p>We combine strategy and execution so digital work contributes directly to business performance.</p>
        </article>
        <article class="info-card">
          <div class="icon-box">04</div>
          <h3>Support anytime</h3>
          <p>Our team is committed to dependable communication and ongoing support whenever it matters.</p>
        </article>
      </div>

      <div class="container quality-bar">
        <p><strong>We provide quality technology and digital services</strong> for businesses that want to grow with clarity and confidence.</p>
      </div>
    </section>

    <section class="section light-section">
      <div class="container tabs-section">
        <div class="tab-buttons">
          <button class="tab-btn active" data-tab="benefits">Company benefits</button>
          <button class="tab-btn" data-tab="analysis">Competitive analysis</button>
          <button class="tab-btn" data-tab="experience">Trusted experience</button>
          <button class="tab-btn" data-tab="partners">Global partners</button>
        </div>

        <div class="tab-content active" id="benefits">
          <div class="tab-grid">
            <div class="image-card">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="Business collaboration"/>
            </div>
            <div class="content-card">
              <p class="eyebrow">About company benefits</p>
              <h2>Strong support through practical technology.</h2>
              <p>We help businesses create better systems, modern interfaces, and stronger customer trust through focused design and digital execution.</p>
              <div class="highlight-box">Strategic communication and business-focused planning.</div>
              <p class="small-note">Build with a partner that values long-term business growth.</p>
              <div class="button-row">
                <a href="services.html" class="btn btn-primary">Explore Services</a>
                <a href="contact.html" class="btn btn-outline">Quick Contact</a>
              </div>
            </div>
          </div>
        </div>

        <div class="tab-content" id="analysis">
          <div class="tab-grid">
            <div class="image-card">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80" alt="Business planning analysis"/>
            </div>
            <div class="content-card">
              <p class="eyebrow">Competitive analysis</p>
              <h2>Effective solutions for growing businesses.</h2>
              <p>We review market positioning, customer expectations, and digital opportunities to help businesses make more informed strategic choices.</p>
              <div class="highlight-box">Business transformation supported by research and clarity.</div>
              <p class="small-note">Every recommendation is shaped around business impact and practical implementation.</p>
              <div class="button-row">
                <a href="services.html" class="btn btn-primary">Explore Services</a>
                <a href="contact.html" class="btn btn-outline">Quick Contact</a>
              </div>
            </div>
          </div>
        </div>

        <div class="tab-content" id="experience">
          <div class="tab-grid">
            <div class="image-card">
              <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80" alt="Trusted company teamwork"/>
            </div>
            <div class="content-card">
              <p class="eyebrow">Trusted experience</p>
              <h2>Built on dependable project delivery.</h2>
              <p>Our experience comes from blending creative execution with structured planning, allowing us to deliver digital work that feels polished and reliable.</p>
              <div class="highlight-box">Competitor insight and practical digital experience combined.</div>
              <p class="small-note">We focus on dependable collaboration from first discussion to final delivery.</p>
              <div class="button-row">
                <a href="services.html" class="btn btn-primary">Explore Services</a>
                <a href="contact.html" class="btn btn-outline">Quick Contact</a>
              </div>
            </div>
          </div>
        </div>

        <div class="tab-content" id="partners">
          <div class="tab-grid">
            <div class="image-card">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Global partnership meeting"/>
            </div>
            <div class="content-card">
              <p class="eyebrow">Global partners</p>
              <h2>Collaboration that supports business expansion.</h2>
              <p>We believe strong partnerships help businesses scale faster, communicate better, and launch digital initiatives with more confidence.</p>
              <div class="highlight-box">Growth partnerships with technology and strategy at the center.</div>
              <p class="small-note">Our goal is to become a long-term digital partner, not just a one-time vendor.</p>
              <div class="button-row">
                <a href="services.html" class="btn btn-primary">Explore Services</a>
                <a href="contact.html" class="btn btn-outline">Quick Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split-head">
        <div>
          <h2>Our company journey is built on steady progress.</h2>
        </div>
        <div>
          <p>We continue to improve our structure, refine our services, and expand our ability to support businesses with reliable digital solutions and stronger creative execution.</p>
        </div>
      </div>

      <div class="container timeline-grid">
        <article class="timeline-card">
          <h3>2004</h3>
          <div class="dot-line"></div>
          <h4>Foundation</h4>
          <p>The business vision begins with a focus on quality service and long-term value.</p>
        </article>
        <article class="timeline-card">
          <h3>2010</h3>
          <div class="dot-line"></div>
          <h4>Team growth</h4>
          <p>Capabilities expand through broader support, stronger execution, and better collaboration.</p>
        </article>
        <article class="timeline-card">
          <h3>2016</h3>
          <div class="dot-line"></div>
          <h4>Operational scale</h4>
          <p>Processes mature to support more complex digital work and larger business needs.</p>
        </article>
        <article class="timeline-card">
          <h3>2020</h3>
          <div class="dot-line"></div>
          <h4>Recognition</h4>
          <p>The company earns stronger trust through consistent project quality and client satisfaction.</p>
        </article>
      </div>
    </section>

    <section class="section light-section">
      <div class="marquee-strip">
        <div class="marquee-track">
          <span>thinking</span>
          <span>amazing</span>
          <span>dedication</span>
          <span>innovation</span>
          <span>strategy</span>
          <span>thinking</span>
          <span>amazing</span>
          <span>dedication</span>
        </div>
      </div>

      <div class="container split-head staff-head">
        <div>
          <h2>Committed people are ready to support your business.</h2>
        </div>
        <div>
          <p>We value strong teamwork, clear communication, and practical problem solving that helps businesses move with more certainty and speed.</p>
        </div>
      </div>

      <div class="container card-grid three-grid">
        <article class="action-card">
          <h3>Build a stronger digital future with AL-TRIUMPH.</h3>
          <a href="contact.html" class="btn btn-primary">Join With Us</a>
        </article>
        <article class="action-card accent-card">
          <h3>Ready to work together for better business solutions.</h3>
          <a href="contact.html" class="btn btn-dark">View Opportunities</a>
        </article>
        <article class="action-card">
          <h3>Connect with our team for your next project.</h3>
          <a href="contact.html" class="btn btn-primary">Contact Now</a>
        </article>
      </div>

      <div class="container partners-grid">
        <div class="partner-pill">Technology Partners</div>
        <div class="partner-pill">Business Solutions</div>
        <div class="partner-pill">Digital Services</div>
        <div class="partner-pill">Growth Support</div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container cta-strip">
      <div>
        <h3>Let’s talk about how we can transform your business.</h3>
      </div>
      <div>
        <p>Interested in working?</p>
        <a href="mailto:altriumph.technology@gmail.com">altriumph.technology@gmail.com</a>
      </div>
    </div>

    <div class="container footer-grid">
      <div>
        <div class="footer-brand">
          <img src={new_logo} alt="AL-TRIUMPH logo"/>
          <div>
            <span>AL-TRIUMPH</span>
            <span>Technology</span>
          </div>
        </div>
        <p>Modern digital solutions, branding, and business support for companies that want to grow with confidence.</p>
      </div>

      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4>Contact</h4>
        <ul>
          <li>Dubai, UAE</li>
          <li><a href="tel:+1234567890">+971 507047685</a></li>
          <li><a href="mailto:altriumph.technology@gmail.com">altriumph.technology@gmail.com</a></li>
        </ul>
      </div>

      <div>
        <h4>Newsletter</h4>
        <form class="newsletter-form">
          <input type="email" placeholder="Enter your email"/>
          <button type="submit">Submit</button>
        </form>
        <p class="privacy-note">Protecting your privacy.</p>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>© 2026 AL-TRIUMPH Technology FZ-LLC. All rights reserved.</p>
    </div>
  </footer>
     
    </div>
  );
}

export default App;
