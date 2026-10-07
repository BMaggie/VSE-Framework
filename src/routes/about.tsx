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
      <section className="page-header page-header-about">
        <div className="site-container">
          <div className="eyebrow">ABOUT</div>
          <h1>
            Entrepreneurial Advisor &
            <br className="hidden md:block" /> Technology Communicator
          </h1>
        </div>
                      Her framework moves through Vision, Strategy, and Execution, with clarity and practical direction at each stage.
      <section className="section">
              <section className="framework">
                <div className="site-container">
                  <div className="eyebrow text-center">HER FRAMEWORK</div>
                  <div className="framework-steps">
                    {['Vision', 'Strategy', 'Execution'].map((step, i) => (
                      <div key={step} className="contents">
                        <div className="framework-step">
                          <span>0{i + 1}</span>
                          <h3>{step}</h3>
                        </div>
                        {i < 2 && <ArrowRight className="framework-arrow" aria-hidden="true" />}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
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
