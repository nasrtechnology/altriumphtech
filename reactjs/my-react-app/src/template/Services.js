import managementConsultant from "./../assets/img/management-consultant.jpg";
import seo from "./../assets/img/seo.jpeg";
import marketing from "./../assets/img/management-consultant2.jpeg";

const Services = () => {

    return (
        <main>
      
    

    <section class="section light-section">
      <div class="container tabs-section">

        <div class="tab-content active" id="benefits">
          <div class="tab-grid">
            <div class="image-card">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="Business collaboration"/>
            </div>
            <div class="content-card">
              <h2>Software Services</h2>
              <p>We help businesses create better systems, modern interfaces, and stronger customer trust through focused design and digital execution.</p>
              <p>We help businesses create better systems, modern interfaces, and stronger customer trust through focused design and digital execution.</p>
              <p>We help businesses create better systems, modern interfaces, and stronger customer trust through focused design and digital execution.</p>
              <p class="small-note">Build with a partner that values long-term business growth.</p>
              <p class="small-note">Build with a partner that values long-term business growth.</p>
              <p class="small-note">Build with a partner that values long-term business growth.</p>
              <div class="button-row">
                <a href="services.html" class="btn btn-primary">Explore Services</a>
                <a href="contact.html" class="btn btn-outline">Quick Contact</a>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </section>

{/*********2 *******/}
    <section class="section light-section">
      <div class="container tabs-section">

        <div class="tab-content active" id="benefits">
          <div class="tab-grid">
            <div class="image-card">
              <img src={managementConsultant} alt="Business collaboration"/>
            </div>
            <div class="content-card">
              <h2>Management Consulting</h2>
              <p>We help businesses create better systems, modern interfaces, and stronger customer trust through focused design and digital execution.</p>
              <p>We help businesses create better systems, modern interfaces, and stronger customer trust through focused design and digital execution.</p>
              <p>We help businesses create better systems, modern interfaces, and stronger customer trust through focused design and digital execution.</p>
              <p class="small-note">Build with a partner that values long-term business growth.</p>
              <p class="small-note">Build with a partner that values long-term business growth.</p>
              <p class="small-note">Build with a partner that values long-term business growth.</p>
              <div class="button-row">
                <a href="services.html" class="btn btn-primary">Explore Services</a>
                <a href="contact.html" class="btn btn-outline">Quick Contact</a>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
 
    <section class="section light-section">
      <div class="container tabs-section">

        <div class="tab-content active" id="benefits">
          <div class="tab-grid">
            <div class="image-card">
              <img src={seo} alt="Business collaboration"/>
            </div>
            <div class="content-card">
              <h2>SEO | Performance Marketing</h2>
              <p>We help businesses create better systems, modern interfaces, and stronger customer trust through focused design and digital execution.</p>
              <p>We help businesses create better systems, modern interfaces, and stronger customer trust through focused design and digital execution.</p>
              <p>We help businesses create better systems, modern interfaces, and stronger customer trust through focused design and digital execution.</p>
              <p class="small-note">Build with a partner that values long-term business growth.</p>
              <p class="small-note">Build with a partner that values long-term business growth.</p>
              <p class="small-note">Build with a partner that values long-term business growth.</p>
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
              <img src={managementConsultant} alt="Trusted company teamwork"/>
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
              <img src={marketing} alt="Global partnership meeting"/>
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

{/*444444*/}
     <section class="section light-section">
      <div class="container tabs-section">

        <div class="tab-content active" id="benefits">
          <div class="tab-grid">
            <div class="image-card">
              <img src={marketing} alt="Business collaboration"/>
            </div>
            <div class="content-card">
              <h2>Social Media & Content Marketing</h2>
              <p>We help businesses create better systems, modern interfaces, and stronger customer trust through focused design and digital execution.</p>
              <p>We help businesses create better systems, modern interfaces, and stronger customer trust through focused design and digital execution.</p>
              <p>We help businesses create better systems, modern interfaces, and stronger customer trust through focused design and digital execution.</p>
              <p class="small-note">Build with a partner that values long-term business growth.</p>
              <p class="small-note">Build with a partner that values long-term business growth.</p>
              <p class="small-note">Build with a partner that values long-term business growth.</p>
              <div class="button-row">
                <a href="services.html" class="btn btn-primary">Explore Services</a>
                <a href="contact.html" class="btn btn-outline">Quick Contact</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
    )
}
export default Services;