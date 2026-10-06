import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Lightbulb, Users, Bitcoin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PhotoPlaceholder } from '@/components/site/site-layout';
import { focusAreas, pageMeta } from '@/components/site/brand';

export const Route = createFileRoute('/')({
  head: () => pageMeta('Solomon Joy Abosede — Ideas into Impact', 'Entrepreneurial Advisor & Technology Communicator helping founders through product strategy, community building, and Bitcoin education.'),
  component: HomePage,
});

function HomePage() {
  const icons = [Lightbulb, Users, Bitcoin];
  return <>
    <section className="hero"><div className="site-container"><div className="eyebrow eyebrow-line">IDEAS. STRATEGY. EXECUTION. IMPACT.</div><div className="hero-layout"><div><h1>Helping founders turn<br className="hidden lg:block" /> ideas into <span className="text-primary">impact.</span></h1><p className="hero-copy">I’m Solomon Joy Abosede — an Entrepreneurial Advisor & Technology Communicator, bridging the gap between bold ideas and meaningful action.</p><div className="hero-actions"><Button asChild variant="brand"><Link to="/contact">Work With Me <ArrowUpRight /></Link></Button><Button asChild variant="brandOutline"><Link to="/about">Learn More <ArrowRight /></Link></Button></div></div><div className="hero-note"><span className="eyebrow">CLARITY. CONNECTION. GROWTH.</span><p>Fresh perspectives.<br />Thoughtful strategy.<br />Real-world impact.</p></div></div><div className="hero-bottom"><span>AT THE INTERSECTION OF ENTREPRENEURSHIP & TECHNOLOGY</span><span>Built on ideas. Driven by purpose.</span></div></div></section>
    <section className="section" id="services"><div className="site-container"><div className="focus-heading"><div><div className="eyebrow eyebrow-line">WHAT I DO</div><h2 className="section-title">Core Areas of Focus<span className="text-primary">.</span></h2></div><p className="section-intro">Helping you find clarity, connect with people, and build what comes next.</p></div><div className="focus-grid">{focusAreas.map((area, i) => { const Icon = icons[i]; return <article className="focus-card" key={area.title}><div className="focus-card-top">{Icon && <Icon className="focus-icon" />}<span className="text-xs">0{i + 1}</span></div><h3>{area.title}</h3><p>{area.description}</p></article>; })}</div></div></section>
    <section className="about-band"><div className="site-container two-column"><PhotoPlaceholder /><div><div className="eyebrow">ABOUT SOLOMON</div><h2 className="section-title">An advisor who speaks both strategy and technology<span className="text-photo">.</span></h2><p>I work at the intersection of entrepreneurship, innovation, and communication — helping founders make sense of complex ideas, build stronger communities, and move forward with confidence.</p><Link to="/about" className="text-link">Read more about Solomon <ArrowRight /></Link></div></div></section>
  </>;
}
