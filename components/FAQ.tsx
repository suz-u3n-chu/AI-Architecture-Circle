import React from 'react';
import { Plus } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "AI初心者ですが、ついていけますか？",
      a: "もちろんです。むしろ「これから始める人」のための場所です。基本的なツールの導入から実務への落とし込みまで、ステップバイステップで解説するコンテンツを用意しています。"
    },
    {
      q: "Mac/Windowsどちらでも大丈夫ですか？",
      a: "はい。Webブラウザで完結するツールが中心ですが、一部の生成AI（Stable Diffusionローカル環境など）はGPU搭載のWindows機が推奨される場合があります。その際のPC選びもサポートします。"
    },
    {
      q: "著作権や法的リスクが心配です。",
      a: "当サークルでは「実務で使える」を基準にしているため、著作権や商用利用のガイドライン順守を徹底しています。AI学習防止対策や、権利クリアなツールの選び方も学べます。"
    },
    {
      q: "領収書の発行は可能ですか？",
      a: "はい。Stripe（決済システム）よりインボイス対応の領収書が自動発行されます。経費としての計上が可能です。"
    },
    {
      q: "年間プランと月額プランの違いは何ですか？",
      a: "コンテンツ・ツール利用は完全に同一です。年間プラン（¥50,000/年）は月あたり約¥4,167となり、月額プラン比で2ヶ月分（¥10,000）お得です。長期的にご活用いただける方には年間プランをおすすめしています。"
    },
    {
      q: "IT導入補助金は使えますか？",
      a: "当社のAIツール（KOKOME、KOUZOU、SpotPDF等）をIT導入補助金の対象ツールとして登録申請準備中です。補助率最大3/4で、導入コストを大幅に抑えられます。詳細はお気軽にお問い合わせください。"
    },
    {
      q: "法改正の情報は最新ですか？",
      a: "2025年4月施行の最新情報を常にアップデートしています。法改正に伴う実務への影響もいち早くお届けします。"
    },
    {
      q: "返金保証はありますか？",
      a: "いつでも解約可能です。解約後も当該請求期間の終了までサービスをご利用いただけます。安心してお試しください。"
    },
    {
      q: "セミナーに参加できなかった場合は？",
      a: "録画アーカイブを会員限定で配信しています。いつでも視聴可能ですので、ご自身のペースで学習できます。"
    },
    {
      q: "他のコミュニティとの違いは？",
      a: "AIの一般論ではなく、建築確認申請・省エネ計算・構造計算に特化した実務ツール付きのコミュニティです。すぐに現場で使えるノウハウとツールを提供します。"
    },
    {
      q: "学生プランの対象は？",
      a: "大学・大学院・専門学校等に在籍中の方が対象です。.ac.jp / .edu / .ed.jp ドメインのメールアドレスでの登録が必要です。卒業後は通常プランへの切り替えをお願いしています。"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">よくある質問</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:text-brand transition-colors">
                  <span>{item.q}</span>
                  <span className="transition group-open:rotate-45">
                    <Plus className="w-5 h-5 text-slate-400 group-hover:text-brand" />
                  </span>
                </summary>
                <div className="text-slate-600 px-6 pb-6 text-sm leading-relaxed animate-fade-in-up">
                  {item.a}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;