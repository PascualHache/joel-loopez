import { useEffect, useRef, useState } from 'react'
import { designs } from '../data/designs'
import './DesignSwitcher.css'

/**
 * Floating design picker, in the spirit of Claude Design's tweaks bar: it sits
 * above the page and swaps the whole layout without touching the content.
 */
export function DesignSwitcher({ value, onChange }) {
  const [open, setOpen] = useState(true)
  const barRef = useRef(null)

  // Arrow keys move between designs while the bar has focus.
  useEffect(() => {
    const el = barRef.current
    if (!el) return

    function onKeyDown(e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
      e.preventDefault()
      const i = designs.findIndex((d) => d.id === value)
      const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + designs.length) % designs.length
      onChange(designs[next].id)
      el.querySelectorAll('button')[next]?.focus()
    }

    el.addEventListener('keydown', onKeyDown)
    return () => el.removeEventListener('keydown', onKeyDown)
  }, [value, onChange])

  const active = designs.find((d) => d.id === value) ?? designs[0]

  return (
    <div className="switcher" data-open={open || undefined}>
      {open ? (
        <div className="switcher__bar" ref={barRef} role="group" aria-label="Page design">
          <span className="switcher__label" aria-hidden="true">
            Design
          </span>

          <div className="switcher__options">
            {designs.map((design) => (
              <button
                key={design.id}
                type="button"
                className="switcher__option"
                aria-pressed={design.id === value}
                title={design.hint}
                onClick={() => onChange(design.id)}
              >
                {design.label}
              </button>
            ))}
          </div>

          <p className="switcher__hint">{active.hint}</p>

          <button
            type="button"
            className="switcher__toggle"
            aria-label="Hide the design switcher"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="switcher__reopen"
          onClick={() => setOpen(true)}
        >
          Design · {active.label}
        </button>
      )}
    </div>
  )
}
