import React, { useEffect, useState } from 'react';
import { Check, Zap, ArrowRight, Video, Download, Laptop, Star, GraduationCap, Users } from 'lucide-react';

const Pricing: React.FC = () => {
  const [memberCount, setMemberCount] = useState<number>(28);

  useEffect(() => {
    fetch('https://stripe-discord-pro-417218426761.asia-northeast1.run.app/api/stats')
      .then(r => r.json())
      .then(data => { if (data.members) setMemberCount(data.members); })
      .catch(() => {});
  }, []);

  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-[50%] h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: Value Prop */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-full mb-6">
              <Users className="w-4 h-4 text-brand" />
              <span className="text-sm font-bold text-slate-700">{memberCount}社以上が参加中</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1]">
              セミナー1回分で<br/>
              <span className="text-brand">すべて手に入る。</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed border-l-4 border-brand pl-6 font-medium">
              通常、実務レベルのAI講座やセミナーに参加すると3,000円〜100,000円かかります。<br/>
              このサークルなら、わずか5,000円で<span className="text-black font-bold">セミナーも、ツールも、コミュニティも</span>すべて使い放題。<br/>
              圧倒的なコストパフォーマンスです。
            </p>

            {/* Value comparison */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden mb-12">
              {/* Header */}
              <div className="bg-slate-100 px-6 py-3 border-b border-slate-200">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">個別で揃えた場合の月額</p>
              </div>

              {/* Priced items */}
              <div className="px-6 py-4">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-2.5 text-slate-600">KOZO（構造計算AI・月1棟）</td>
                      <td className="py-2.5 text-right">
                        <span className="text-slate-900 font-black text-lg line-through decoration-brand decoration-2">¥40,000</span>
                        <span className="text-slate-400 text-[10px] ml-1 block">※外注相当額</span>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-2.5 text-slate-600">AI活用セミナー（月1回）</td>
                      <td className="py-2.5 text-right"><span className="text-slate-800 font-bold line-through decoration-brand/60 decoration-2">¥5,000</span></td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-2.5 text-slate-600">Compass（工程管理・3席）</td>
                      <td className="py-2.5 text-right"><span className="text-slate-800 font-bold line-through decoration-brand/60 decoration-2">¥3,000</span></td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-2.5 text-slate-600">アーカイブ動画（見放題）</td>
                      <td className="py-2.5 text-right"><span className="text-slate-800 font-bold line-through decoration-brand/60 decoration-2">¥3,000</span></td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-2.5 text-slate-600">最新の建築・AI情報</td>
                      <td className="py-2.5 text-right"><span className="text-slate-800 font-bold line-through decoration-brand/60 decoration-2">¥6,000</span></td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-2.5 text-slate-600">SpotPDF（図面差分チェック）</td>
                      <td className="py-2.5 text-right"><span className="text-slate-800 font-bold line-through decoration-brand/60 decoration-2">¥500</span></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 text-slate-600">主宰 Sena と1on1面談（月3回・各20分）</td>
                      <td className="py-2.5 text-right"><span className="text-slate-800 font-bold line-through decoration-brand/60 decoration-2">¥15,000</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bonus items */}
              <div className="bg-slate-100/60 px-6 py-3 border-t border-slate-200">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">さらに含まれるもの</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-white px-2.5 py-1 rounded-full text-slate-600 border border-slate-200">KAKOME（現場写真指示書）</span>
                  <span className="bg-white px-2.5 py-1 rounded-full text-slate-600 border border-slate-200">会員限定Discord</span>
                  <span className="bg-white px-2.5 py-1 rounded-full text-slate-500 border border-dashed border-slate-300">AICommander <span className="text-[10px]">開発中</span></span>
                  <span className="bg-white px-2.5 py-1 rounded-full text-slate-500 border border-dashed border-slate-300">楽々省エネ計算 <span className="text-[10px]">開発中</span></span>
                  <span className="bg-white px-2.5 py-1 rounded-full text-slate-500 border border-dashed border-slate-300">今後の新ツールすべて</span>
                </div>
              </div>

              {/* Total */}
              <div className="px-6 py-4 border-t-2 border-slate-300 flex justify-between items-center">
                <span className="text-slate-500 font-bold text-sm">通常合計</span>
                <span className="text-slate-900 font-black text-4xl line-through decoration-brand decoration-[3px]">¥72,500<span className="text-base font-bold">/月〜</span></span>
              </div>

              {/* Circle price */}
              <div className="bg-black px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold text-sm">サークルなら</span>
                </div>
                <div className="text-right">
                  <span className="text-brand font-black text-3xl">¥5,000</span>
                  <span className="text-white/60 text-sm font-bold">/月</span>
                </div>
              </div>
            </div>

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
                    図面差分チェック「SpotPDF」など、実務支援ツールも無料で提供。ツール代だけで元が取れます。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Plan Cards */}
          <div className="lg:w-1/2 w-full space-y-6">

            {/* Annual Plan - Recommended */}
            <div className="relative bg-black text-white p-1 transform transition-transform hover:-translate-y-2 duration-500 shadow-2xl shadow-black/20 rounded-2xl">
              {/* Recommended Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-brand text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  おすすめ・2ヶ月分お得
                </div>
              </div>

              <div className="bg-white border-2 border-brand rounded-xl p-8 md:p-10 relative overflow-hidden">
                <div className="mb-6">
                  <h3 className="font-bold text-brand tracking-widest uppercase mb-2 text-sm">年間プラン</h3>
                  <div className="flex items-baseline gap-1 text-black">
                    <span className="text-5xl md:text-6xl font-black tracking-tighter">¥50,000</span>
                    <span className="font-bold text-slate-500">/ 年 (税込)</span>
                  </div>
                  <p className="text-sm text-brand font-bold mt-2">月あたり約¥4,167 — 2ヶ月分お得！</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                    <p className="text-xs font-bold text-slate-500 mb-1 uppercase">含まれるもの</p>
                    <ul className="text-sm font-bold text-black space-y-1">
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> 全セミナーへの無料参加</li>
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> アーカイブ動画 見放題</li>
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> Archi-Prisma開発ツール 利用権</li>
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> Discordコミュニティ参加</li>
                    </ul>
                  </div>

                  <a href="https://stripe-discord-pro-417218426761.asia-northeast1.run.app/?plan=yearly" onClick={() => window.gtag?.('event', 'checkout_click', { plan: 'yearly' })} className="w-full group bg-brand text-white py-5 text-lg font-bold flex items-center justify-center gap-4 hover:bg-black transition-colors duration-300 shadow-lg rounded-lg">
                    <span>年間プランで登録する</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Standard Plan - Current main plan */}
            <div className="relative bg-black text-white p-1 transform transition-transform hover:-translate-y-2 duration-500 shadow-2xl shadow-black/20 rounded-2xl">
              <div className="bg-white border-2 border-black rounded-xl p-8 md:p-10 relative overflow-hidden">
                <div className="mb-6">
                  <h3 className="font-bold text-slate-500 tracking-widest uppercase mb-2 text-sm">スタンダードプラン</h3>
                  <div className="flex items-baseline gap-1 text-black">
                    <span className="text-5xl md:text-6xl font-black tracking-tighter">¥5,000</span>
                    <span className="font-bold text-slate-500">/ 月 (税込)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                    <p className="text-xs font-bold text-slate-500 mb-1 uppercase">含まれるもの</p>
                    <ul className="text-sm font-bold text-black space-y-1">
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> 全セミナーへの無料参加</li>
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> アーカイブ動画 見放題</li>
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> Archi-Prisma開発ツール 利用権</li>
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> Discordコミュニティ参加</li>
                    </ul>
                  </div>

                  <a href="https://stripe-discord-pro-417218426761.asia-northeast1.run.app/?plan=monthly" onClick={() => window.gtag?.('event', 'checkout_click', { plan: 'monthly' })} className="w-full group bg-black text-white py-5 text-lg font-bold flex items-center justify-center gap-4 hover:bg-brand transition-colors duration-300 shadow-lg rounded-lg">
                    <span>メンバー登録する</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Student Plan */}
            <div className="relative bg-slate-200 p-1 transform transition-transform hover:-translate-y-2 duration-500 shadow-lg rounded-2xl">
              <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-10 relative overflow-hidden">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-brand" />
                    <h3 className="font-bold text-slate-500 tracking-widest uppercase text-sm">学生プラン</h3>
                  </div>
                  <div className="flex items-baseline gap-1 text-black">
                    <span className="text-5xl md:text-6xl font-black tracking-tighter">¥2,000</span>
                    <span className="font-bold text-slate-500">/ 月 (税込)</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-2">学割：.ac.jp / .edu / .ed.jp ドメインのメールアドレス対象</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                    <p className="text-xs font-bold text-slate-500 mb-1 uppercase">含まれるもの</p>
                    <ul className="text-sm font-bold text-black space-y-1">
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> 全セミナーへの無料参加</li>
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> アーカイブ動画 見放題</li>
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> Archi-Prisma開発ツール 利用権</li>
                      <li className="flex items-center gap-2"><Check className="w-3 h-3 text-brand"/> Discordコミュニティ参加</li>
                    </ul>
                  </div>

                  <a href="https://stripe-discord-pro-417218426761.asia-northeast1.run.app/?plan=student" onClick={() => window.gtag?.('event', 'checkout_click', { plan: 'student' })} className="w-full group bg-slate-700 text-white py-5 text-lg font-bold flex items-center justify-center gap-4 hover:bg-brand transition-colors duration-300 shadow-lg rounded-lg">
                    <span>学生プランで登録する</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 font-medium">
              ※いつでも解約可能 / 安心のStripe決済
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
