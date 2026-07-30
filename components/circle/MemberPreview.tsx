import { ArrowRight, LockKeyhole } from 'lucide-react';
import content from '../../content/circle-content.json';

export default function MemberPreview() {
  const preview = content.memberPreview;

  return (
    <section id="member-preview" className="preview-section section-frame" aria-labelledby="preview-title">
      <div className="section-heading preview-heading">
        <p className="section-index">MEMBERS' STUDIO / PREVIEW</p>
        <h2 id="preview-title">{preview.title}</h2>
        <p>{preview.description}</p>
        <div className="handwritten-image preview-handwritten">
          <span className="sr-only">過去の記録も、検索していつでも見返せる。</span>
          <img
            className="studio-texture"
            src="/images/circle/studio/hand-note-history.webp"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="binder" aria-label="会員ページの内容プレビュー">
        <div className="binder-rings" aria-hidden="true">
          <i /><i /><i /><i /><i />
        </div>
        <div className="binder-tabs" aria-hidden="true">
          <span>今月の面談</span><span>新着Tips</span><span>サービス</span><span>アーカイブ</span>
        </div>
        <div className="binder-page">
          <p className="binder-kicker">LATEST / PUBLIC PREVIEW</p>
          {preview.publicRows.map(row => (
            <div className="portal-row" key={`${row.date}-${row.type}`}>
              <time>{row.date}</time>
              <span>{row.type}</span>
              <strong>{row.title}</strong>
              <ArrowRight aria-hidden="true" />
            </div>
          ))}
          <div className="locked-sheet">
            <div className="locked-stamp"><LockKeyhole aria-hidden="true" /> MEMBERS ONLY</div>
            {preview.lockedRows.map(row => <p key={row}>{row}</p>)}
          </div>
        </div>
      </div>
      <a
        className="button button-outline preview-button"
        href={preview.previewUrl}
        onClick={() => window.gtag?.('event', 'cta_click', { location: 'member_preview' })}
      >
        {preview.cta}<ArrowRight aria-hidden="true" />
      </a>
    </section>
  );
}
