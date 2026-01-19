import React from 'react';
import { CreditCard, Mail, MessageSquare, LogIn } from 'lucide-react';

const Flow: React.FC = () => {
  const steps = [
    {
      icon: <CreditCard className="w-6 h-6 text-brand" />,
      title: "参加申し込み",
      desc: "プランを選んでStripeで決済。初月無料キャンペーンもこちらで適用されます。"
    },
    {
      icon: <Mail className="w-6 h-6 text-brand" />,
      title: "招待メールが届く",
      desc: "決済完了後、Discordへの招待リンクがメールで自動送信されます。"
    },
    {
      icon: <LogIn className="w-6 h-6 text-brand" />,
      title: "コミュニティに入る",
      desc: "Discordに参加して、まずは自己紹介。ここからあなたのAI活用が始まります。"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-brand" />,
      title: "活動スタート！",
      desc: "ツールを使うもよし、動画を見るもよし。好きなスタイルで活用してください。"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">参加までの流れ</h2>
          <p className="text-slate-600">申し込みから参加まで、3分で完了します。</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-slate-100 -z-10 transform translate-y-4"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:border-brand/50 transition-colors z-10">
                  <div className="bg-brand/10 rounded-full p-2.5">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
                
                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute bottom-[-2rem] left-1/2 w-0.5 h-8 bg-slate-200 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flow;