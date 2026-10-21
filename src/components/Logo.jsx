import './Logo.css'

/**
 * "JOEL LOOPEZ" wordmark — the O's are the red rings.
 *
 * `negative` (white letters) is the version meant for dark backgrounds.
 * Swap to `/assets/logo/JOELLOGOBI.png` for the black-letter version, which on
 * this black background leaves only the red rings visible.
 */
export function Logo({ width = 150, negative = true }) {
  return (
    <img
      className="logo"
      src={
        negative
          ? '/assets/logo/JOELLOPEZNEGATIVO.png'
          : '/assets/logo/JOELLOGOBI.png'
      }
      alt="Joel Loopez"
      width={width}
      height={Math.round((width * 340) / 865)}
    />
  )
}
