/**
 * The Turn 3 identities each need their own families. Loading six extra
 * families on every visit would tax the designs that never use them, so the
 * stylesheet is injected the first time one of those designs is shown.
 */
const TURN3_FONTS =
  'https://fonts.googleapis.com/css2?' +
  'family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300;1,6..72,400&' +
  'family=Hanken+Grotesk:wght@400;500;600&' +
  'family=Instrument+Serif:ital@0;1&' +
  'family=Geist:wght@300;400;500&' +
  'family=Spectral:ital,wght@0,300;0,400;1,300&' +
  'family=Work+Sans:wght@400;500&display=swap'

const ID = 'turn3-fonts'

export function ensureTurn3Fonts() {
  if (typeof document === 'undefined' || document.getElementById(ID)) return
  const link = document.createElement('link')
  link.id = ID
  link.rel = 'stylesheet'
  link.href = TURN3_FONTS
  document.head.appendChild(link)
}
