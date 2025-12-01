import React from 'react';
import { Twitter, Instagram, Building2 } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-1 md:p-2 border border-slate-200 shadow-sm">
            <div className="bg-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center md:items-start">
              
              {/* Avatar Column */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="w-32 h-32 md:w-40 md:h-40 relative mb-6 mx-auto md:mx-0">
                  <img 
                    src="./profile.JPEG" 
                    alt="Sena Sakuramoto" 
                    className="w-full h-full object-cover rounded-2xl border border-slate-200 shadow-lg"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-black p-2 rounded-lg border border-slate-800">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex gap-3 justify-center md:justify-start">
                  <a href="https://x.com/sena03448961" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 rounded-full hover:bg-black hover:text-white transition-all text-slate-500">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/sena_archisoft/?hl=ja" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 rounded-full hover:bg-rose-500 hover:text-white transition-all text-slate-500">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              {/* Content Column */}
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-brand/10 border border-brand/20 rounded text-xs font-bold text-brand mb-4">
                  FOUNDER / ARCHITECT
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">櫻本 聖成 <span className="text-lg text-slate-500 font-normal ml-2">Sena Sakuramoto</span></h3>
                <p className="text-slate-500 text-sm mb-6 font-medium">Archi-Prisma Design works株式会社 代表取締役</p>
                
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    建築設計事務所を経営しながら、ホテル・商業施設・都市開発などの実プロジェクトでAI活用を実践。「AI×建築」の実務ノウハウを体系化し、業界全体の生産性向上を目指す。
                  </p>
                  <p>
                    「AIで建築を変える」を信念に、中小〜個人の設計者が武器を持てるコミュニティを運営。
                  </p>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-100 flex flex-wrap gap-8 text-sm">
                  <div>
                    <span className="block text-slate-400 text-xs mb-1 uppercase tracking-wider">STYLE</span>
                    <span className="text-slate-900 font-bold">「建築」と「AI」の通訳</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 text-xs mb-1 uppercase tracking-wider">PHILOSOPHY</span>
                    <span className="text-slate-900 font-bold">クリエイティブな時間を、設計者に取り戻す</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;