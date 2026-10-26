import './Placeholder.css'

/**
 * Dashed slot standing in for photo or video that does not exist yet. It is
 * decorative scaffolding, so it stays out of the accessibility tree.
 */
export function Placeholder({ label, ratio, minHeight, tone = 'dark', className = '' }) {
  return (
    <div
      className={`ph ${className}`.trim()}
      data-tone={tone}
      aria-hidden="true"
      style={{ aspectRatio: ratio, minHeight }}
    >
      {label}
    </div>
  )
}
