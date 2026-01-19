import React from 'react';

const Roadmap: React.FC = () => {
  const phases = [
    {
      id: "Phase 1",
      title: "ローンチ〜初期メンバー",
      items: ["セミナー開催と初期メンバー獲得", "Discordコミュニティ基盤整備", "SpotPDFなど既存ツール連携"]
    },
    {
      id: "Phase 2",
      title: "コンテンツ充実・標準化",
      items: ["月次・週次コンテンツの型化", "共通テンプレート・チェックリスト整備", "メンバー案件のケーススタディ蓄積"]
    },
    {
      id: "Phase 3",
      title: "企業向け展開・拡張",
      items: ["企業単位導入プラン開始", "AI×建築ツール群の新規開発", "サークル発のB2B案件拡大"]
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">2026 Roadmap</h2>
          <p className="text-slate-400">コミュニティ内での検証から、ツール化・標準化まで。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-800 z-0"></div>

          {phases.map((phase, index) => (
            <div key={index} className="relative z-10">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 h-full hover:border-slate-700 transition-colors">
                <div className="w-12 h-12 bg-slate-800 border-4 border-slate-950 rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 mx-auto md:mx-0 relative z-10">
                  {index + 1}
                </div>
                <span className="text-brand-500 text-xs font-bold uppercase tracking-wider mb-2 block">
                  {phase.id}
                </span>
                <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="block w-1 h-1 bg-slate-500 rounded-full mt-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;