
import { useEffect } from 'react';
import CircleFaq from './components/circle/CircleFaq';
import CircleFlow from './components/circle/CircleFlow';
import CircleFooter from './components/circle/CircleFooter';
import CircleHeader from './components/circle/CircleHeader';
import CircleHero from './components/circle/CircleHero';
import CirclePricing from './components/circle/CirclePricing';
import GatheringSection from './components/circle/GatheringSection';
import MemberPreview from './components/circle/MemberPreview';
import ProofSection from './components/circle/ProofSection';
import ServiceShelf from './components/circle/ServiceShelf';

function App() {
  useEffect(() => {
    const loader = document.getElementById('initial-loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => { loader.remove(); }, 500);
    }
  }, []);

  useEffect(() => {
    const thresholds = [25, 50, 75, 90];
    const fired = new Set<number>();
    const handleScroll = () => {
      const pct = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      for (const t of thresholds) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          window.gtag?.('event', 'scroll_depth', { percent: t });
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="top" className="circle-shell">
      <CircleHeader />
      <main>
        <CircleHero />
        <CircleFlow />
        <MemberPreview />
        <ServiceShelf />
        <GatheringSection />
        <ProofSection />
        <CirclePricing />
        <CircleFaq />
      </main>
      <CircleFooter />
    </div>
  );
}

export default App;
