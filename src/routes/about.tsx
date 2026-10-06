import { createFileRoute } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { PhotoPlaceholder } from '@/components/site/site-layout';
import { pageMeta } from '@/components/site/brand';

export const Route = createFileRoute('/about')({
  head: () => pageMeta('About Solomon — Strategy Meets Technology', 'Meet Solomon Joy Abosede, an entrepreneurial advisor blending product strategy, community building, and Bitcoin education.'),
  component: AboutPage,
});
function AboutPage() {
  return <><section className="page-header"><div className="site-container"><div className="eyebrow eyebrow-line">ABOUT</div><h1>Entrepreneurial Advisor &<br className="hidden md:block" /> Technology Communicator<span className="text-primary">.</span></h1></div></section><section className="section"><div className="site-container two-column"><PhotoPlaceholder /><div className="story-copy"><div className="eyebrow eyebrow-line">MY STORY</div><h2 className="section-title">Connecting ideas.<br />Creating possibility.</h2><p>I’m Solomon Joy Abosede. My work brings together product strategy, community building, and technology communication to help founders turn ambition into practical, meaningful action.</p><p>I believe the best ideas grow through clarity and connection. Whether I’m shaping a product direction or creating content for a community, I focus on making complex concepts accessible and giving people a shared sense of purpose.</p><p>That same approach guides my work in Bitcoin education and innovation: thoughtful conversations, clear explanations, and an eye on real-world possibilities. Across everything I do, the goal is simple — help founders build with intention and create lasting impact.</p></div></div></section><section className="framework"><div className="site-container"><div className="eyebrow text-center">HER FRAMEWORK</div><div className="framework-steps">{['Ideas', 'Strategy', 'Execution', 'Impact'].map((step, i) => <div key={step} className="contents"><div className="framework-step"><span>0{i + 1}</span><h3>{step}</h3></div>{i < 3 && <ArrowRight className="framework-arrow" aria-hidden="true" />}</div>)}</div></div></section></>;
}
