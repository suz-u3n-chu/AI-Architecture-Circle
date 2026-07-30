type EditorialHeadingProps = {
  id: string;
  label: string;
  desktopLines: readonly string[];
  mobileLines?: readonly string[];
  className?: string;
};

function LineGroup({
  lines,
  viewport,
}: {
  lines: readonly string[];
  viewport: 'desktop' | 'mobile';
}) {
  return (
    <span className={`editorial-lines editorial-lines-${viewport}`} aria-hidden="true">
      {lines.map(line => (
        <span className="editorial-line" key={line}>{line}</span>
      ))}
    </span>
  );
}

export default function EditorialHeading({
  id,
  label,
  desktopLines,
  mobileLines = desktopLines,
  className,
}: EditorialHeadingProps) {
  return (
    <h2
      id={id}
      className={['editorial-heading', className].filter(Boolean).join(' ')}
      aria-label={label}
    >
      <LineGroup lines={desktopLines} viewport="desktop" />
      <LineGroup lines={mobileLines} viewport="mobile" />
    </h2>
  );
}
