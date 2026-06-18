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

      <section className="pricing-support-section">
        <div className="container pricing-support-grid">
          <div className="pricing-support-media">
            <img src={require("./../assets/img/phone_icon1.png")} alt="AL-TRIUMPH support illustration" />
          </div>

          <div className="pricing-support-content">
            <div className="support-badge">Customer support</div>
            <h2 className="support-title">Have you a question?</h2>

            <div className="support-faqs">
              <details className="support-faq" open>
                <summary>How can AL TRIUMPH Technology help my business?</summary>
                <p>We help businesses improve efficiency, reduce manual work, and increase growth through custom software development, AI solutions, mobile apps, websites, automation, ERP systems, and digital transformation services.</p>
              </details>

              <details className="support-faq">
                <summary>What industries do you work with?</summary>
                <p>We work with startups, SMEs, enterprises, fintech companies, healthcare providers, real estate agencies, logistics companies, e-commerce businesses, and government organizations.</p>
              </details>

              <details className="support-faq">
                <summary>Can you improve or fix my existing software or website?</summary>
                <p>Yes. Our team can audit, optimize, upgrade, and maintain existing websites, mobile applications, and software systems to improve performance, security, and user experience.</p>
              </details>

                <details className="support-faq">
                <summary>How long does a project usually take?</summary>
                <p>Project timelines depend on complexity. Small websites may take 1–3 weeks, while custom software, AI platforms, or enterprise solutions can take several weeks or months. We provide a clear timeline before development begins.</p>
              </details>

                <details className="support-faq">
                <summary>Do you provide ongoing support after project completion?</summary>
                <p>Absolutely. We offer maintenance, technical support, security updates, performance monitoring, and feature enhancements to ensure your solution continues running smoothly.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Pricing;