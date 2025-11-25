
import React from 'react';
import { CheckCircle2, Rocket, ShieldCheck } from 'lucide-react';

const Target: React.FC = () => {
  return (
    <section id="target" className="py-20 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">こんな人におすすめです</h2>
          <p className="text-slate-600">「生き残り」をかける実務者から、「飛躍」を狙う学生まで。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Persona A: Survival */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 relative overflow-hidden group hover:bg-white hover:shadow-xl hover:border-brand/30 transition-all">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="w-32 h-32 text-slate-400" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-slate-900 mb-1">中小設計事務所・個人の方</h3>
              <p className="text-slate-500 text-sm mb-6 font-mono">For Survival</p>
              <ul className="space-y-4">
                {[
                  "大手に負けない「生産性」を手に入れたい",
                  "人手不足で、図面チェックや事務作業に追われている",
                  "AIの法的リスクが怖くて導入できていない",
                  "社内に相談できる相手がおらず孤独を感じている"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Persona B: Ambition */}
          <div className="bg-white rounded-3xl p-8 border border-brand/20 relative overflow-hidden group hover:shadow-xl hover:shadow-brand/5 transition-all shadow-[0_0_30px_rgba(0,0,0,0.03)]">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Rocket className="w-32 h-32 text-brand" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-slate-900 mb-1">野心ある若手・学生の方</h3>
              <p className="text-brand text-sm mb-6 font-mono">For Ambition</p>
              <ul className="space-y-4">
                {[
                  "同世代と圧倒的な差別化を図りたい",
                  "自分のアイデアを高速で形にしたい",
                  "就活や独立に向けた強力なポートフォリオを作りたい",
                  "最先端のワークフローを学びたい"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Target;
