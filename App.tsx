
import React from 'react';
import Header from './components/Header';
import TopicTicker from './components/TopicTicker';
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

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand selection:text-white font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <TopicTicker />
        <Message />
        <Concept />
        <Problems />
        <SenaTools />
        <Benefits />
        <Offerings />
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
    </div>
  );
}

export default App;
