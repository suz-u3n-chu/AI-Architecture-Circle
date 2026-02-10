
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Message from './components/Message';
import Concept from './components/Concept';
import SenaTools from './components/SenaTools';
import Problems from './components/Problems';
import Benefits from './components/Benefits';
import Offerings from './components/Offerings';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Target from './components/Target';
import Voices from './components/Voices';
import Profile from './components/Profile';
import Flow from './components/Flow';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ToolsMarquee from './components/ToolsMarquee';
import Roadmap from './components/Roadmap';
import FreeGuide from './components/FreeGuide';
import ExitIntent from './components/ExitIntent';

function App() {
  // Ensure the loader is removed when the app mounts
  useEffect(() => {
    const loader = document.getElementById('initial-loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => { loader.remove(); }, 500);
    }
  }, []);

  // GA4 scroll depth tracking
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand selection:text-white font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ToolsMarquee />
        <Message />
        <Concept />
        <Problems />
        <FreeGuide />
        <SenaTools />
        <Benefits />
        <Offerings />
        <Roadmap />
        <Schedule />
        <Gallery />
        <Target />
        <Voices />
        <Profile />
        <Flow />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <ExitIntent />
    </div>
  );
}

export default App;
