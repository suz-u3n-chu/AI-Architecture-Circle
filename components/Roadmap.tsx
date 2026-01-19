import React from 'react';
import { Rocket, Layers, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

const Roadmap: React.FC = () => {
  const phases = [
    {
      id: "Phase 1",
      title: "ローンチ〜初期メンバー",
      icon: <Rocket className="w-6 h-6" />,
      status: "進行中",
      color: "brand",
      items: ["セミナー開催と初期メンバー獲得", "Discordコミュニティ基盤整備", "SpotPDFなど既存ツール連携"]
    },
    {
      id: "Phase 2",
      title: "コンテンツ充実・標準化",
      icon: <Layers className="w-6 h-6" />,
      status: "準備中",
      color: "blue",
      items: ["月次・週次コンテンツの型化", "共通テンプレート・チェックリスト整備", "メンバー案件のケーススタディ蓄積"]
    },
    {
      id: "Phase 3",
      title: "企業向け展開・拡張",
      icon: <Building2 className="w-6 h-6" />,
      status: "計画中",
      color: "emerald",
      items: ["企業単位導入プラン開始", "AI×建築ツール群の新規開発", "サークル発のB2B案件拡大"]
    }
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string; glow: string }> = {
    brand: { bg: "bg-brand/20", border: "border-brand", text: "text-brand", glow: "shadow-brand/30" },
    blue: { bg: "bg-blue-500/20", border: "border-blue-500", text: "text-blue-400", glow: "shadow-blue-500/30" },
    emerald: { bg: "bg-emerald-500/20", border: "border-emerald-500", text: "text-emerald-400", glow: "shadow-emerald-500/30" }
  };

  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-4 rounded-full bg-brand/10 border border-brand/30 text-brand text-xs font-bold tracking-widest uppercase mb-6">
            Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            2026 <span className="text-brand">Growth Plan</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            コミュニティ内での検証から、ツール化・標準化まで。<br/>
            共に成長するロードマップ。
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand via-blue-500 to-emerald-500 opacity-30 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {phases.map((phase, index) => {
              const colors = colorClasses[phase.color];
              return (
                <div key={index} className="relative group">
                  {/* Arrow between cards (desktop) */}
                  {index < phases.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-slate-600" />
                    </div>
                  )}

                  <div className={`relative bg-slate-900/80 backdrop-blur border-2 ${colors.border} border-opacity-30 rounded-3xl p-8 h-full transition-all duration-500 hover:border-opacity-100 hover:shadow-2xl ${colors.glow} group-hover:-translate-y-2`}>
                    {/* Phase Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center ${colors.text}`}>
                        {phase.icon}
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                        {phase.status}
                      </span>
                    </div>

                    {/* Phase Number */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-950 border-2 border-slate-800 rounded-xl flex items-center justify-center">
                      <span className={`text-lg font-black ${colors.text}`}>{index + 1}</span>
                    </div>

                    <span className={`${colors.text} text-xs font-bold uppercase tracking-wider mb-2 block`}>
                      {phase.id}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-6">{phase.title}</h3>

                    <ul className="space-y-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-3">
                          <CheckCircle2 className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;