/**
 * The Turn 3 identities each need their own families. Loading two extra
 * families on every visit would tax the designs that never use them, so the
 * stylesheet is injected the first time one of those designs is shown.
 */
const TURN3_FONTS =
  'https://fonts.googleapis.com/css2?' +
  'family=Geist:wght@300;400;500&' +
  'family=Young+Serif&display=swap'

const ID = 'turn3-fonts'

export function ensureTurn3Fonts() {
  if (typeof document === 'undefined' || document.getElementById(ID)) return
  const link = document.createElement('link')
  link.id = ID
  link.rel = 'stylesheet'
  link.href = TURN3_FONTS
  document.head.appendChild(link)
}
