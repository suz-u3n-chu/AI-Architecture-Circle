import content from '../../content/circle-content.json';

export default function CircleFooter() {
  return (
    <footer className="circle-footer">
      <div>
        <strong>{content.site.name}</strong>
        <span>OPEN STUDIO / 現場ノート</span>
      </div>
      <nav aria-label="フッターナビゲーション">
        <a href="/privacy.html">プライバシーポリシー</a>
        <a href="/tokushoho.html">特定商取引法に基づく表記</a>
      </nav>
      <small>© {new Date().getFullYear()} Archi-Prisma Design Works</small>
    </footer>
  );
}
