import React from 'react';
import { Zap, PenTool, Users } from 'lucide-react';

const Concept: React.FC = () => {
  return (
    <section className="py-24 bg-bg-paper relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold tracking-widest uppercase mb-6">
                About The Circle
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                「AI×建築」を、<br/>
                机上の空論で終わらせない。
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-justify md:text-center font-medium">
                AI建築サークルは、画像生成AIで「きれいな絵」を作るだけのファンクラブではありません。<br className="hidden md:block"/>
                確認申請、法規チェック、積算、図面整合性の確認……。<br/>
                建築実務における<span className="text-black border-b-2 border-brand/30">「泥臭い作業」をAIで劇的に効率化</span>し、<br className="hidden md:block"/>
                設計者が本来のクリエイティビティを取り戻すための<br/>
                <span className="text-brand font-bold">「実務特化型コミュニティ」</span>です。
            </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Feature 1 */}
             <div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <PenTool className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">実務ツールの提供</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    汎用的なAIだけでなく、Senaを中心とするメンバーが開発した「建築実務専用ツール（図面チェック・管理等）」を提供。学ぶだけでなく、明日からの業務が物理的に楽になります。
                </p>
             </div>

             {/* Feature 2 */}
             <div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">実験と検証の場</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    「このAI、実務でどう使う？」をメンバー同士で検証。「すごかった」事例だけでなく、「使えなかった」失敗談も共有し、最短ルートで最適解を導き出します。
                </p>
             </div>

             {/* Feature 3 */}
             <div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">現役設計者の視点</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    エンジニアではなく「建築家」が運営しています。だからこそ、現場特有の悩み、法的なリスク、クライアントワークの機微を前提とした、地に足のついた議論が可能です。
                </p>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;