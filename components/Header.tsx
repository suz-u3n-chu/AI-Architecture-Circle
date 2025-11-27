import React, { useState, useEffect } from 'react';
import { Menu, X, SquareTerminal, ArrowUpRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '特徴・メリット', href: '#features' },
    { name: 'コンテンツ', href: '#offerings' },
    { name: '制作事例', href: '#gallery' },
    { name: 'こんな人に', href: '#target' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-xl tracking-tighter rounded-sm group-hover:bg-brand group-hover:text-white transition-colors">
            AI
          </div>
          <div className="flex flex-col">
            <span className={`text-sm font-bold leading-none tracking-tight ${isScrolled ? 'text-black' : 'text-black'}`}>ARCHI-CIRCLE</span>
            <span className="text-[10px] text-slate-500 font-mono uppercase leading-none mt-1">EST. 2025</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-600 hover:text-black transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://chat.google.com/room/AAQAVp8sdgg/z9w2QCXn7oI/z9w2QCXn7oI?cls=10"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white text-sm font-bold tracking-tight hover:bg-brand transition-all duration-300 clip-path-slant shadow-lg shadow-black/10"
          >
            <span>メンバー登録</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 h-screen z-50">
          <div className="flex flex-col p-8 space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-bold text-slate-800 hover:text-brand"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://chat.google.com/room/AAQAVp8sdgg/z9w2QCXn7oI/z9w2QCXn7oI?cls=10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-brand"
              onClick={() => setIsMenuOpen(false)}
            >
              今すぐ参加する
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;