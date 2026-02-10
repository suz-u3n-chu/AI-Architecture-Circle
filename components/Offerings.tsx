
import React, { useRef, useState } from 'react';
import { MessageSquare, LayoutTemplate, Database, Zap, ArrowRight, FileCheck, Users, ArrowUpRight, Laptop } from 'lucide-react';

const Offerings: React.FC = () => {
  return (
    <section id="offerings" className="py-32 bg-slate-50 relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand font-bold tracking-wider text-sm uppercase mb-2 block">Contents</span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            「実践」に必要なものは<br />すべて揃っています
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            ツール、知識、仲間。建築実務を変えるための<br />
            エコシステムを、まるごと提供します。
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Large Item: Community */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 group relative bg-white rounded-3xl p-8 flex flex-col justify-between overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand/30 transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight className="w-6 h-6 text-brand" />
            </div>
            
            <div>
              <div className="w-12 h-12 bg-brand/10 border border-brand/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors">
                <Users className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3">Discordコミュニティ</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                ここがメインの活動場所です。日々のTips共有、AI活用の相談、成果物のレビューなど。
                困ったときはいつでも質問してください。Senaや仲間が答えます。
              </p>
              <div className="flex flex-wrap gap-2">
                {["#質問相談OK", "#成果物シェア", "#失敗談も歓迎"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-600 group-hover:border-brand/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 h-40 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden relative">
               {/* Mock Chat UI */}
               <div className="p-4 space-y-3">
                   <div className="flex gap-3 items-center opacity-50">
                       <div className="w-8 h-8 rounded-full bg-slate-300"></div>
                       <div className="h-2 bg-slate-200 rounded w-24"></div>
                   </div>
                   <div className="flex gap-3 items-center">
                       <div className="w-8 h-8 rounded-full bg-brand"></div>
                       <div className="space-y-1">
                           <div className="h-2 bg-slate-300 rounded w-32"></div>
                           <div className="h-2 bg-brand/20 rounded w-48"></div>
                       </div>
                   </div>
               </div>
            </div>
          </div>

          {/* Item: Tools (Sena Developed) - DIFFERENTIATION POINT */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 hover:border-brand/40 hover:shadow-xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-md">
                メンバーは無料
            </div>
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Laptop className="w-5 h-5 text-brand" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors">Archi-Prisma開発ツールが使い放題</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {/* Corrected 'class' to 'className' in the span below */}
              Senaを中心とするメンバーが実務のために開発した独自のAIソフト（図面差分チェック、積算補助、タスク管理連携など）を、<span className="text-brand font-bold">追加料金なし</span>で利用できます。ツール代だけで会費以上の価値があります。
            </p>
          </div>

          {/* Item: Knowledge Base */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all group">
            <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
              <Database className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">ナレッジ見放題</h3>
            <p className="text-slate-600 text-sm">
              用途別推奨プロンプト集、ワークフロー図、Notionテンプレート。自由にDLして使ってください。
            </p>
          </div>

          {/* Item: Webinars */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition-all group">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
              <LayoutTemplate className="w-5 h-5 text-emerald-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">LIVE勉強会</h3>
            <p className="text-slate-600 text-sm">
              月一回のライブ講義。「BIM×AI」など実務直結のテーマで実演します。アーカイブ視聴もOK。
            </p>
          </div>

          {/* Callout: Real Workflow */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-black rounded-3xl p-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-brand to-indigo-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
            <div className="bg-slate-900 rounded-[20px] p-8 h-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
                <div className="flex items-center gap-5">
                <div className="p-3 bg-brand rounded-full shadow-[0_0_20px_rgba(255,51,0,0.5)] animate-pulse-slow">
                    <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">senaの実案件ワークフローを公開</h3>
                    <p className="text-slate-400 text-sm mt-1">ホテル・商業・都市開発... 実際のプロジェクトでどうAIを使っているか、裏側まで全部見せます。</p>
                </div>
                </div>
                <a href="#pricing" className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-brand hover:text-white transition-all shrink-0 hover:shadow-lg hover:scale-105">
                アーカイブを見る <ArrowRight className="w-4 h-4" />
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offerings;
