import React from 'react';

const Gallery: React.FC = () => {
  const works = [
    {
      url: "./外観パース.jpg",
      title: "Exterior Perspective",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      url: "./内観パース.jpg",
      title: "Interior Perspective",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      url: "./ダイアグラム.jpg",
      title: "Concept Diagram",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      url: "./提案書類.jpg",
      title: "Proposal Documents",
      span: "md:col-span-1 md:row-span-1"
    },
  ];

  return (
    <section id="gallery" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-brand font-bold tracking-wider text-sm uppercase mb-2 block">Gallery</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              AI × 建築<br />
              <span className="text-slate-400">無限の可能性</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm md:text-right">
            サークルメンバーが生成したスタディ、パース、図面の一例。<br/>
            実験的な造形から実務レベルの納まり検討まで。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {works.map((work, i) => (
            <div 
              key={i} 
              className={`group relative rounded-2xl overflow-hidden bg-slate-100 shadow-sm ${work.span}`}
            >
              <div className="absolute inset-0 bg-slate-200 animate-pulse z-0"></div>
              <img 
                src={work.url} 
                alt={work.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-10 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-20"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 class="text-xl font-bold text-white mb-1">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;