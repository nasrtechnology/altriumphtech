import "./team-style.css";

const Team = () => {
  
  return (
   
  <main>
    <section class="page-hero">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow">Expert Dedicated People</p>
          <h1>The people behind AL-TRIUMPH’s digital excellence.</h1>
          <p class="lead">Our team combines leadership, technical skill, creative thinking, and business understanding to deliver strong digital experiences for modern companies.</p>
        </div>
        <div class="hero-logo-card">
          <img  src={require("./../assets/img/al-triumph_logo.png")} alt="AL-TRIUMPH logo"/>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container intro-grid">
        <div>
          <h2>We have strong skills for modern business solutions.</h2>
        </div>
        <div class="progress-wrap">
          <div class="progress-item">
            <div class="progress-head">
              <span>Value for results</span>
              <strong>90%</strong>
            </div>
            <div class="progress-bar"><div class="progress-fill w-90"></div></div>
          </div>
          <div class="progress-item">
            <div class="progress-head">
              <span>Global experience</span>
              <strong>95%</strong>
            </div>
            <div class="progress-bar"><div class="progress-fill w-95"></div></div>
          </div>
        </div>
      </div>

      <div class="container team-grid">
        <article class="team-card">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80" alt="Jeremy Dupont"/>
          <div class="team-info">
            <h3>Jeremy Dupont</h3>
            <p>Executive Officer</p>
            <div class="social-links"><a href="#">Fb.</a><a href="#">In.</a><a href="#">Tw.</a><a href="#">Dr.</a></div>
          </div>
        </article>

        <article class="team-card">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80" alt="Jessica Dover"/>
          <div class="team-info">
            <h3>Jessica Dover</h3>
            <p>Vice President</p>
            <div class="social-links"><a href="#">Fb.</a><a href="#">In.</a><a href="#">Tw.</a><a href="#">Dr.</a></div>
          </div>
        </article>

        <article class="team-card">
          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80" alt="Matthew Taylor"/>
          <div class="team-info">
            <h3>Matthew Taylor</h3>
            <p>Financial Officer</p>
            <div class="social-links"><a href="#">Fb.</a><a href="#">In.</a><a href="#">Tw.</a><a href="#">Dr.</a></div>
          </div>
        </article>

        <article class="team-card">
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80" alt="Daniel James"/>
          <div class="team-info">
            <h3>Daniel James</h3>
            <p>People Officer</p>
            <div class="social-links"><a href="#">Fb.</a><a href="#">In.</a><a href="#">Tw.</a><a href="#">Dr.</a></div>
          </div>
        </article>

        <article class="team-card">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80" alt="Michal Ruheen"/>
          <div class="team-info">
            <h3>Michal Ruheen</h3>
            <p>Financial Officer</p>
            <div class="social-links"><a href="#">Fb.</a><a href="#">In.</a><a href="#">Tw.</a><a href="#">Dr.</a></div>
          </div>
        </article>

        <article class="team-card">
          <img src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=900&q=80" alt="Jeremy Smith"/>
          <div class="team-info">
            <h3>Jeremy Smith</h3>
            <p>Marketing Executive</p>
            <div class="social-links"><a href="#">Fb.</a><a href="#">In.</a><a href="#">Tw.</a><a href="#">Dr.</a></div>
          </div>
        </article>

        <article class="team-card">
          <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80" alt="Herman Miller"/>
          <div class="team-info">
            <h3>Herman Miller</h3>
            <p>Marketing Officer</p>
            <div class="social-links"><a href="#">Fb.</a><a href="#">In.</a><a href="#">Tw.</a><a href="#">Dr.</a></div>
          </div>
        </article>

        <article class="team-card">
          <img src="https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80" alt="Bryan Johnson"/>
          <div class="team-info">
            <h3>Bryan Johnson</h3>
            <p>Marketing Executive</p>
            <div class="social-links"><a href="#">Fb.</a><a href="#">In.</a><a href="#">Tw.</a><a href="#">Dr.</a></div>
          </div>
        </article>
      </div>
    </section>

    <section class="section light-section">
      <div class="container cta-box">
        <div>
          <p class="eyebrow">Work With Our Team</p>
          <h2>Let’s build stronger digital solutions together.</h2>
          <p>Our dedicated team is ready to support your brand with strategy, design, development, and business-focused execution.</p>
        </div>
        <div class="cta-panel">
          <p>Interested in working with us?</p>
          <a href="mailto:altriumph.technology@gmail.com">altriumph.technology@gmail.com</a>
        </div>
      </div>
    </section>
  </main>
  );
};

export default Team;