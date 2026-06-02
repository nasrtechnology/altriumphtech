import "./projects.css";

const Projects = () => {
  
  return (
   
   <main>
    <section class="page-hero-section case-hero">
      <div class="container hero-grid-simple">
        <div>
          <p class="eyebrow">Digital Marketing Agency</p>
          <h1>Case studies that show real creative and business impact.</h1>
          <p class="hero-description">Explore selected AL-TRIUMPH projects across branding, digital platforms, e-commerce, and web experiences designed to help businesses grow with confidence.</p>
        </div>
      </div>
    </section>

    <section class="case-studies-section">
      <div class="container">
        <div class="filter-row">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="selected">Selected</button>
          <button class="filter-btn" data-filter="digital">Digital</button>
          <button class="filter-btn" data-filter="branding">Branding</button>
          <button class="filter-btn" data-filter="web">Web</button>
        </div>

        <div class="case-grid">
          <article class="case-card selected digital">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" alt="Tailoring Inteo project"/>
            <div class="case-content">
              <h3>Tailoring Inteo</h3>
              <p>Branding</p>
            </div>
          </article>

          <article class="case-card web branding">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" alt="Design Blast project"/>
            <div class="case-content">
              <h3>Design Blast</h3>
              <p>Photography</p>
            </div>
          </article>

          <article class="case-card web selected digital branding">
            <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80" alt="Herbal Beauty project"/>
            <div class="case-content">
              <h3>Herbal Beauty</h3>
              <p>Application</p>
            </div>
          </article>

          <article class="case-card web selected digital">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" alt="Cropo Identity project"/>
            <div class="case-content">
              <h3>Cropo Identity</h3>
              <p>Packaging</p>
            </div>
          </article>

          <article class="case-card web branding selected">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" alt="Harddot Stone project"/>
            <div class="case-content">
              <h3>Harddot Stone</h3>
              <p>Graphics</p>
            </div>
          </article>

          <article class="case-card web selected digital branding">
            <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80" alt="Violator Series project"/>
            <div class="case-content">
              <h3>Violator Series</h3>
              <p>Digital</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>

  );
};

export default Projects;