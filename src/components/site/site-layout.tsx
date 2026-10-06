import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, Mail, Menu, X, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactEmail } from './brand';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = <><Link to="/" activeOptions={{ exact: true, includeHash: true }} className="nav-link" onClick={() => setOpen(false)}>Home</Link><Link to="/about" className="nav-link" onClick={() => setOpen(false)}>About</Link><Link to="/" hash="services" activeOptions={{ includeHash: true }} className="nav-link" onClick={() => setOpen(false)}>Services</Link><Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>Contact</Link></>;
  return <header className="site-header"><div className="site-container header-inner"><Link to="/" className="wordmark" aria-label="Solomon Joy Abosede home"><span className="brand-mark">SJ</span><span>Solomon Joy Abosede<span className="text-primary">.</span></span></Link><nav className="desktop-nav" aria-label="Main navigation">{links}</nav><Button asChild variant="brand" className="header-cta"><Link to="/contact">Get in Touch <ArrowUpRight /></Link></Button><Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{links}<Button asChild variant="brand"><Link to="/contact" onClick={() => setOpen(false)}>Get in Touch <ArrowUpRight /></Link></Button></nav>}</header>;
}

export function PhotoPlaceholder() {
  return <div className="photo-placeholder" role="img" aria-label="Portrait placeholder for Solomon Joy Abosede"><Image aria-hidden="true" /><span>SOLOMON JOY ABOSEDE</span></div>;
}

export function SiteFooter() {
  return <footer className="footer"><div className="site-container"><div className="eyebrow mb-3">LET'S CREATE IMPACT</div><h2>Let's build something impactful together<span className="text-primary">.</span></h2><Button asChild variant="brand" size="lg" className="footer-email"><a href={`mailto:${contactEmail}`}><Mail />{contactEmail}<ArrowUpRight /></a></Button><div className="footer-bottom"><p>© {new Date().getFullYear()} Solomon Joy Abosede. All rights reserved.</p><p>Ideas. Strategy. Execution. Impact.</p></div></div></footer>;
}
