import new_logo from "./../assets/img/new_logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

     const closeMenu = () => {
    setIsMenuOpen(false);
  };

    return (
        <header className="site-header">
        <div className="container nav-wrap">
        <Link to="/" className="brand">
          <img
            src={new_logo}
            alt="AL-TRIUMPH Technology FZ-LLC logo"
            className="brand-logo"
          />
        </Link>

        <button
  className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
  aria-label="Toggle Menu"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</button>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/pricing" onClick={closeMenu}>
            Pricing
          </Link>
          <Link to="/team" onClick={closeMenu}>
            Team
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
    )


}
export default Header;