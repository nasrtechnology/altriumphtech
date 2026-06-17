import "./pricing-style.css";
import React from "react";

const VAT_RATE = 0.05; // 5% VAT in UAE

const plans = [
  {
    id: "basic",
    name: "Basic",
    priceAED: 2500,
    features: ["Brand strategy", "Landing page", "3 social posts / week"],
  },
  {
    id: "pro",
    name: "Pro",
    priceAED: 5000,
    featured: true,
    features: ["Everything in Basic", "Digital Strategy", "Marketing Analytics", "Dedicated PM"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceAED: 12000,
    features: ["Full transformation", "Custom integrations", "Global rollout", "SLA & Support"],
  },
];

const fmtAED = (value) =>
  new Intl.NumberFormat("en-AE", { style: "currency", currency: "AED", maximumFractionDigits: 0 }).format(value);

const Pricing = () => {
  return (
    <main>
      <section className="page-hero-section pricing-hero">
        <div className="container hero-grid-simple">
          <div>
            <p className="eyebrow">Transparent UAE Pricing</p>
            <h1>Simple, predictable pricing AED, VAT included</h1>
            <p className="hero-description">Choose the service tier that fits your growth stage. Prices show exclusive VAT and inclusive VAT for clarity.</p>
          </div>
        </div>
      </section>

      <section className="pricing-table-section">
        <div className="container pricing-grid">
          {plans.map((plan) => {
            const vatAmount = Math.round(plan.priceAED * VAT_RATE);
            const total = Math.round(plan.priceAED + vatAmount);
            return (
              <article
                key={plan.id}
                className={`pricing-card ${plan.featured ? "featured" : ""}`}
                aria-labelledby={`plan-${plan.id}-title`}
              >
                {plan.featured && <div className="most-popular">Most Popular</div>}
                <div className="plan-label">{plan.name}</div>

                <div className="card-main">
                  <div className="price-block">
                    <div className="price">
                      <span className="currency">AED</span>
                      <span className="amount">{fmtAED(plan.priceAED).replace("AED", "").trim()}</span>
                    </div>
                    <div className="vat-note">+ VAT (5%): {fmtAED(vatAmount)}</div>
                    <div className="total">Total incl. VAT: <strong>{fmtAED(total)}</strong></div>
                  </div>

                  <p className="plan-desc">{plan.name === "Basic" ? "Ideal for startups and pilot projects." : plan.name === "Pro" ? "Growing teams that need measurable growth." : "Enterprise-level programs and global rollouts."}</p>

                  <ul className="plan-features">
                    {plan.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="pricing-actions">
                    <button className={`btn ${plan.featured ? "btn-primary" : "btn-dark"}`} aria-label={`Select ${plan.name}`}>
                      Select {plan.name}
                    </button>
                    <a href="/projects" className="link-underline">See related projects</a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      

      {/* <section className="pricing-benefits-section">
        <div className="container benefit-grid">
          <article className="benefit-card">
            <div className="benefit-icon" aria-hidden>
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L20 6v6c0 5-4 9-8 10-4-1-8-5-8-10V6l8-4z" stroke="#1f242e" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round"/></svg>
            </div>
            <div>
              <h3 className="benefit-title">Services you recognize</h3>
              <p className="benefit-desc">Strategy, Digital Platforms, Legal Tech, Operations — the same capabilities you saw in our case studies.</p>
              <ul className="benefit-list">
                <li>Strategy & Consulting</li>
                <li>Digital Transformation</li>
                <li>Legal & Compliance Advisory</li>
                <li>Operations & Supply Chain</li>
              </ul>
            </div>
          </article>

          <article className="benefit-card">
            <div className="benefit-icon" aria-hidden>
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h3l3 6 9-12h3" stroke="#1f242e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <h3 className="benefit-title">Fast delivery</h3>
              <p className="benefit-desc">Clear timelines, milestone-based delivery, and defined KPIs so you can measure impact fast.</p>
              <div className="benefit-meta">
                <div><strong>Typical timelines:</strong> 6-10 weeks (pilot)</div>
                <div><strong>Onboarding:</strong> 7 days</div>
              </div>
            </div>
          </article>

          <article className="benefit-card">
            <div className="benefit-icon" aria-hidden>
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v6l4 2v6l-4 4-4-4v-6l4-2V2z" stroke="#1f242e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <h3 className="benefit-title">Local UAE compliance</h3>
              <p className="benefit-desc">Local billing, VAT-aware contracts, and MENA-friendly documentation to keep procurement straightforward.</p>
              <div className="benefit-meta">
                <div><strong>VAT:</strong> 5% calculated on each invoice</div>
                <div><strong>Invoicing:</strong> AED invoices with full breakdown</div>
              </div>
            </div>
          </article>
        </div>
      </section> */}
      
    </main>
  );
};

export default Pricing;