import React, { useState } from 'react';
import { Box, Twitter, Instagram, X } from 'lucide-react';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string) => {
    setActiveModal(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <footer className="bg-[#111] border-t border-black pt-20 pb-10 relative overflow-hidden text-white">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="md:col-span-4 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-white/10 p-2 rounded-lg border border-white/10">
                   <Box className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">AI×建築</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                建築実務の「めんどくさい」をAIでほぐし、<br/>
                設計者が本来のクリエイティビティを取り戻すための<br/>
                実践型コミュニティ＆ツールボックス。
              </p>
              <div className="flex gap-4">
                <a href="https://x.com/sena03448961" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-black transition-all">
                  {/* X Logo SVG */}
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                </a>
                <a href="https://www.instagram.com/sena_archisoft/?hl=ja" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-rose-400 hover:border-rose-500/50 transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div className="md:col-span-2 md:col-start-6">
              <h4 className="text-white font-bold mb-6">サイトマップ</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-brand transition-colors">特徴・メリット</a></li>
                <li><a href="#gallery" className="hover:text-brand transition-colors">制作事例</a></li>
                <li><a href="#offerings" className="hover:text-brand transition-colors">提供コンテンツ</a></li>
                <li><a href="#pricing" className="hover:text-brand transition-colors">プラン・料金</a></li>
              </ul>
            </div>

            {/* Links Column */}
            <div className="md:col-span-2">
              <h4 className="text-white font-bold mb-6">法的表記</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-brand transition-colors">運営会社</a></li>
                <li><button onClick={() => openModal('terms')} className="hover:text-brand transition-colors text-left">利用規約</button></li>
                <li><button onClick={() => openModal('privacy')} className="hover:text-brand transition-colors text-left">プライバシーポリシー</button></li>
                <li><button onClick={() => openModal('law')} className="hover:text-brand transition-colors text-left">特定商取引法に基づく表記</button></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-xs">
              &copy; 2025 Archi-Prisma Design works Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
               <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
               通常稼働中
            </div>
          </div>
        </div>
      </footer>

      {/* Terms Modal */}
      {activeModal === 'terms' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl p-8 shadow-2xl animate-fade-in-up text-slate-900">
            <button onClick={closeModal} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-black transition-colors">
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-200 pb-4">利用規約</h2>
            <div className="prose prose-sm prose-slate text-slate-600 space-y-4">
              <p>この利用規約（以下，「本規約」といいます。）は，AI ARCHITECTURE CIRCLE（以下，「本サークル」といいます。）が提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。</p>
              <h3 className="text-black font-bold text-lg mt-6">第1条（適用）</h3>
              <p>本規約は，ユーザーと本サークルとの間の本サービスの利用に関わる一切の関係に適用されるものとします。</p>
              <h3 className="text-black font-bold text-lg mt-6">第2条（利用登録）</h3>
              <p>登録希望者が本サークルの定める方法によって利用登録を申請し，本サークルがこれを承認することによって，利用登録が完了するものとします。</p>
              <h3 className="text-black font-bold text-lg mt-6">第3条（利用料金および支払方法）</h3>
              <p>ユーザーは，本サービスの有料部分の対価として，本サークルが別途定め，本ウェブサイトに表示する利用料金を，本サークルが指定する方法により支払うものとします。</p>
              <h3 className="text-black font-bold text-lg mt-6">第4条（禁止事項）</h3>
              <p>ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>本サークルのサーバーまたはネットワークの機能を破壊したり，妨害したりする行為</li>
                <li>本サービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl p-8 shadow-2xl animate-fade-in-up text-slate-900">
            <button onClick={closeModal} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-black transition-colors">
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-200 pb-4">プライバシーポリシー</h2>
            <div className="prose prose-sm prose-slate text-slate-600 space-y-4">
              <p>AI ARCHITECTURE CIRCLE（以下，「本サークル」といいます。）は，本ウェブサイト上で提供するサービス（以下，「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。</p>
              <h3 className="text-black font-bold text-lg mt-6">1. 個人情報の収集方法</h3>
              <p>本サークルは，ユーザーが利用登録をする際に氏名，住所，電話番号，メールアドレス，クレジットカード番号などの個人情報をお尋ねすることがあります。</p>
              <h3 className="text-black font-bold text-lg mt-6">2. 個人情報の利用目的</h3>
              <p>本サークルが個人情報を収集・利用する目的は，以下のとおりです。</p>
              <ul className="list-disc pl-5 space-y-1">
                 <li>本サービスの提供・運営のため</li>
                 <li>ユーザーからのお問い合わせに回答するため</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Law Modal */}
      {activeModal === 'law' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl p-8 shadow-2xl animate-fade-in-up text-slate-900">
            <button onClick={closeModal} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-black transition-colors">
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-200 pb-4">特定商取引法に基づく表記</h2>
            <div className="space-y-6 text-sm text-slate-600">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-100 pb-4"><div className="font-bold text-slate-900">販売業者</div><div className="md:col-span-2">Archi-Prisma Design works株式会社</div></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-100 pb-4"><div className="font-bold text-slate-900">運営統括責任者</div><div className="md:col-span-2">櫻本 聖成</div></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-100 pb-4"><div className="font-bold text-slate-900">販売価格</div><div className="md:col-span-2">月額5,000円（税込）</div></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-slate-100 pb-4"><div className="font-bold text-slate-900">支払方法</div><div className="md:col-span-2">クレジットカード決済（Stripe）</div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;