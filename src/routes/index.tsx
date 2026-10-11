import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, Coins, Compass, MessageSquareText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookingButton, FrameworkSection, HeaderPhoto, JoyPortrait } from '@/components/site/site-layout';
import { focusAreas, headerPhotos, pageMeta } from '@/components/site/brand';
import { useTypewriter } from '@/hooks/use-typewriter';

const icons = [Compass, Coins, MessageSquareText];
const heroEndings = ['into impact', 'into traction', 'into real businesses'] as const;

export const Route = createFileRoute('/')({
  head: () =>
    pageMeta(
      'Solomon Joy Abosede: Ideas into Impact',
      'Entrepreneurial Advisor & Technology Communicator helping founders through product strategy, community building, and Bitcoin education.',
    ),
  component: HomePage,
});

function HomePage() {
  const typedEnding = useTypewriter(heroEndings);
  return (
    <>
      <section className="hero">
        <HeaderPhoto src={headerPhotos.home} />
        <div className="site-container">
          <div className="eyebrow">VISION. STRATEGY. EXECUTION.</div>
          <h1 aria-label="Helping founders turn ideas into impact">
            <span className="hero-static-line" aria-hidden="true">Helping founders turn ideas</span>
            <span className="hero-typed-line" aria-hidden="true">
              {heroEndings.map((phrase) => (
                <span className="hero-typed-reserve" key={phrase}>{phrase}</span>
              ))}
              <span className="hero-typed-visible">
                {typedEnding}<span className="hero-typed-caret" />
              </span>
            </span>
          </h1>
          <p className="hero-copy">
            Entrepreneurial Advisor &amp; Technology Communicator, guiding founders through product
            strategy, community building, and Bitcoin-driven innovation.
          </p>
          <div className="hero-actions">
            <BookingButton />
            <Button asChild variant="brandOutline">
              <Link to="/about">Start with Vision</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="site-container">
          <div className="focus-heading">
            <div>
              <div className="eyebrow">WHAT I DO</div>
              <h2 className="section-title">Core Areas of Focus</h2>
            </div>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area, i) => {
              const Icon = icons[i];
              return (
                <article className="focus-card" key={area.title}>
                  <div className="focus-card-top">{Icon && <Icon className="focus-icon" />}</div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="site-container two-column">
          <div>
            <div className="eyebrow">ABOUT SOLOMON</div>
            <h2 className="section-title">An advisor who speaks both strategy and technology</h2>
            <p>
              Solomon Joy Abosede partners with founders to turn raw ideas into real, lasting impact —
              blending product thinking, community strategy, and a deep understanding of Bitcoin and
              emerging technology.
            </p>
            <Link to="/about" className="text-link">
              Read more about Solomon <ArrowRight />
            </Link>
          </div>
          <JoyPortrait />
        </div>
      </section>

      <FrameworkSection />
    </>
  );
}
