
import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{url: string, title: string} | null>(null);

  const works = [
    {
      url: "/AI-Architecture-Circle/images/exterior.jpg",
      title: "Exterior Perspective",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      url: "/AI-Architecture-Circle/images/interior.jpg",
      title: "Interior Perspective",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      url: "/AI-Architecture-Circle/images/diagram.jpg",
      title: "Concept Diagram",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      url: "/AI-Architecture-Circle/images/proposal.jpg",
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
              className={`group relative rounded-2xl overflow-hidden bg-slate-100 shadow-sm cursor-pointer ${work.span}`}
              onClick={() => setSelectedImage({ url: work.url, title: work.title })}
            >
              <div className="absolute inset-0 bg-slate-200 animate-pulse z-0"></div>
              <img 
                src={work.url} 
                alt={work.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-10 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-20"></div>
              
              {/* Hover Indicator */}
              <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-1">{work.title}</h3>
                <p className="text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to expand</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in-up"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-50 rounded-full bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
            />
            <h3 className="text-white text-xl font-bold mt-6 tracking-wide">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
