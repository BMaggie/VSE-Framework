import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Portrait } from '@/components/site/site-layout';
import { pageMeta } from '@/components/site/brand';

export const Route = createFileRoute('/')({
  head: () => pageMeta('Solomon Joy Abosede: Ideas into Impact', 'Entrepreneurial Advisor & Technology Communicator helping founders through product strategy, community building, and Bitcoin education.'),
  component: HomePage,
});

function HomePage() {
  return <>
    <section className="hero"><div className="site-container"><div className="eyebrow">VISION. STRATEGY. EXECUTION.</div><h1>Helping founders turn ideas<br className="hidden md:block" /> into impact</h1><p className="hero-copy">Entrepreneurial Advisor & Technology Communicator, guiding founders through product strategy, community building, and Bitcoin-driven innovation.</p><div className="hero-actions"><Button asChild variant="brand"><Link to="/contact">Work With Me</Link></Button><Button asChild variant="brandOutline"><Link to="/about">Learn More</Link></Button></div></div></section>
    <section className="about-band"><div className="site-container two-column"><div><div className="eyebrow">ABOUT SOLOMON</div><h2 className="section-title">An advisor who speaks both strategy and technology</h2><p>Solomon Joy Abosede partners with founders to turn raw ideas into real, lasting impact by blending product thinking, community strategy, and a deep understanding of Bitcoin and emerging technology.</p><Link to="/about" className="text-link">Read more about Solomon <ArrowRight /></Link></div><Portrait /></div></section>
  </>;
}
