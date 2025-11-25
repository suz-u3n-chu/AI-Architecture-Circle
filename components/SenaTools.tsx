
import React from 'react';
import { ScanEye, Layers, ArrowRight, FileCheck } from 'lucide-react';

const SenaTools: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-cad opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center mb-20">
          <div className="md:w-1/2">
            <span className="inline-block py-1 px-3 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold tracking-widest uppercase mb-6">
              Exclusive Tools
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              会員限定の<br />
              <span className="text-brand">「武器」</span>を配ります。
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              サークル会員は、Senaが開発した実務特化型アプリケーションを<span className="text-brand font-bold">追加料金なし</span>で利用可能です。
              <br/>
              市販のSaaSなら月額数万円するレベルの機能を、あなたのデスクトップへ。
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
             <div className="text-right">
                <p className="text-9xl font-black text-slate-200 leading-none select-none -mb-10">FREE</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-2">Included in Membership</p>
             </div>
          </div>
        </div>

        <div className="space-y-24">
          
          {/* Tool 1: Revisio */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-white border border-slate-200 rounded-3xl shadow-xl transform rotate-1 group-hover:rotate-0 transition-all duration-500"></div>
            <div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
              
              {/* UI Mockup Area */}
              <div className="md:w-3/5 bg-slate-100 p-8 border-r border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand"></div>
                {/* Fake UI */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs font-mono text-slate-400">Revisio v2.0 - Diff Check</div>
                  </div>
                  <div className="flex gap-4 h-48">
                    <div className="flex-1 bg-slate-50 border border-slate-200 rounded p-2 relative">
                      <div className="absolute top-2 left-2 text-[10px] text-slate-400">OLD VER</div>
                      <div className="mt-4 space-y-2">
                        <div className="h-2 bg-slate-200 w-3/4"></div>
                        <div className="h-2 bg-slate-200 w-1/2"></div>
                        <div className="h-20 border-2 border-dashed border-slate-300 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-slate-50 border border-slate-200 rounded p-2 relative">
                       <div className="absolute top-2 left-2 text-[10px] text-brand font-bold">NEW VER</div>
                       <div className="mt-4 space-y-2">
                        <div className="h-2 bg-slate-200 w-3/4"></div>
                        <div className="h-2 bg-brand/20 w-1/2"></div> {/* Changed */}
                        <div className="h-20 border-2 border-brand/50 bg-brand/5 rounded relative">
                            <div className="absolute -top-2 -right-2 bg-brand text-white text-[8px] px-1 rounded">CHANGED</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                   <div className="bg-black text-white text-xs font-mono px-4 py-2 rounded shadow-lg flex items-center gap-2">
                      <ScanEye className="w-4 h-4 text-brand" />
                      <span>差分検出完了: 3箇所</span>
                   </div>
                </div>
              </div>

              {/* Description Area */}
              <div className="md:w-2/5 p-10 flex flex-col justify-center">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                  <ScanEye className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Revisio</h3>
                <p className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">図面差分高速チェックツール</p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  「どこが変わった？」を目視で探す時間はもう終わりです。新旧のPDF図面を放り込むだけで、変更箇所をAIが自動で赤入れして抽出。確認申請の変更届や、現場への指示図作成が数秒で完了します。
                </p>
                <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <FileCheck className="w-4 h-4 text-brand" /> PDF / 画像データ対応
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <FileCheck className="w-4 h-4 text-brand" /> 微細なズレも自動補正
                    </li>
                </ul>
                <button className="text-brand font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                  デモ動画を見る <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

          {/* Tool 2: PlanSorter (Coming Soon) */}
          <div className="relative group opacity-90">
            <div className="relative bg-slate-50 rounded-2xl border border-dashed border-slate-300 overflow-hidden flex flex-col md:flex-row-reverse">
              
              {/* UI Mockup Area */}
              <div className="md:w-3/5 bg-white/50 p-8 border-l border-slate-200 relative flex items-center justify-center">
                 <div className="absolute inset-0 bg-grid-cad opacity-20"></div>
                 <div className="text-center">
                    <Layers className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <div className="inline-block bg-slate-200 text-slate-600 text-xs font-bold px-3 py-1 rounded-full">
                        In Development
                    </div>
                 </div>
              </div>

              {/* Description Area */}
              <div className="md:w-2/5 p-10 flex flex-col justify-center">
                <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-slate-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">PlanSorter</h3>
                <p className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">図面自動整理・リネームAI</p>
                <p className="text-slate-600 leading-relaxed">
                  バラバラのファイル名で送られてくる図面データを、AIが中身を解析して自動でリネーム＆フォルダ分け。「01_平面図」「02_立面図」など、指定したルールで一瞬で整理します。
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SenaTools;
