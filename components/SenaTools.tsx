import React from 'react';
import { ScanEye, Compass, ArrowRight, FileCheck, LassoSelect, PenTool } from 'lucide-react';

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

        <div className="grid grid-cols-1 gap-12">
          
          {/* Tool 1: SpotPDF */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-white border border-slate-200 rounded-3xl shadow-xl transform rotate-1 group-hover:rotate-0 transition-all duration-500"></div>
            <div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
              
              <div className="md:w-3/5 bg-slate-100 p-8 border-r border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand"></div>
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs font-mono text-slate-400">SpotPDF v2.0 - Diff Check</div>
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
                        <div className="h-2 bg-brand/20 w-1/2"></div>
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

              <div className="md:w-2/5 p-10 flex flex-col justify-center">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                  <ScanEye className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">SpotPDF</h3>
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

          {/* Tool 2: KAKOME (Markup Tool) */}
          <div className="relative group">
            <div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="md:w-3/5 bg-slate-100 p-8 border-r border-slate-200 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-cad opacity-20"></div>
                
                {/* Visual Illustration: Drawing a Circle on Grid */}
                <div className="relative w-full max-w-sm aspect-video bg-white rounded-lg border border-slate-200 shadow-inner p-4 overflow-hidden">
                   <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 200 120" className="w-full h-full">
                        <path 
                          d="M40,60 Q45,20 100,20 Q155,20 160,60 Q155,100 100,100 Q45,100 40,60" 
                          fill="rgba(255, 51, 0, 0.1)" 
                          stroke="#ff3300" 
                          strokeWidth="3" 
                          strokeDasharray="400" 
                          strokeDashoffset="400"
                          className="animate-[draw_2s_ease-in-out_infinite]"
                        />
                        <circle cx="40" cy="60" r="4" fill="#ff3300" className="animate-[movePen_2s_linear_infinite]" />
                      </svg>
                   </div>
                   <div className="absolute top-4 left-4 p-2">
                     <PenTool className="w-4 h-4 text-brand" />
                   </div>
                   <div className="absolute bottom-4 right-4 flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse [animation-delay:200ms]"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse [animation-delay:400ms]"></div>
                   </div>
                </div>
              </div>
              <div className="md:w-2/5 p-10 flex flex-col justify-center">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                  <LassoSelect className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">KAKOME</h3>
                <p className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">指で囲んで、即PDF。写真指示の革命</p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  気になる箇所を指でぐるっと囲むだけ。自動で「番号付きラベル」が付与され、9種類の指示タイプから色分け選択が可能。現場でボタン一つでPDF報告書が完成。事務所に戻ってExcel作業をする時間は、もう必要ありません。
                </p>
                <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div> 解体・撤去
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div> 温存
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div> 修繕・交換
                    </li>
                    <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div> 塗装・清掃
                    </li>
                </ul>
                <a 
                  href="https://note.com/sena_aiarchitect/n/n210b9291566d" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-bold hover:bg-brand transition-all shadow-md group"
                >
                  詳細を見る <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Tool 3: COMPASS */}
          <div className="relative group">
            <div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col md:flex-row-reverse shadow-lg hover:shadow-xl transition-all duration-300">
              
              <div className="md:w-3/5 bg-slate-900 p-8 border-l border-slate-200 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                <div className="w-full max-w-sm bg-slate-800 rounded-xl border border-slate-700 shadow-2xl p-4 relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex gap-4 mb-4">
                      <div className="w-1/4 h-20 bg-slate-700/50 rounded-lg animate-pulse"></div>
                      <div className="w-3/4 space-y-2">
                          <div className="h-4 bg-brand/20 rounded w-1/3"></div>
                          <div className="h-2 bg-slate-600 rounded w-full"></div>
                          <div className="h-2 bg-slate-600 rounded w-5/6"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-24 bg-slate-700/30 rounded-lg border-t-2 border-blue-500 p-2"><div className="h-1 w-8 bg-slate-600 rounded"></div></div>
                      <div className="h-24 bg-slate-700/30 rounded-lg border-t-2 border-yellow-500 p-2"><div className="h-1 w-8 bg-slate-600 rounded"></div></div>
                      <div className="h-24 bg-slate-700/30 rounded-lg border-t-2 border-green-500 p-2"><div className="h-1 w-8 bg-slate-600 rounded"></div></div>
                    </div>
                </div>
              </div>

              <div className="md:w-2/5 p-10 flex flex-col justify-center">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">COMPASS</h3>
                <p className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider">AI建築プロジェクト管理システム</p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  建築プロジェクトの「情報・図面・進捗」を1ページに集約。汎用ツールでは管理しきれない建築業務に特化した様々な管理を搭載。迷わないUIで、実務の混乱をゼロにします。
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded border border-slate-200">BIM級の管理体験</span>
                  <span className="text-xs font-bold px-2 py-1 bg-brand/10 text-brand rounded border border-brand/20">Coming Soon</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes movePen {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        @keyframes drawCircle { to { stroke-dashoffset: 0; } }
      `}</style>
    </section>
  );
};

export default SenaTools;