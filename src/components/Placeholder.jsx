import './Placeholder.css'

/**
 * Dashed slot standing in for photo or video that does not exist yet. It is
 * decorative scaffolding, so it stays out of the accessibility tree.
 * `caption` briefs whoever shoots the missing photo.
 */
export function Placeholder({ label, caption, ratio, minHeight, tone = 'dark', className = '' }) {
  return (
    <div
      className={`ph ${className}`.trim()}
      data-tone={tone}
      aria-hidden="true"
      style={{ aspectRatio: ratio, minHeight }}
    >
      {label}
      {caption && <span className="ph__caption">{caption}</span>}
    </div>
  )
}
