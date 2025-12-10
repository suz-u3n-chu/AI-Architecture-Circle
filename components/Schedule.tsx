import React from 'react';
import { Calendar, Video, Download, MessageSquare } from 'lucide-react';

const Schedule: React.FC = () => {
  const weeks = [
    {
      week: "WEEK 1",
      title: "Live Webinar",
      desc: "実務ワークフロー実演（60分）アーカイブ有。",
      icon: <Video className="w-5 h-5 text-white" />,
      bg: "bg-brand"
    },
    {
      week: "WEEK 2",
      title: "Tool & Prompt Drop",
      desc: "最新のプロンプト辞書やツールのアプデ配布。",
      icon: <Download className="w-5 h-5 text-slate-600" />,
      bg: "bg-slate-200"
    },
    {
      week: "WEEK 3",
      title: "Case Study Review",
      desc: "メンバーの事例添削・Q&Aセッション。",
      icon: <MessageSquare className="w-5 h-5 text-slate-600" />,
      bg: "bg-slate-200"
    },
    {
      week: "WEEK 4",
      title: "Monthly Recap",
      desc: "1ヶ月のAIニュースまとめと翌月の活動計画。",
      icon: <Calendar className="w-5 h-5 text-slate-600" />,
      bg: "bg-slate-200"
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">活動スケジュール例</h2>
            <p className="text-slate-600">
              「入って何をするの？」を迷わせない。<br/>
              毎月、確実にインプットとアップデートができるサイクルを作っています。
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden md:block z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {weeks.map((item, index) => (
              <div key={index} className="relative z-10 group">
                {/* Mobile Connector */}
                <div className="absolute left-6 top-16 bottom-[-2rem] w-1 bg-slate-100 md:hidden"></div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${item.bg} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 tracking-widest">{item.week}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;