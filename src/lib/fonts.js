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
