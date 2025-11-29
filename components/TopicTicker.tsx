
import React from 'react';
import { MessageCircle, Radio } from 'lucide-react';

const TopicTicker: React.FC = () => {
  const topics = [
    "【New】Revisio 2.1の差分検知精度検証レポート公開",
    "【Q&A】確認申請のAIチェックで指摘された項目の対応方法について",
    "【Gallery】Midjourney v7 alphaの建築パース試作を共有します",
    "【Event】今夜20時〜「BIM×AI」ワークフロー実演会（講師: sena）",
    "【Case】中小工務店でのAI導入成功事例インタビュー vol.3",
    "【Tool】COMPASS開発進捗：α版テストユーザー募集中",
  ];

  return (
    <div className="w-full bg-white border-y border-slate-200 relative z-20 overflow-hidden h-10 flex items-center">
      <div className="absolute left-0 z-10 bg-white px-4 h-full flex items-center gap-2 border-r border-slate-200">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
        </span>
        <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">Live Topics</span>
      </div>
      
      <div className="flex animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
        {[...topics, ...topics].map((topic, i) => (
          <div key={i} className="flex items-center gap-2 mx-6">
            <MessageCircle className="w-3 h-3 text-slate-400" />
            <span className="text-xs font-medium text-slate-600 hover:text-brand cursor-pointer transition-colors">
              {topic}
            </span>
          </div>
        ))}
      </div>
      
      <div className="absolute right-0 z-10 bg-gradient-to-l from-white to-transparent w-20 h-full pointer-events-none"></div>
    </div>
  );
};

export default TopicTicker;