import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, Lightbulb, Users, Bitcoin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { JoyPortrait, HeaderPhoto, BookingButton } from '@/components/site/site-layout';
import { focusAreas, pageMeta, headerPhotos } from '@/components/site/brand';

export const Route = createFileRoute('/')({
  head: () => pageMeta('Solomon Joy Abosede — Ideas into Impact', 'Entrepreneurial Advisor & Technology Communicator helping founders through product strategy, community building, and Bitcoin education.'),
  component: HomePage,
});

function HomePage() {
  const icons = [Lightbulb, Users, Bitcoin];
  return <>
    <section className="hero"><HeaderPhoto src={headerPhotos.home} /><div className="site-container"><div className="eyebrow">IDEAS. STRATEGY. EXECUTION. IMPACT.</div><h1>Helping founders turn ideas<br className="hidden md:block" /> into impact</h1><p className="hero-copy">Entrepreneurial Advisor & Technology Communicator — guiding founders through product strategy, community building, and Bitcoin-driven innovation.</p><div className="hero-actions"><BookingButton /><Button asChild variant="brandOutline"><Link to="/about">Learn More</Link></Button></div></div></section>
    <section className="section" id="services"><div className="site-container"><div className="focus-heading"><div><div className="eyebrow">WHAT I DO</div><h2 className="section-title">Core Areas of Focus</h2></div></div><div className="focus-grid">{focusAreas.map((area, i) => { const Icon = icons[i]; return <article className="focus-card" key={area.title}><div className="focus-card-top">{Icon && <Icon className="focus-icon" />}</div><h3>{area.title}</h3><p>{area.description}</p></article>; })}</div></div></section>
    <section className="about-band"><div className="site-container two-column"><div><div className="eyebrow">ABOUT SOLOMON</div><h2 className="section-title">An advisor who speaks both strategy and technology</h2><p>Solomon Joy Abosede partners with founders to turn raw ideas into real, lasting impact — blending product thinking, community strategy, and a deep understanding of Bitcoin and emerging technology.</p><Link to="/about" className="text-link">Read more about Solomon <ArrowRight /></Link></div><JoyPortrait /></div></section>
  </>;
}
