import { createFileRoute } from '@tanstack/react-router';
import { FrameworkSection, HeaderPhoto, JoyPortrait } from '@/components/site/site-layout';
import { headerPhotos, pageMeta } from '@/components/site/brand';

export const Route = createFileRoute('/about')({
  head: () =>
    pageMeta(
      'About Solomon: Strategy Meets Technology',
      'Meet Solomon Joy Abosede, an entrepreneurial advisor blending product strategy, community building, and Bitcoin education.',
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="page-header">
        <HeaderPhoto src={headerPhotos.about} />
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
          <JoyPortrait />
          <div className="story-copy">
            <div className="eyebrow">MY STORY</div>
            <h2 className="section-title">Turning ideas into impact, one founder at a time</h2>
            <p>
              Solomon Joy Abosede works at the intersection of product strategy, community, and
              emerging technology, helping founders move from raw ideas to real traction.
            </p>
            <p>
              Her framework moves through Vision, Strategy, and Execution, with clarity and practical
              direction at each stage.
            </p>
            <p>
              She is also deeply engaged in Bitcoin education and innovation, making complex
              technology accessible to builders and everyday audiences alike.
            </p>
          </div>
        </div>
      </section>

      <FrameworkSection />
    </>
  );
}
