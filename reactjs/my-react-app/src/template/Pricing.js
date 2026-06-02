import "./pricing-style.css";

const Pricing = () => {
  
  return (
    <main>
    <section class="page-hero-section pricing-hero">
      <div class="container hero-grid-simple">
        <div>
          <p class="eyebrow">Simple pricing for everyone</p>
          <h1>Flexible pricing for every stage of business growth.</h1>
          <p class="hero-description">Choose a package that matches your current needs, with scalable solutions for startups, growing brands, and established businesses.</p>
        </div>
      </div>
    </section>

    <section class="pricing-benefits-section">
      <div class="container benefit-grid">
        <article class="benefit-card">
          <div class="benefit-icon">🔒</div>
          <div>
            <h3>Secure payments</h3>
            <p>Simple and reliable payment structure designed for trust and clarity.</p>
          </div>
        </article>
        <article class="benefit-card">
          <div class="benefit-icon">😊</div>
          <div>
            <h3>Customer satisfaction</h3>
            <p>Every plan is built to deliver value, support, and measurable results.</p>
          </div>
        </article>
        <article class="benefit-card">
          <div class="benefit-icon">🛡️</div>
          <div>
            <h3>Money back guarantee</h3>
            <p>Confident service backed by transparent communication and quality work.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="pricing-table-section">
      <div class="container pricing-grid">
        <article class="pricing-card">
          <div class="plan-label">Standard</div>
          <h2 class="price"><sup>$</sup>250</h2>
          <p class="plan-desc">A great starting package for businesses that need a professional online presence.</p>
          <a href="contact.html" class="btn btn-dark">Choose Package</a>
          <span class="billing-note">Monthly billing</span>
          <ul class="plan-features">
            <li>Marketing strategy</li>
            <li class="muted">Competitive work analysis</li>
            <li class="muted">Social media share audit</li>
          </ul>
          <a href="contact.html" class="trial-link">Get your 30 day free trial</a>
        </article>

        <article class="pricing-card featured">
          <div class="plan-label">Business</div>
          <h2 class="price"><sup>$</sup>350</h2>
          <p class="plan-desc">Built for growing companies that need stronger brand support and marketing execution.</p>
          <a href="contact.html" class="btn btn-primary">Choose Package</a>
          <span class="billing-note">Monthly billing</span>
          <ul class="plan-features">
            <li>Marketing strategy</li>
            <li>Competitive work analysis</li>
            <li class="muted">Social media share audit</li>
          </ul>
          <a href="contact.html" class="trial-link">Get your 30 day free trial</a>
        </article>

        <article class="pricing-card">
          <div class="plan-label">Ultimate</div>
          <h2 class="price"><sup>$</sup>450</h2>
          <p class="plan-desc">A complete package for advanced brands that want deeper digital support and better performance.</p>
          <a href="contact.html" class="btn btn-dark">Choose Package</a>
          <span class="billing-note">Monthly billing</span>
          <ul class="plan-features">
            <li>Marketing strategy</li>
            <li>Competitive work analysis</li>
            <li>Social media share audit</li>
          </ul>
          <a href="contact.html" class="trial-link">Get your 30 day free trial</a>
        </article>
      </div>
    </section>

    <section class="review-highlight-section">
      <div class="container customer-row">
        <div class="customer-text text-right">
          <h3>25,000+ Happy customers</h3>
        </div>
        <div class="customer-badge">
          <div class="badge-circle">★</div>
        </div>
        <div class="customer-text text-left">
          <div class="star-line">★★★★★</div>
          <h3><span>2,488</span> Rating</h3>
        </div>
      </div>

      <div class="container review-grid">
        <article class="review-card">
          <div class="review-body">
            <div class="review-avatar">HM</div>
            <p>AL-TRIUMPH worked closely with us and consistently delivered solutions aligned with our business requirements and expectations.</p>
          </div>
          <div class="review-footer">
            <span>Herman Miller, Client</span>
            <div class="review-stars">★★★★★</div>
          </div>
        </article>

        <article class="review-card">
          <div class="review-body">
            <div class="review-avatar">MT</div>
            <p>They provided excellent service quality and strong communication throughout the project. We were very satisfied with the results.</p>
          </div>
          <div class="review-footer">
            <span>Matthew Taylor, Client</span>
            <div class="review-stars">★★★★★</div>
          </div>
        </article>
      </div>

      <div class="container bottom-cta-note">
        <span class="pill-note">Hurray</span>
        <p>Let’s make something great work together. <a href="contact.html">Got a project in mind?</a></p>
      </div>
    </section>
  </main>
  );
};

export default Pricing;