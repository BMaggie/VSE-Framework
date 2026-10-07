import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactEmail } from './brand';

export function BrandMark({ size = 38 }: { size?: number }) {
  return (
    <img
      src="/logo.png"
      width={size}
      height={size}
      alt="Solomon Joy Abosede logo"
      className="block object-contain"
    />
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = <><Link to="/" activeOptions={{ exact: true, includeHash: true }} className="nav-link" onClick={() => setOpen(false)}>Home</Link><Link to="/about" className="nav-link" onClick={() => setOpen(false)}>About</Link><Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>Contact</Link></>;
  return <header className="site-header"><div className="site-container header-inner"><Link to="/" className="wordmark" aria-label="Solomon Joy Abosede home"><BrandMark /><span className="brand-name">Solomon Joy Abosede<small>Advisor & Communicator</small></span></Link><nav className="desktop-nav" aria-label="Main navigation">{links}</nav><Button asChild variant="brand" className="header-cta"><Link to="/contact">Get in Touch</Link></Button><Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{links}<Button asChild variant="brand"><Link to="/contact" onClick={() => setOpen(false)}>Get in Touch</Link></Button></nav>}</header>;
}

export function Portrait() {
  return <img src="/Solomon%20portrait.png" alt="Portrait of Solomon Joy Abosede" className="portrait-image" />;
}

export function SiteFooter() {
  return <footer className="footer"><div className="site-container"><h2>Let's build something impactful together</h2><p className="footer-copy">Reach out for advisory support, strategy conversations, and help turning ideas<br className="hidden md:block" /> into meaningful outcomes.</p><Button asChild variant="brand" size="lg" className="footer-email"><a href={`mailto:${contactEmail}`}><Mail />{contactEmail}</a></Button><div className="footer-bottom"><p className="footer-brandline"><BrandMark size={24} /><span>© {new Date().getFullYear()} Solomon Joy Abosede. All rights reserved.</span></p><nav className="footer-nav" aria-label="Footer navigation"><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link></nav></div></div></footer>;
}
