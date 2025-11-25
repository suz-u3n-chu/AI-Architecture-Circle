
import React from 'react';
import { Quote } from 'lucide-react';

const Message: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-200 relative">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-brand/10" />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 leading-tight font-sans">
              大手ゼネコンだけが<br />
              「AIの恩恵」を受ける。<br />
              そんな未来は面白くない。
            </h2>
            
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-medium">
              <p>
                建築業界はいま、過渡期にあります。<br/>
                「2024年問題」による残業規制、慢性的な人手不足、そしてAI技術の爆発的進化。
              </p>
              <p>
                資金力のある大手組織は、自社で高価なシステムを開発し、AIを武器にし始めています。<br/>
                しかし、日本の建築を支えているのは、無数の中小設計事務所や工務店、そして個人のアトリエです。
              </p>
              <p>
                <span className="bg-brand/10 px-1 font-bold text-slate-900">「生き残るのが難しい中小こそ、AIという武器を持つべきだ」</span>
              </p>
              <p>
                私は本気でそう思っています。<br/>
                だからこそ、私が実務で使っているツールも、ノウハウも、全てここで公開します。<br/>
                ここは単なる勉強会ではありません。私たちが生き残り、そして勝つための「同盟」です。
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                alt="Sena" 
                className="w-14 h-14 rounded-full border border-slate-200 grayscale"
              />
              <div>
                <p className="text-sm font-bold text-slate-900">櫻本 聖成 / Sena Sakuramoto</p>
                <p className="text-xs text-slate-500 font-mono">Archi-Prisma Design works Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
