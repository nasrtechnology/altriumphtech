import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Icon = ({ name, size = 20 }) => {
  const paths = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>, search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>, chart: <><path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/></>,
    users: <><circle cx="9" cy="8" r="3"/><path d="M3 19c0-4 2-6 6-6s6 2 6 6M16 6a3 3 0 0 1 0 6M17 14c3 .5 4 2 4 5"/></>,
    megaphone: <><path d="M4 13h4l9 4V5L8 9H4zM8 13l1 6h4"/></>, check: <path d="m5 12 4 4L19 6"/>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></>,
    message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.5-5A7 7 0 0 1 3 13V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21c.5-5 3-7 8-7s7.5 2 8 7"/></>,
    file: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 13h6M9 17h6"/></>,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.2-.9z"/>,
    shield: <path d="M12 2 4 5v6c0 5 3 9 8 11 5-2 8-6 8-11V5z"/>, phone: <path d="M7 3 4 5c0 8 7 15 15 15l2-3-4-3-2 2c-3-1-6-4-7-7l2-2z"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>, pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></>, heart: <path d="M20 5c-3-3-7-1-8 2-1-3-5-5-8-2-4 4 1 10 8 15 7-5 12-11 8-15z"/>,
    ticket: <path d="M3 7h18v4a2 2 0 0 0 0 4v4H3v-4a2 2 0 0 0 0-4z"/>, bell: <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>
  };
  return <svg className="site-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.arrow}</svg>;
};

export const Button = ({ to, children, variant='primary', onClick, type='button', disabled=false, className='' }) => {
  const cls = `ui-button ${variant} ${className}`;
  return to ? <Link className={cls} to={to}>{children}</Link> : <button className={cls} onClick={onClick} type={type} disabled={disabled}>{children}</button>;
};

export const PageHero = ({ eyebrow, title, text, children, compact=false }) => <section className={`inner-hero ${compact?'compact':''}`}><div className="hero-glow"/><div className="container"><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><strong>{eyebrow}</strong></div><div className="inner-hero-copy"><span className="eyebrow-new">{eyebrow}</span><h1>{title}</h1><p>{text}</p>{children && <div className="hero-actions-new">{children}</div>}</div></div></section>;

export const SectionTitle = ({ eyebrow, title, text, center=false }) => <div className={`section-title-new ${center?'center':''}`}><span className="eyebrow-new">{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>;

export const CTA = ({ onQuote, title='Ready to move your business forward?', text='Tell us what you want to achieve. We’ll bring the strategy, creativity, and technology to make it happen.' }) => <section className="cta-new container"><div><span className="eyebrow-new light">Let’s build together</span><h2>{title}</h2><p>{text}</p></div><div className="cta-actions"><Button onClick={onQuote} variant="light">Request a free quote <Icon name="arrow"/></Button><Button to="/contact" variant="ghost-light">Contact our team</Button></div></section>;

export const FAQList = ({ items }) => { const [open,setOpen]=useState(0); return <div className="faq-list">{items.map((x,i)=><article className={open===i?'open':''} key={x[0]}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>{x[0]}</span><b>{open===i?'−':'+'}</b></button><div className="faq-answer"><p>{x[1]}</p></div></article>)}</div> };

export const FormField = ({ label, children, full=false, hint }) => <label className={`field-new ${full?'full':''}`}><span>{label}</span>{children}{hint&&<small>{hint}</small>}</label>;

export const StatusBadge = ({ children, tone='orange' }) => <span className={`status-badge ${tone}`}>{children}</span>;

export const EmptyState = ({ icon='search', title='Nothing found', text='Try changing your search or filters.' }) => <div className="empty-state"><span><Icon name={icon} size={28}/></span><h3>{title}</h3><p>{text}</p></div>;
