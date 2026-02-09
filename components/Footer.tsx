import React from 'react';
import { Box, Twitter, Instagram } from 'lucide-react';

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
              <li><a href="https://archi-prisma.co.jp" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">運営会社</a></li>
              <li><a href="/privacy.html" className="hover:text-brand transition-colors">プライバシーポリシー</a></li>
              <li><a href="/tokushoho.html" className="hover:text-brand transition-colors">特定商取引法に基づく表記</a></li>
              <li><a href="https://archi-prisma.co.jp/security-policy" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">情報セキュリティ方針</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-xs">
            &copy; 2026 Archi-Prisma Design works Inc. All rights reserved.
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