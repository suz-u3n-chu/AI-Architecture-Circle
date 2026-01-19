import React from 'react';

const ToolsMarquee: React.FC = () => {
  const tools = [
    "Revit", "ArchiCAD", "Rhinoceros", "Grasshopper", 
    "Midjourney", "Stable Diffusion", "ChatGPT", "Claude 3.5",
    "Notion", "Discord", "Python", "TouchDesigner", "Unreal Engine"
  ];

  return (
    <section className="py-10 bg-white border-b border-slate-100 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      <div className="flex w-[200%] animate-scroll">
        {[...tools, ...tools, ...tools].map((tool, index) => (
          <div key={index} className="flex items-center justify-center min-w-[200px] px-6">
            <span className="text-2xl font-bold text-slate-300 uppercase tracking-wider hover:text-black transition-colors cursor-default">
              {tool}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsMarquee;