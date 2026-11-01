/**
 * Some views need their own families. Loading them on every visit would tax
 * the views that never use them, so each stylesheet is injected the first
 * time its view is shown.
 */
function ensureStylesheet(id, href) {
  if (typeof document === 'undefined' || document.getElementById(id)) return
  const link = document.createElement('link')
  link.id = id
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}

const TURN3_FONTS =
  'https://fonts.googleapis.com/css2?' +
  'family=Geist:wght@300;400;500&' +
  'family=Young+Serif&display=swap'

export function ensureTurn3Fonts() {
  ensureStylesheet('turn3-fonts', TURN3_FONTS)
}

/** Archivo needs its width axis: the dance page sets its display type extended. */
const DANCE_FONTS =
  'https://fonts.googleapis.com/css2?' +
  'family=Archivo:wdth,wght@62..125,100..900&' +
  'family=Space+Mono:wght@400;700&display=swap'

export function ensureDanceFonts() {
  ensureStylesheet('dance-fonts', DANCE_FONTS)
}
