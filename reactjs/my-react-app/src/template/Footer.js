import new_logo from "./../assets/img/new_logo.png";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
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
                        <img src={new_logo} alt="AL-TRIUMPH logo" />
                    </div>
                    <p>Modern digital solutions, branding, and business support for companies that want to grow with confidence.</p>
                </div>

                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
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
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Submit</button>
                    </form>
                    <p class="privacy-note">Protecting your privacy.</p>
                </div>
            </div>

            <div class="container footer-bottom">
                <p>© 2026 AL-TRIUMPH Technology FZ-LLC. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer;