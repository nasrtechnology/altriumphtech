import newLogo from './../assets/img/new_logo.png';
import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Icon } from '../components/SiteUI';

const Header = ({ onQuote, onAuth }) => {
  const [open,setOpen]=useState(false); const [servicesOpen,setServicesOpen]=useState(false); const [search,setSearch]=useState(false);
  useEffect(()=>{document.body.classList.toggle('menu-open',open);return()=>document.body.classList.remove('menu-open')},[open]);
  const close=()=>{setOpen(false);setServicesOpen(false)};
  return <>
    <header className="site-header-new">
      <div className="topbar"><div className="container"><span>Dubai-based digital technology company</span><div><a href="mailto:altriumph.technology@gmail.com">altriumph.technology@gmail.com</a><a href="tel:+971507047685">+971 50 704 7685</a></div></div></div>
      <div className="nav-new container">
        <Link to="/" className="brand-new" onClick={close}><img src={newLogo} alt="AL-TRIUMPH Technology FZ-LLC"/></Link>
        <nav className={open?'main-nav open':'main-nav'} aria-label="Main navigation">
          <NavLink to="/" end onClick={close}>Home</NavLink><NavLink to="/about" onClick={close}>About</NavLink>
          <div className={`nav-dropdown-new ${servicesOpen?'open':''}`}><button onClick={()=>setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen}>Services <span>⌄</span></button><div className="mega-menu"><div><small>Explore expertise</small><strong>Solutions for every stage of growth.</strong><Link to="/services" onClick={close}>View all services <Icon name="arrow" size={16}/></Link></div><div><Link to="/services/software" onClick={close}><Icon name="code"/>Software Services</Link><Link to="/services/consulting" onClick={close}><Icon name="users"/>Management Consulting</Link><Link to="/services/seo" onClick={close}><Icon name="chart"/>SEO & Performance</Link><Link to="/services/social" onClick={close}><Icon name="megaphone"/>Social Media</Link></div></div></div>
          <NavLink to="/projects" onClick={close}>Projects</NavLink><NavLink to="/pricing" onClick={close}>Pricing</NavLink><NavLink to="/blog" onClick={close}>Insights</NavLink><NavLink to="/contact" onClick={close}>Contact</NavLink>
          <div className="mobile-only-nav"><button onClick={()=>{close();onAuth('login')}}>Customer login</button><button className="primary-mobile" onClick={()=>{close();onQuote()}}>Request a quote</button></div>
        </nav>
        <div className="nav-tools"><button className="nav-icon-btn" onClick={()=>setSearch(true)} aria-label="Search"><Icon name="search"/></button><button className="login-btn" onClick={()=>onAuth('login')}><Icon name="user" size={17}/> Login</button><button className="quote-nav" onClick={onQuote}>Request a Quote <Icon name="arrow" size={17}/></button><button className={open?'hamburger-new active':'hamburger-new'} onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"><span/><span/><span/></button></div>
      </div>
    </header>
    {search&&<div className="search-overlay" role="dialog" aria-modal="true" aria-label="Site search"><button onClick={()=>setSearch(false)} aria-label="Close search">×</button><div><span>Search AL-TRIUMPH</span><form onSubmit={e=>{e.preventDefault();setSearch(false)}}><input autoFocus placeholder="Search services, projects, insights…"/><button type="submit"><Icon name="search"/></button></form><small>Popular: Software services · SEO · Consulting · Pricing</small></div></div>}
  </>;
};
export default Header;
