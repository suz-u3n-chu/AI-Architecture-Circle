import React, { useState } from 'react';
import { FileText, Mail, Building2, User, ArrowRight, CheckCircle, Shield, BookOpen } from 'lucide-react';

const CAPTURE_URL = 'https://stripe-discord-pro-417218426761.asia-northeast1.run.app/api/capture';

const chapters = [
  '4号特例縮小の全貌と対象範囲',
  '省エネ適合義務化で必要になる書類',
  '構造計算の外注コスト削減シミュレーション',
  '省エネ計算を30秒で終わらせる方法',
  'AI活用で法改正コストを1/10にした事例',
  '2025年以降のロードマップと準備チェックリスト',
];

const FreeGuide: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    try {
      await fetch(CAPTURE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, company, source: 'circle_lp' }),
      }).catch(() => {});
      setStatus('done');
    } catch {
      setStatus('done'); // show success anyway for UX
    }
  };

  return (
    <section id="free-guide" className="py-24 md:py-32 bg-bg-dark text-white relative overflow-hidden">
      {/* Noise */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay bg-noise"></div>
      {/* Ambient glow */}
      <div className="absolute top-[-20%] right-[-15%] w-[60vw] h-[60vw] bg-brand rounded-full blur-[200px] opacity-[0.07] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-brand font-bold tracking-wider text-sm uppercase mb-2 block">Free Download</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            まずは<span className="text-brand">無料</span>で備える。
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-serif leading-relaxed">
            2025年法改正の全貌と、AIで対応コストを劇的に下げる方法を<br className="hidden md:inline" />
            40ページのPDFガイドにまとめました。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left: Guide contents */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Mock PDF cover */}
              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand via-brand-light to-transparent"></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 font-mono tracking-wider uppercase">PDF Guide</p>
                    <p className="text-sm font-bold text-white">2025年建築法改正 完全対応マニュアル</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {chapters.map((ch, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <span className="text-brand font-mono text-xs font-bold mt-1 w-6 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors">
                        {ch}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <FileText className="w-3.5 h-3.5" />
                    <span>全40ページ</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <Shield className="w-3.5 h-3.5" />
                    <span>メアド登録のみ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Capture form */}
          <div className="w-full lg:w-1/2">
            {status === 'done' ? (
              <div className="bg-white/[0.03] backdrop-blur-sm border border-brand/30 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-2xl font-bold mb-3">ガイドをお送りしました</h3>
                <p className="text-white/60 mb-6">
                  ご登録いただいたメールアドレスに<br />ダウンロードリンクをお送りしました。
                </p>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-brand font-bold text-sm hover:underline"
                >
                  サークルについて詳しく見る <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold mb-2">無料ガイドを受け取る</h3>
                <p className="text-white/50 text-sm mb-6">
                  メールアドレスにPDFのダウンロードリンクをお送りします。
                </p>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="メールアドレス *"
                    className="w-full bg-white/[0.06] border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-colors"
                  />
                </div>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="お名前"
                    className="w-full bg-white/[0.06] border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-colors"
                  />
                </div>

                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="text"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    placeholder="会社名"
                    className="w-full bg-white/[0.06] border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full group bg-brand hover:bg-brand-hover text-white py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-3 transition-colors duration-300 disabled:opacity-50 shadow-lg shadow-brand/20"
                >
                  {status === 'sending' ? (
                    '送信中...'
                  ) : (
                    <>
                      無料でダウンロードする
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-white/30 text-[11px] text-center mt-2">
                  ※ 登録後、法改正対策に役立つ情報を数回お届けします。いつでも解除可能です。
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeGuide;
