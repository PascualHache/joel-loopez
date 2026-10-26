/**
 * The design directions the floating switcher offers, rebuilt on the Turn 2
 * content structure: hero and CTAs → clients → services by priority →
 * selected work → Ecstatic Dance → testimonials → studio → licensing & packs
 * → about → contact.
 *
 * - current:   the shipped site
 * - editorial: calm, type-led, the tracklist as a real player
 * - paths:     routes each visitor type to its own path
 * - bold:      red leads, giant type, music up front
 */
export const designs = [
  { id: 'current', label: 'Actual' },
  { id: 'editorial', label: '1a Yeya Shimbolina' },
  { id: 'paths', label: '1b Chucho Samozas' },
  { id: 'bold', label: '1c Wido Mayamé' },
]

export const positioning = {
  eyebrow: 'Composer & Producer · Barcelona',
  lede: 'I compose custom soundtracks in any genre you need — for ads, video games, events and screen.',
  reelCta: "Watch the Domino's spot",
}

/** Named clients carry more weight than platform logos, so they lead. */
export const clients = ["Domino's", 'CANADA', 'ESLAND']

/** Ordered by commercial priority, not by history. */
export const services = [
  {
    num: '01',
    title: 'Custom Music',
    body: 'Original scores and music supervision for ads, games, film and events.',
    cta: 'Start a project →',
    kicker: '01 · Brands · Games · Film · Events',
    cardTitle: 'Custom Music & Supervision',
    cardBody: 'Original scores in any genre, written for your story.',
  },
  {
    num: '02',
    title: 'Production for Artists',
    body: 'Bring your song to life in my studio in La Floresta, or remotely.',
    kicker: '02 · Artists',
    cardTitle: 'Music Production',
    cardBody: 'In my La Floresta studio or remotely.',
  },
  {
    num: '03',
    title: 'Mentorship',
    body: 'For composers and producers building a professional career.',
    kicker: '03 · Composers',
    cardTitle: 'Mentorship',
    cardBody: 'Build a professional career in music.',
  },
  {
    num: '04',
    title: 'Licensing',
    body: '300+ ready-to-use tracks and sound packs on the platforms you already use.',
    kicker: '04 · Licensing',
    cardTitle: '300+ tracks & packs',
    cardBody: 'On AudioJungle, Pond5, MotionArray, Unity, Unreal and more.',
  },
  {
    num: '05',
    title: 'Ecstatic Dance DJ',
    body: 'Live sets for conscious dance gatherings, retreats and festivals.',
  },
]

/** 2b asks the visitor who they are; the first option is the lead offer. */
export const paths = [
  { kicker: 'Brands, games & film', title: 'Commission original music', href: '#work', lead: true },
  { kicker: 'Artists', title: 'Produce my song', href: '#studio' },
  { kicker: 'Composers', title: 'Get mentorship', href: '#studio' },
  { kicker: 'Need a track now', title: 'License music', href: '#licensing' },
  { kicker: 'Event organisers', title: 'Book an ecstatic dance DJ', href: '#dance' },
]

export const featuredWork = {
  kicker: 'Advertising',
  title: "Domino's Pizza",
  body: 'Original music for the campaign spot.',
  placeholder: "Domino's Pizza spot — Vimeo embed",
}

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

export const packs = [
  { name: 'Fantasy Orchestral', where: 'AudioJungle' },
  { name: '8-Bit Chiptune', where: 'AudioJungle' },
  { name: 'Acoustic Guitar', where: 'AudioJungle' },
]

export const about = {
  editorial:
    "I'm Joel López, a composer and producer based in Barcelona. I've written music for Domino's, CANADA and ESLAND — and what matters most to me is the human connection behind every project.",
  paths:
    "I'm Joel López, a composer and producer in Barcelona. Tell me about your project — I usually reply within a couple of days.",
  bold: "From my studio in La Floresta, surrounded by nature, I write for brands, games and artists. What matters most to me is the human connection — you're warmly invited to visit, no pressure, no commitment.",
}

export const consoleImage =
  'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1600&q=80'

export const studioImage = '/assets/home/img-joelloopez-new-section.jpg'
