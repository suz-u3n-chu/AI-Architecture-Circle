import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const works = [
    {
      url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1000&auto=format&fit=crop",
      title: "Organic Facade Study",
      desc: "Midjourney v6 + Rhino",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1000&auto=format&fit=crop",
      title: "Interior Light Sim",
      desc: "Stable Diffusion + ControlNet",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      url: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1000&auto=format&fit=crop",
      title: "Urban Development",
      desc: "Generative Fill",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
      title: "Parametric Structure",
      desc: "Grasshopper AI Plugin",
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
                <h3 className="text-xl font-bold text-white mb-1">{work.title}</h3>
                <p className="text-brand-light text-sm flex items-center gap-2">
                  {work.desc}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;