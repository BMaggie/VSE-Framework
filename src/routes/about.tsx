import { createFileRoute } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Portrait } from '@/components/site/site-layout';
import { pageMeta } from '@/components/site/brand';

export const Route = createFileRoute('/about')({
  head: () => pageMeta('About Solomon: Strategy Meets Technology', 'Meet Solomon Joy Abosede, an entrepreneurial advisor blending product strategy, community building, and Bitcoin education.'),
  component: AboutPage,
});
function AboutPage() {
  return (
    <>
      <section className="page-header">
        <div className="site-container">
          <div className="eyebrow">ABOUT</div>
          <h1>
            Entrepreneurial Advisor &
            <br className="hidden md:block" /> Technology Communicator
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="site-container two-column">
          <Portrait />
          <div className="story-copy">
            <div className="eyebrow">MY STORY</div>
            <h2 className="section-title">Turning ideas into impact, one founder at a time</h2>
            <p>
              Solomon Joy Abosede works at the intersection of product strategy, community, and emerging technology, helping founders move from raw ideas to real traction.
            </p>
            <p>
              Her approach follows a simple framework: Ideas, Strategy, Execution, Impact. It guides founders through each stage with clarity and practical direction.
            </p>
            <p>
              She is also deeply engaged in Bitcoin education and innovation, making complex technology accessible to builders and everyday audiences alike.
            </p>
          </div>
        </div>
      </section>
      <section className="framework">
        <div className="site-container">
          <div className="eyebrow text-center">HER FRAMEWORK</div>
          <div className="framework-steps">
            {['Ideas', 'Strategy', 'Execution', 'Impact'].map((step, i) => (
              <div key={step} className="contents">
                <div className="framework-step">
                  <span>0{i + 1}</span>
                  <h3>{step}</h3>
                </div>
                {i < 3 && <ArrowRight className="framework-arrow" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
