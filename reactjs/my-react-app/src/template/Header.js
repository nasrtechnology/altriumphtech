import new_logo from "./../assets/img/new_logo.png";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header class="site-header">
            <div class="container nav-wrap">
            <a href="#" class="brand">
                <img src={new_logo} alt="AL-TRIUMPH Technology FZ-LLC logo" class="brand-logo"/>
                <div class="brand-copy">
                <strong>AL-TRIUMPH</strong>
                <span>Technology</span>
                </div>
            </a>

            <button class="menu-toggle" aria-label="Open menu" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="nav-menu" id="navMenu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/team">Team</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            {/* <a href="#" class="btn btn-primary nav-cta">Get Started</a> */}
            </div>
  </header>
    )


}
export default Header;