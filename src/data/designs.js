/** The design directions the floating switcher offers. */
export const designs = [
  { id: 'current', label: 'Current', hint: 'The shipped site' },
  { id: 'editorial', label: '1a Editorial', hint: 'Calm, type-led, tracklist as a real player' },
  { id: 'paths', label: '1b Paths', hint: 'Routes each visitor type to its path' },
  { id: 'bold', label: '1c Bold', hint: 'Red leads, giant type, music up front' },
]

/** Numbered service rows — 1a lists them, 1c turns them into cards. */
export const services = [
  {
    num: '01',
    title: 'Custom Music',
    body: 'Original scores for film, games, ads and other media — in any genre you need.',
    kicker: 'Film · Games · Ads',
    cardTitle: 'Custom Music & Supervision',
    cardBody: 'Original scores in any genre you need.',
  },
  {
    num: '02',
    title: 'Production for Artists',
    body: 'Music supervision and production support for your songs, in person or remotely.',
    kicker: 'Artists',
    cardTitle: 'Music Production',
    cardBody: 'In my La Floresta studio or remotely.',
  },
  {
    num: '03',
    title: 'Mentorship',
    body: 'For composers and producers building a professional career.',
    kicker: 'Composers & Producers',
    cardTitle: 'Mentorship',
    cardBody: 'Build a professional career in music.',
  },
  {
    num: '04',
    title: 'Licensing',
    body: 'Over 300 tracks ready for audiovisual projects, sorted by style, emotion and narrative use.',
    kicker: 'Licensing',
    cardTitle: '300+',
    cardBody: 'tracks on AudioJungle, Pond5, MotionArray, Envato, Unity, Unreal and more.',
  },
]

/** 1b asks the visitor who they are and sends them down one of these. */
export const paths = [
  { kicker: "I'm a filmmaker or studio", title: 'Custom music for film, games & ads', href: '#services' },
  { kicker: "I'm an artist", title: 'Produce my song in the studio', href: '#about' },
  { kicker: "I'm a composer", title: 'Mentorship for a professional career', href: '#mentorship' },
  { kicker: 'I need a track now', title: 'License from 300+ tracks', href: '#libraries' },
]

export const consoleImage =
  'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1600&q=80'

export const studioImage = '/assets/home/img-joelloopez-new-section.jpg'
