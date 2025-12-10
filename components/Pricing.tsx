import React, { useState } from 'react';
import { Check, Zap, ArrowRight, Video, Laptop } from 'lucide-react';

const Pricing: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://stripe-discord-pro-417218426761.asia-northeast1.run.app/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'エラーが発生しました');
      }

      window.location.href = data.url;
    } catch (err: any) {
      setError(err.message || 'ネットワークエラーが発生しました');
      setLoading(false);
    }
  };

  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-[50%] h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Value Prop */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1]">
              セミナー1回分で<br/>
              <span className="text-brand">すべて手に入る。</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed border-l-4 border-brand pl-6 font-medium">
              通常、実務レベルのAI講座やセミナーに参加すると3,000円〜100,000円かかります。<br/>
              このサークルなら、わずか5,000円で<span className="text-black font-bold">セミナーも、ツールも、コミュニティも</span>すべて使い放題。<br/>
              圧倒的なコストパフォーマンスです。
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Sena主催セミナーに無料招待</h4>
                  <p className="text-sm text-slate-600">
                    月額メンバーは追加費用ゼロで参加可能。当日参加できなくても、<span className="font-bold text-black border-b border-brand/30">アーカイブ動画（オンデマンド）が見放題</span>です。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center shrink-0">
                  <Laptop className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">開発ツールが使い放題</h4>
                  <p className="text-sm text-slate-600">
                    図面差分チェック「Revisio」など、実務支援ツールも無料で提供。ツール代だけで元が取れます。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Ticket */}
          <div className="lg:w-1/2 w-full">
            <div className="relative bg-black text-white p-1 clip-path-ticket transform transition-transform hover:-translate-y-2 duration-500 shadow-2xl shadow-black/20">
              {/* Decorative Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand/90 backdrop-blur-sm rotate-[-2deg] shadow-sm"></div>
              
              <div className="bg-white border-2 border-black p-8 md:p-12 relative overflow-hidden">

                <div className="mb-8">
                  <h3 className="font-bold text-slate-500 tracking-widest uppercase mb-2 text-sm">スタンダードプラン</h3>
                  <div className="flex items-baseline gap-1 text-black">
                    <span className="text-5xl md:text-7xl font-black tracking-tighter">¥5,000</span>
                    <span className="font-bold text-slate-500">/ 月 (税込)</span>
                  </div>
                  <p className="text-sm font-bold mt-2 text-brand flex items-center gap-2">
                    <Zap className="w-4 h-4 fill-current" />
                    ローンチ記念：初月無料キャンペーン中
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold text-slate-500 mb-1 uppercase">含まれるもの</p>
                    <ul className="text-sm font-bold text-black space-y-1">
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> 全セミナーへの無料参加</li>
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> アーカイブ動画 見放題</li>
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> Sena開発ツール 利用権</li>
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> Discordコミュニティ参加</li>
                    </ul>
                  </div>

                  <form onSubmit={handleSubmit} className="w-full mt-4">
                    <div className="mb-4 text-center bg-slate-50 p-3 rounded border border-slate-100">
                      <p className="text-sm font-bold text-slate-500 mb-1">一般: 月額 ¥5,000</p>
                      <p className="text-green-600 font-bold text-sm">学生: 月額 ¥2,000 <span className="text-xs font-normal text-slate-400 block sm:inline">(.ac.jp / .edu / .ed.jp)</span></p>
                    </div>

                    <input
                      type="email"
                      id="email-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="メールアドレスを入力"
                      required
                      className="w-full p-4 mb-4 bg-white border border-slate-300 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400 rounded-sm"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full group bg-black text-white py-5 text-lg font-bold flex items-center justify-center gap-4 hover:bg-brand transition-colors duration-300 shadow-lg cursor-pointer rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                         <span className="animate-pulse">処理中...</span>
                      ) : (
                        <>
                          <span>今すぐ参加</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    {error && (
                      <div className="text-brand text-sm font-bold mt-4 text-center">
                        {error}
                      </div>
                    )}
                  </form>
                  
                  <p className="text-center text-xs text-slate-400 font-medium">
                    ※いつでも解約可能 / 安心のStripe決済
                  </p>
                </div>
                
                {/* Barcode Decoration */}
                <div className="mt-8 pt-8 border-t-2 border-dashed border-slate-200 flex justify-between items-end opacity-70">
                   <div className="font-mono text-[10px] text-black">ID: 8829-AX-2025</div>
                   <div className="h-8 w-32 bg-[url('https://upload.wikimedia.org/wikipedia/commons/5/5d/UPC-A-036000291452.svg')] bg-cover bg-center"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;