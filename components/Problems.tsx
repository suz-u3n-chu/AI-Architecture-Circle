import React from 'react';
import { AlertTriangle, FileX, Clock, UserX } from 'lucide-react';

const Problems: React.FC = () => {
  const problems = [
    {
      icon: <Clock className="w-6 h-6 text-brand" />,
      title: "残業規制で回らない",
      text: "残業規制が厳しくなった今、今のままのやり方で業務を回せる自信がない。"
    },
    {
      icon: <FileX className="w-6 h-6 text-brand" />,
      title: "赤チェックが終わらない",
      text: "図面の整合性確認や変更チェック。地味だけど時間が溶ける作業をなんとかしたい。"
    },
    {
      icon: <UserX className="w-6 h-6 text-brand" />,
      title: "社内に相談相手がいない",
      text: "AIを試したいけど、周りは無関心。「勝手にやってろ」と言われるのが辛い。"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand" />,
      title: "実務への使い方が不明",
      text: "画像生成AIですごい絵は作れるけど、実際の図面や業務にどう組み込むかわからない。"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3 sticky top-24">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              こんな悩み、<br />
              <span className="text-brand">抱えていませんか？</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              建築実務は「めんどくさい」の連続です。<br />
              でも、その悩みはAIとコミュニティの力で解決できます。<br />
              もう、一人で抱え込むのは終わりにしましょう。
            </p>
            <div className="hidden md:block h-1 w-20 bg-brand rounded-full"></div>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((item, index) => (
              <div key={index} className="group bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-brand/40 hover:bg-white hover:shadow-lg transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl border border-slate-200 group-hover:border-brand/50 transition-colors shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;