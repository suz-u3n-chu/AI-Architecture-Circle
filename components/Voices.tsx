import React from 'react';
import { Quote } from 'lucide-react';

const Voices: React.FC = () => {
  const voices = [
    {
      role: "意匠設計事務所 代表 (40代)",
      text: "今まで赤チェックに費やしていた時間が嘘のようです。AIが差分を瞬時に出してくれるおかげで、スタッフも私も本来の設計業務に集中できるようになりました。「もっと早く知りたかった」の一言です。",
      tag: "業務効率化"
    },
    {
      role: "フリーランス建築家 (20代)",
      text: "独立したてで相談相手がおらず不安でしたが、ここには同じ目線で議論できる仲間がいます。AI活用術だけでなく、実務の悩みも相談できるのが本当に心強いです。",
      tag: "コミュニティ"
    },
    {
      role: "工務店 設計部 (30代)",
      text: "施主様へのプレゼン資料作成にMidjourneyを導入しました。提案スピードが圧倒的に上がり、成約率もアップ。具体的なプロンプトまで共有してもらえるので、明日からすぐに使えます。",
      tag: "プレゼン力"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">先行メンバーの声</h2>
          <p className="text-slate-600">セミナー・β版参加者のリアルな感想をご紹介します。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {voices.map((voice, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 relative shadow-sm hover:shadow-lg transition-shadow">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100" />
              <div className="inline-block px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold mb-6">
                {voice.tag}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 text-sm font-medium">
                "{voice.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">
                  User
                </div>
                <div>
                  <p className="text-slate-900 text-sm font-bold">{voice.role}</p>
                  <p className="text-slate-400 text-xs">先行モニター参加</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Voices;