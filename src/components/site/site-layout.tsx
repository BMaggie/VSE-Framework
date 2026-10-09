import { Link } from '@tanstack/react-router';
import { useId, useState } from 'react';
import { ArrowRight, ArrowUpRight, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { bookingUrl, contactEmail } from './brand';

const portraitUrl = '/Solomon%20portrait.png';

export function BookingButton({ className = '' }: { className?: string }) {
  return (
    <Button asChild variant="brand" className={className}>
      <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
        Book a Session <ArrowUpRight />
      </a>
    </Button>
  );
}

export function HeaderPhoto({ src }: { src: string }) {
  return <img className="header-photo" src={src} alt="" aria-hidden="true" fetchPriority="high" />;
}

export function BrandMark({ size = 38 }: { size?: number }) {
  const id = useId();
  const aClip = `${id}-a`;
  const sClip = `${id}-s`;
  // Poppins Black outlines keep the silhouette stable before web fonts load.
  const aGlyph = 'M504 107H268L233 0H0L259 708H515L773 0H539ZM450 274 386 471 322 274Z';
  return (
    <svg
      viewBox="0 0 150 100"
      width={size}
      height={size}
      role="img"
      aria-label="Solomon Joy Abosede logo"
      className="brand-mark"
      focusable="false"
    >
      <defs>
        <clipPath id={sClip}>
          <path d="M0 -20H625V575L525 720H0Z" />
        </clipPath>
        <clipPath id={aClip}>
          <path d={aGlyph} clipRule="evenodd" />
        </clipPath>
      </defs>
      <g transform="translate(2 86) scale(.075 -.1)" clipPath={`url(#${sClip})`}>
        <path fill="var(--brand-mark-ink)" d="M28 227H264Q269 166 318 166Q336 166 348.5 174.5Q361 183 361 201Q361 226 334 241.5Q307 257 250 277Q182 301 137.5 324Q93 347 61 391Q29 435 30 504Q30 573 65.5 621.5Q101 670 162.5 695Q224 720 301 720Q431 720 507.5 660Q584 600 588 491H349Q348 521 334 534Q320 547 300 547Q286 547 277 537.5Q268 528 268 511Q268 487 294.5 471.5Q321 456 379 434Q446 409 489.5 386Q533 363 565 322Q597 281 597 219Q597 154 565 102.5Q533 51 472 22Q411 -7 327 -7Q200 -7 117.5 52.5Q35 112 28 227Z" />
      </g>
      <g transform="translate(45 86) scale(.075 -.1)">
        <path fill="var(--brand-mark-purple)" d="M544 708V251Q544 90 453 5Q360 -82 205 -85Q38 -85 -75 35Q55 -10 160 48Q230 86 243 155Q250 193 281 193Q301 193 312 206Q323 219 323 251V708Z" />
      </g>
      <g transform="translate(89 86) scale(.075 -.1)" clipPath={`url(#${aClip})`}>
        <path fill="var(--brand-mark-ink)" d="M0 -1H774V709H0Z" />
        <path fill="var(--brand-mark-purple)" d="M525 -1H774V234L593 178Z" />
      </g>
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <Link to="/" activeOptions={{ exact: true, includeHash: true }} className="nav-link" onClick={() => setOpen(false)}>
        Home
      </Link>
      <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>
        About
      </Link>
      <Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>
        Contact
      </Link>
    </>
  );

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link to="/" className="wordmark" aria-label="Solomon Joy Abosede home">
          <BrandMark />
          <span className="brand-name">
            Solomon Joy Abosede
            <small>Advisor &amp; Communicator</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links}
        </nav>

        <BookingButton className="header-cta" />

        <Button
          variant="ghost"
          size="icon"
          className="mobile-menu-button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links}
          <BookingButton />
        </nav>
      )}
    </header>
  );
}

export function Portrait() {
  return <img src={portraitUrl} alt="Portrait of Solomon Joy Abosede" className="portrait-image" />;
}

export function JoyPortrait() {
  return (
    <img
      className="joy-portrait"
      src={portraitUrl}
      alt="Solomon Joy Abosede"
      loading="lazy"
      width={390}
      height={520}
    />
  );
}

export function FrameworkSection() {
  const steps = ['Vision', 'Strategy', 'Execution'];

  return (
    <section className="framework">
      <div className="site-container">
        <div className="eyebrow text-center">OUR FRAMEWORK</div>
        <div className="framework-steps">
          {steps.map((step, index) => (
            <div key={step} className="contents">
              <div className="framework-step">
                <span>0{index + 1}</span>
                <h3>{step}</h3>
              </div>
              {index < steps.length - 1 && <ArrowRight className="framework-arrow" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="site-container">
        <h2>Let's build something impactful together</h2>
        <p className="footer-copy">
          Reach out for advisory support, strategy conversations, and help turning ideas
          <br className="hidden md:block" /> into meaningful outcomes.
        </p>

        <div className="footer-actions">
          <BookingButton />
          <Button asChild variant="brandOutline" size="lg" className="footer-email">
            <a href={`mailto:${contactEmail}`}>
              <Mail />
              {contactEmail}
            </a>
          </Button>
        </div>

        <div className="footer-bottom">
          <p className="footer-brandline">
            <BrandMark size={24} />
            <span>© {new Date().getFullYear()} Solomon Joy Abosede. All rights reserved.</span>
          </p>

          <nav className="footer-nav" aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
