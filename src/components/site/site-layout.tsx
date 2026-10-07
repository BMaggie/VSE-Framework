import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactEmail, bookingUrl } from './brand';
import portrait from '@/assets/Solomon_portrait.png.asset.json';

export function BookingButton({ className = '' }: { className?: string }) {
  return <Button asChild variant="brand" className={className}><a href={bookingUrl} target="_blank" rel="noopener noreferrer">Book a Session <ArrowUpRight /></a></Button>;
}

export function HeaderPhoto({ src }: { src: string }) {
  return <img className="header-photo" src={src} alt="" aria-hidden="true" fetchPriority="high" />;
}

export function BrandMark({ size = 38 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 40 40" role="img" aria-label="SJA monogram logo"><rect width="40" height="40" rx="10" fill="var(--primary)" /><text x="20" y="21" textAnchor="middle" dominantBaseline="central" fill="var(--primary-foreground)" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fontSize="12.5" letterSpacing="0.4">SJA</text></svg>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = <><Link to="/" activeOptions={{ exact: true, includeHash: true }} className="nav-link" onClick={() => setOpen(false)}>Home</Link><Link to="/about" className="nav-link" onClick={() => setOpen(false)}>About</Link><Link to="/" hash="services" activeOptions={{ includeHash: true }} className="nav-link" onClick={() => setOpen(false)}>Services</Link><Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>Contact</Link></>;
  return <header className="site-header"><div className="site-container header-inner"><Link to="/" className="wordmark" aria-label="Solomon Joy Abosede home"><BrandMark /><span className="brand-name">Solomon Joy Abosede<small>Advisor & Communicator</small></span></Link><nav className="desktop-nav" aria-label="Main navigation">{links}</nav><BookingButton className="header-cta" /><Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{links}<BookingButton /></nav>}</header>;
}

export function JoyPortrait() {
  return <img className="joy-portrait" src={portrait.url} alt="Solomon Joy Abosede" loading="lazy" width={390} height={520} />;
}

export function SiteFooter() {
  return <footer className="footer"><div className="site-container"><h2>Let's build something impactful together</h2><p className="footer-copy">Reach out for advisory support, strategy conversations, and help turning ideas<br className="hidden md:block" /> into meaningful outcomes.</p><div className="footer-actions"><BookingButton /><Button asChild variant="brandOutline" size="lg" className="footer-email"><a href={`mailto:${contactEmail}`}><Mail />{contactEmail}</a></Button></div><div className="footer-bottom"><p className="footer-brandline"><BrandMark size={24} /><span>© {new Date().getFullYear()} Solomon Joy Abosede. All rights reserved.</span></p><nav className="footer-nav" aria-label="Footer navigation"><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/" hash="services">Services</Link><Link to="/contact">Contact</Link></nav></div></div></footer>;
}
