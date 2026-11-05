/**
 * The design directions the floating switcher offers, rebuilt on the Turn 2
 * content structure: hero and CTAs → clients → subviews by priority →
 * selected work → Ecstatic Dance → testimonials → studio → licensing & packs
 * → about → contact.
 *
 * - current:   the shipped site
 * - bold:      red leads, giant type, music up front
 */
export const designs = [
  { id: 'current', label: 'Actual' },
  { id: 'bold', label: 'B Fav' },
]

/**
 * Named clients carry more weight than platform logos, so they lead.
 * `scale` evens out logos whose mark fills less of the image height.
 */
export const clients = [
  { name: "Domino's", logo: '/assets/brands/dominos_logo.png' },
  { name: 'CANADA', logo: '/assets/brands/canada_logo.png' },
  { name: 'ESLAND', logo: '/assets/brands/esland_logo.png', scale: 1.35 },
]

/** The three subviews, in commercial priority. Each one gathers the services listed in `includes`. */
export const services = [
  {
    num: '01',
    title: 'Music',
    to: '/music',
    includes: 'Custom music · Licensing',
    body: 'Original scores for ads, games, film and events — or 300+ ready-made tracks and packs to license today.',
  },
  {
    num: '02',
    title: 'The Studio',
    to: '/the-studio',
    includes: 'Production · Mentorship',
    body: 'Bring your song to life in my studio in La Floresta, or grow a professional career in music.',
  },
  {
    num: '03',
    title: 'Ecstatic Dance',
    to: '/ecstatic-dance',
    includes: 'DJ sets',
    body: 'Live DJ journeys for conscious dance gatherings, retreats and festivals.',
  },
]

export const ecstaticDance = {
  kicker: 'Ecstatic Dance',
  title: ['Music to move', 'the body freely.'],
  body: 'I DJ ecstatic dance journeys — from slow, grounding rhythms to the peak and back to stillness. For gatherings, retreats and festivals.',
  cta: 'Book a DJ set',
  placeholder: 'Photo — Joel DJing an ecstatic dance',
}

export const quotes = [
  {
    text: 'Working with Joel means the music is in good hands. He composed the ESLAND soundtrack — professional, sensitive and efficient. He turns any idea into sound.',
    name: 'Paco Chavinet',
    role: 'Creative Director at FanContent',
  },
  {
    text: "Pure talent, quick delivery, and the best vibes. Joel's a dream to work with.",
    name: 'Alex Gargot',
    role: 'Director at CANADA',
  },
  {
    text: 'Joel is really nice to work with. Thanks to his guidance our project came out perfect. Hoping we can work together again soon!',
    name: 'flxrence',
    role: 'Client on SoundBetter',
  },
]

export const about = {
  bold: "From my studio in La Floresta, surrounded by nature, I write for brands, games and artists. What matters most to me is the human connection — you're warmly invited to visit, no pressure, no commitment.",
}

export const studioImage = '/assets/home/img-joelloopez-new-section.jpg'
