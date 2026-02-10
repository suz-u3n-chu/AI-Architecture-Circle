import React from 'react';
import { Rocket, Users, MapPin, ArrowRight, Sparkles } from 'lucide-react';

const Roadmap: React.FC = () => {
  const phases = [
    {
      id: "01",
      title: "ローンチ〜初期メンバー",
      subtitle: "NOW",
      icon: <Rocket className="w-6 h-6" />,
      status: "進行中",
      items: ["セミナー開催と初期メンバー獲得", "Discordで日常的な情報交換の場を構築", "AIツール群の実務検証と改善"],
      color: "brand",
      active: true,
    },
    {
      id: "02",
      title: "繋がりを深める",
      subtitle: "NEXT",
      icon: <Users className="w-6 h-6" />,
      status: "準備中",
      items: ["メンバーが自主的に発言・相談する空気が生まれる", "要望やアイデアが自然と集まる場になる", "ケーススタディの蓄積と共有"],
      color: "blue-500",
      active: false,
    },
    {
      id: "03",
      title: "リアルで会う",
      subtitle: "GOAL",
      icon: <MapPin className="w-6 h-6" />,
      status: "計画中",
      items: ["オフラインイベント・交流会の開催", "メンバー間の協業プロジェクト推進", "AI×建築の未来を共につくるコミュニティへ"],
      color: "emerald-500",
      active: false,
    }
  ];

  return (
    <section id="roadmap" className="py-28 bg-slate-950 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/[0.03] rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-brand" />
            <span className="text-sm font-bold text-white/80 tracking-wider">ROADMAP</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1]">
            2026<br/>
            <span className="bg-gradient-to-r from-brand via-orange-400 to-yellow-400 bg-clip-text text-transparent">Growth Plan</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed font-medium">
            AIが進化するからこそ、対面の繋がりが価値を持つ。<br/>
            同じ志を持つ建築人が集まり、情報を交換し、<br className="hidden md:inline"/>
            時には一緒に仕事をする。
          </p>
          <p className="text-white/80 text-lg font-bold mt-4">
            本気のコミュニティを、共につくる。
          </p>
        </div>

        {/* Progress Bar - Desktop */}
        <div className="hidden lg:flex items-center justify-center gap-0 max-w-3xl mx-auto mb-16">
          {/* Node 1 - Active */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-brand rounded-full animate-ping opacity-20"></div>
              <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-black text-sm relative shadow-[0_0_30px_rgba(255,51,0,0.4)]">01</div>
            </div>
            <span className="text-brand text-[11px] font-bold tracking-widest">NOW</span>
          </div>
          {/* Line 1 */}
          <div className="flex-1 h-[2px] relative mx-2">
            <div className="absolute inset-0 bg-white/10"></div>
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-brand to-white/10"></div>
          </div>
          {/* Node 2 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/40 font-black text-sm">02</div>
            <span className="text-white/30 text-[11px] font-bold tracking-widest">NEXT</span>
          </div>
          {/* Line 2 */}
          <div className="flex-1 h-[2px] relative mx-2">
            <div className="absolute inset-0 bg-white/10"></div>
          </div>
          {/* Node 3 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/40 font-black text-sm">03</div>
            <span className="text-white/30 text-[11px] font-bold tracking-widest">GOAL</span>
          </div>
        </div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-5">

          {/* Phase 01 - Active: Stretch to match 02+03 height */}
          <div className="lg:col-span-5 relative group flex">
            {/* Glow behind */}
            <div className="absolute -inset-1 bg-brand/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative bg-white/[0.06] backdrop-blur-sm rounded-2xl border border-brand/30 overflow-hidden flex flex-col w-full">
              {/* Active indicator strip */}
              <div className="h-1 bg-gradient-to-r from-brand via-orange-500 to-yellow-500"></div>

              <div className="p-8 flex flex-col flex-1 relative">
                {/* Background number */}
                <span className="absolute top-4 right-5 text-[100px] font-black text-white/[0.04] leading-none select-none pointer-events-none">01</span>

                {/* Top row */}
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center text-brand">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <span className="relative flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                    </span>
                    <span className="text-brand text-xs font-bold tracking-wider">進行中</span>
                  </span>
                </div>

                {/* Title */}
                <p className="text-brand/60 text-[10px] font-bold tracking-[0.3em] uppercase mb-2 relative z-10">Phase 01 — Now</p>
                <h3 className="text-2xl font-black text-white mb-6 leading-tight relative z-10">
                  ローンチ〜<br className="hidden sm:inline"/>初期メンバー
                </h3>

                {/* Items */}
                <ul className="space-y-4 relative z-10">
                  {phases[0].items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 mt-0.5 text-brand flex-shrink-0" />
                      <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Spacer to fill remaining height */}
                <div className="flex-1"></div>
              </div>
            </div>
          </div>

          {/* Phase 02 + 03 stacked */}
          <div className="lg:col-span-7 space-y-5 flex flex-col">

            {/* Phase 02 */}
            <div className="relative group flex-1">
              <div className="absolute -inset-1 bg-brand/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] overflow-hidden hover:border-white/10 transition-colors duration-500 h-full">
                {/* Background number */}
                <span className="absolute bottom-3 right-5 text-[80px] font-black text-white/[0.03] leading-none select-none pointer-events-none">02</span>

                <div className="p-7 flex flex-col sm:flex-row sm:items-start gap-6 relative z-10">
                  {/* Left: Icon */}
                  <div className="flex sm:flex-col items-center gap-3 sm:gap-2">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-white/20 text-[10px] font-bold tracking-widest">PHASE 02</span>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-black text-white/80">繋がりを深める</h3>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/5 text-white/30 tracking-wider">準備中</span>
                    </div>
                    <ul className="space-y-2">
                      {phases[1].items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1 h-1 rounded-full bg-white/20 mt-2 flex-shrink-0"></span>
                          <span className="text-white/40 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 03 */}
            <div className="relative group flex-1">
              <div className="absolute -inset-1 bg-brand/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] overflow-hidden hover:border-white/10 transition-colors duration-500 h-full">
                {/* Background number */}
                <span className="absolute bottom-3 right-5 text-[80px] font-black text-white/[0.03] leading-none select-none pointer-events-none">03</span>

                <div className="p-7 flex flex-col sm:flex-row sm:items-start gap-6 relative z-10">
                  {/* Left: Icon */}
                  <div className="flex sm:flex-col items-center gap-3 sm:gap-2">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-white/20 text-[10px] font-bold tracking-widest">PHASE 03</span>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-black text-white/80">リアルで会う</h3>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/5 text-white/30 tracking-wider">計画中</span>
                    </div>
                    <ul className="space-y-2">
                      {phases[2].items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1 h-1 rounded-full bg-white/20 mt-2 flex-shrink-0"></span>
                          <span className="text-white/40 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
