import { Menu, X } from 'lucide-react';
import { useRef, useState } from 'react';

const links = [
  ['#flow', '話す・試す・持ち帰る'],
  ['#member-preview', '会員ページ'],
  ['#services', '使えるサービス'],
  ['#gathering', '交流会'],
  ['#pricing', '参加プラン'],
];

export default function CircleHeader() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setOpen(false);
    window.requestAnimationFrame(() => buttonRef.current?.focus());
  };

  return (
    <header className="circle-header">
      <a className="circle-brand" href="#top" aria-label="AI Architecture Circle トップへ">
        <span>AI ARCHITECTURE CIRCLE</span>
        <small>OPEN STUDIO</small>
      </a>
      <button
        ref={buttonRef}
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="circle-navigation"
        onClick={() => setOpen(value => !value)}
      >
        <span>{open ? '閉じる' : 'メニュー'}</span>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav
        id="circle-navigation"
        className="circle-navigation"
        data-open={open}
        aria-label="ページ内ナビゲーション"
      >
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a className="nav-join" href="#pricing" onClick={closeMenu}>参加する</a>
      </nav>
    </header>
  );
}
