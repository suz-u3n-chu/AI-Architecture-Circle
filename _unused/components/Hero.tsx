import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-bg-dark overflow-hidden text-white selection:bg-brand selection:text-white">
      {/* Noise Texture Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay bg-noise"></div>

      {/* Abstract Ambient Light - Mobile Optimized (Huge Red Glow) */}
      <div className="absolute top-[-30%] left-[-50%] w-[180vw] h-[180vw] bg-brand rounded-full blur-[80px] opacity-25 animate-pulse-slow mix-blend-screen md:hidden pointer-events-none"></div>
      
      {/* Abstract Ambient Light - Desktop */}
      <div className="hidden md:block absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-brand rounded-full blur-[150px] opacity-10 animate-pulse-slow mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-900 rounded-full blur-[150px] opacity-20 mix-blend-screen pointer-events-none"></div>

      {/* Container 
          Mobile: justify-between (spread out content to prevent overlap)
          Desktop: justify-center (center content)
          Update: Added md:pt-32 to push the visual center down on desktop
      */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-between md:justify-center min-h-[100dvh] py-12 md:pb-0 md:pt-32">

        {/* Top Meta Info (Architectural Style) 
            Mobile: In-flow with margin-top
            Desktop: Absolute positioned lower to overlap title (top-[33vh]) + Horizontal Line
        */}
        <div className="w-full flex justify-between items-start z-20 mix-blend-difference border-t border-white/10 pt-4 mt-16 md:absolute md:top-[33vh] md:left-0 md:w-full md:px-12 md:pt-4 md:mt-0 md:border-t md:border-white/20">
           <div className="text-[10px] md:text-xs font-mono tracking-[0.25em] uppercase text-white/70">
              Figure 01<span className="hidden md:inline">: The Intersection</span>
           </div>
           <div className="flex flex-col items-end text-[10px] md:text-xs font-mono tracking-[0.25em] uppercase text-white/70 text-right">
              <span>Archi-Prisma</span>
              <span>Est. 2026</span>
           </div>
        </div>

        {/* Main Composition */}
        <div className="relative flex flex-col items-center justify-center w-full select-none flex-grow md:flex-grow-0">
          
          {/* Huge AI (Background Layer) */}
          <div className="relative z-0 leading-none mix-blend-difference">
             <h1 className="text-[35vw] md:text-[28vw] font-black tracking-tighter text-white opacity-90 font-sans" 
                 style={{ 
                   lineHeight: 0.8,
                   textShadow: "0 0 80px rgba(255,255,255,0.05)"
                 }}>
               AI
             </h1>
          </div>

          {/* Overlapping Architecture (Foreground Layer) */}
          <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-exclusion w-full flex justify-center pointer-events-none">
             <h2 className="text-[12vw] md:text-[8vw] font-serif font-bold text-white tracking-[0.1em] leading-none whitespace-nowrap animate-fade-in-up flex items-center gap-3 md:gap-8">
               <span className="opacity-0 animate-fade-in-up [animation-delay:200ms]">建</span>
               <span className="w-2 h-2 md:w-4 md:h-4 bg-brand rounded-full shadow-[0_0_20px_#ff3300] animate-pulse"></span>
               <span className="opacity-0 animate-fade-in-up [animation-delay:400ms]">築</span>
             </h2>
          </div>

        </div>

        {/* Bottom Area (Text & CTA) 
            Mobile: Justified to end, regular padding
            Desktop: Positive margin (mt-12) to push it DOWN away from the title
        */}
        <div className="flex flex-col items-center justify-end gap-6 md:gap-10 z-20 w-full pb-4 md:pb-12 md:mt-12">
           
           {/* Concept Text */}
           <div className="max-w-3xl text-center mix-blend-difference px-2">
              <p className="text-sm md:text-lg font-serif leading-loose text-white/90 font-medium">
                 <span className="inline-block bg-brand/20 px-3 py-1 mb-3 font-bold text-white backdrop-blur-sm border border-brand/30">中小・個人設計者が「生き残る」ための武器を。</span><br/>
                 現役建築家Senaが開発した業務ツールと<br/>
                 実務ノウハウを共有する実践型コミュニティ
              </p>
           </div>

           {/* CTA & Scroll */}
           <div className="flex flex-col items-center gap-6">
              <a href="#pricing" className="group relative px-10 py-4 overflow-hidden border border-white/20 hover:border-brand/50 transition-colors duration-500 bg-black/40 backdrop-blur-md">
                 <div className="absolute inset-0 w-full h-full bg-white origin-bottom-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                 <span className="relative text-xs font-bold tracking-[0.2em] text-white group-hover:text-black transition-colors duration-500">JOIN THE CIRCLE</span>
              </a>
              
              <div className="flex flex-col items-center gap-2 opacity-50 cursor-pointer" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
                 <span className="text-[10px] text-white font-mono tracking-widest">SCROLL</span>
                 <div className="h-12 w-[1px] bg-white"></div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;