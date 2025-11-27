import React from 'react';
import { Box, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
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
              <span className="text-xl font-bold text-white tracking-tight">AI×建築サークル</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              建築実務の「めんどくさい」をAIでほぐし、<br/>
              設計者が本来のクリエイティビティを取り戻すための<br/>
              実践型コミュニティ＆ツールボックス。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/50 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-rose-400 hover:border-rose-500/50 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all">
                <Linkedin className="w-4 h-4" />
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
              <li><a href="#" className="hover:text-brand transition-colors">利用規約</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">特定商取引法に基づく表記</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">メルマガ登録</h4>
            <p className="text-slate-400 text-xs mb-4">
              最新のAI建築ニュースやセミナー情報を不定期でお届けします。
            </p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="メールアドレス" 
                className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:border-brand transition-colors"
              />
              <button className="bg-brand text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-light transition-colors">
                登録する
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Archi-Prisma Design works Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
             <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
             通常稼働中
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;