import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, Mail, ArrowRight } from 'lucide-react';

const CAPTURE_URL =
  'https://stripe-discord-pro-417218426761.asia-northeast1.run.app/api/capture';
const SESSION_KEY = 'exit_intent_shown';

const ExitIntent: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const hasFired = useRef(false);

  // ---- helpers ----
  const isMobile = (): boolean => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth < 768 || 'ontouchstart' in window;
  };

  const hasScrolledPastGuide = (): boolean => {
    const section = document.getElementById('free-guide');
    if (!section) return false;
    const rect = section.getBoundingClientRect();
    // The section's bottom is above the viewport top -> user scrolled past it
    return rect.bottom < 0;
  };

  const alreadyShown = (): boolean => {
    try {
      return sessionStorage.getItem(SESSION_KEY) === '1';
    } catch {
      return false;
    }
  };

  const markShown = (): void => {
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      // storage blocked
    }
  };

  // ---- fire the popup ----
  const fire = useCallback(() => {
    if (hasFired.current) return;
    if (alreadyShown()) return;
    if (hasScrolledPastGuide()) return;

    hasFired.current = true;
    markShown();
    setVisible(true);
    window.gtag?.('event', 'exit_intent_shown', { trigger: isMobile() ? 'mobile_scroll' : 'desktop_mouseout' });
  }, []);

  // ---- desktop: mouseout handler ----
  const handleMouseOut = useCallback(
    (e: MouseEvent) => {
      if (e.clientY >= 10) return;
      fire();
    },
    [fire],
  );

  useEffect(() => {
    if (alreadyShown()) return;

    const mobile = isMobile();

    if (!mobile) {
      // Desktop: mouse leaving viewport
      document.addEventListener('mouseout', handleMouseOut);
      return () => document.removeEventListener('mouseout', handleMouseOut);
    }

    // Mobile: scroll 50% + 20-second dwell time
    let dwellTimer: ReturnType<typeof setTimeout> | null = null;
    let scrolledPast50 = false;

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent >= 0.5) {
        scrolledPast50 = true;
      }
    };

    dwellTimer = setTimeout(() => {
      if (scrolledPast50) {
        fire();
      } else {
        // Wait for scroll after dwell time passed
        const checkScroll = () => {
          const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
          if (scrollPercent >= 0.5) {
            fire();
            window.removeEventListener('scroll', checkScroll);
          }
        };
        window.addEventListener('scroll', checkScroll, { passive: true });
      }
    }, 20000);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dwellTimer) clearTimeout(dwellTimer);
    };
  }, [handleMouseOut, fire]);

  // ---- close ----
  const close = () => setVisible(false);

  // ---- form submit ----
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    try {
      await fetch(CAPTURE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'exit_intent' }),
      }).catch(() => {});
      setStatus('done');
      window.gtag?.('event', 'guide_download', { source: 'exit_intent' });
    } catch {
      setStatus('done'); // show success anyway for UX
    }
  };

  // ---- render nothing when hidden ----
  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ animation: 'exitFadeIn 0.35s ease-out forwards' }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={close}
      />

      {/* Card */}
      <div
        className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        style={{ animation: 'exitSlideUp 0.4s cubic-bezier(0.16,1,0.3,1) forwards' }}
      >
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-brand via-brand-light to-transparent" />

        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white/50 hover:text-white transition-colors"
          aria-label="閉じる"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="px-8 py-10">
          {status === 'done' ? (
            /* ---- Success state ---- */
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-brand/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                ガイドをお送りしました
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                ご登録いただいたメールアドレスに
                <br />
                ダウンロードリンクをお送りしました。
              </p>
            </div>
          ) : (
            /* ---- Form state ---- */
            <>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                ちょっと待ってください
              </h3>
              <p className="text-brand font-bold text-sm mb-4">
                無料ガイドはもうダウンロードしましたか？
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                <span className="text-white/70 font-medium">
                  2025年4月施行 建築基準法改正
                </span>
                の全貌と、AIで対応コストを劇的に下げる方法を40ページのPDFにまとめました。メールアドレスだけで無料ダウンロードできます。
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="メールアドレス"
                    className="w-full bg-white/[0.06] border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full group bg-brand hover:bg-brand-hover text-white py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-colors duration-300 disabled:opacity-50 shadow-lg shadow-brand/20"
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
              </form>

              <p className="text-white/25 text-[11px] text-center mt-4">
                ※ 登録後、法改正対策に役立つ情報を数回お届けします。いつでも解除可能です。
              </p>
            </>
          )}
        </div>
      </div>

      {/* Inline keyframe styles */}
      <style>{`
        @keyframes exitFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes exitSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ExitIntent;
