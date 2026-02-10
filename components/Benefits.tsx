import React from 'react';
import { Clock, Laptop, Users2 } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Laptop className="w-8 h-8 text-brand" />,
      title: "ツール・セミナーが追加費用ゼロ",
      desc: "Archi-Prismaが開発した実務AIソフト（図面チェック等）が使い放題。さらに通常3,000円〜のセミナー参加も、アーカイブ視聴もメンバーは全て無料。これだけで会費以上の価値があります。"
    },
    {
      icon: <Clock className="w-8 h-8 text-brand" />,
      title: "業務時間を「効率化」できる",
      desc: "AIに単純作業を任せることで、残業を減らせます。空いた時間は、本来やりたかったデザインや、家族との時間に使ってください。"
    },
    {
      icon: <Users2 className="w-8 h-8 text-brand" />,
      title: "「仲間」が見つかる",
      desc: "「周りに話せる人がいない」という孤独から解放されます。同じ志を持つ建築プレイヤーと、成功事例も失敗談もシェアできる環境があります。"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand font-bold tracking-wider text-sm uppercase mb-2 block animate-fade-in-up">Merits</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-fade-in-up [animation-delay:100ms]">
            サークルに参加する<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">3つのメリット</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;