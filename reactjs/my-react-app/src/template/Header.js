import new_logo from "./../assets/img/new_logo.png";


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
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
                <a href="#">Pricing</a>
                <a href="#">Team</a>
                <a href="#">Contact</a>
            </nav>

            <a href="#" class="btn btn-primary nav-cta">Get Started</a>
            </div>
  </header>
    )


}
export default Header;