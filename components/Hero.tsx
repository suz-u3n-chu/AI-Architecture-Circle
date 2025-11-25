
import React from 'react';
import { ArrowDown, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-bg overflow-hidden pt-20">
      {/* CAD Grid Background */}
      <div className="absolute inset-0 bg-grid-cad opacity-40 pointer-events-none"></div>
      
      {/* Ambient Light - Warmer/Softer for Light Mode */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand rounded-full blur-[150px] opacity-5 animate-pulse-slow"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-slate-200 rounded-full blur-[100px] opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start">
          
          {/* Meta Info */}
          <div className="w-full flex justify-between items-end border-b border-slate-200 pb-6 mb-12 animate-fade-in-up">
            <div className="hidden md:block font-mono text-xs text-brand tracking-widest font-bold">
              STATUS: メンバー募集中<br/>
              VER: 2.0.5 BETA
            </div>
            <div className="font-mono text-right text-xs text-slate-500">
              運営: Archi-Prisma Design works<br/>
              TOKYO, JAPAN
            </div>
          </div>

          {/* Main Headline */}
          <div className="relative mb-12">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-black leading-[0.9] tracking-tighter uppercase animate-fade-in-up [animation-delay:100ms]">
              Architect<br/>
              <span className="text-transparent text-stroke hover:text-black transition-colors duration-500 cursor-default">Intelligence</span><br/>
              Circle.
            </h1>
            
            {/* Floating Badge */}
            <div className="absolute top-0 right-0 md:-right-12 md:top-12 bg-brand text-white font-bold text-xs md:text-sm px-4 py-2 rotate-12 shadow-[0_10px_20px_rgba(255,51,0,0.2)] animate-pulse-fast">
              新規メンバー受付中
            </div>
          </div>

          {/* Subtext & CTA */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full animate-fade-in-up [animation-delay:300ms]">
            <div className="md:col-span-5">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                <span className="text-black font-bold bg-brand/10 px-1">中小・個人設計者が「生き残る」ための武器を。</span><br/>
                現役建築家Senaが開発した業務ツールと<br/>
                実務ノウハウを共有する実践型コミュニティ。
              </p>
            </div>
            
            <div className="md:col-span-7 flex flex-col sm:flex-row gap-4 justify-end items-start sm:items-center">
              <a 
                href="#pricing" 
                className="group w-full sm:w-auto bg-black text-white px-10 py-5 text-lg font-bold tracking-tight hover:bg-brand transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-black/5"
              >
                <span>今すぐ参加する</span>
                <div className="w-2 h-2 bg-brand group-hover:bg-white rounded-full"></div>
              </a>
              
              <a 
                href="#gallery" 
                className="group w-full sm:w-auto px-10 py-5 border border-slate-300 text-slate-800 font-bold text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-3"
              >
                <Play className="w-3 h-3 fill-current" />
                デモ映像を見る
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 animate-bounce text-slate-400">
        <ArrowDown className="w-5 h-5" />
        <span className="font-mono text-xs tracking-widest uppercase vertical-rl">SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
};

export default Hero;
