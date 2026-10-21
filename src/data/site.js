export const site = {
  name: 'Joel Loopez',
  hero: {
    eyebrow: 'Joel Loopez',
    title: ['Original Music &', 'Audio Services'],
    body: 'I create custom music for film, games, ads, and other media — in any genre you need. I also offer music supervision and production support for artists. For composers and producers, I provide mentorship to help build a professional career.',
    highlight: 'My catalog includes over 300 tracks available for licensing.',
    image:
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1920&q=80',
  },
  about: {
    image: '/assets/home/img-joelloopez-new-section.jpg',
    imageAlt: 'Joel Loopez in his studio in La Floresta, Barcelona',
    paragraphs: [
      'From my studio in La Floresta (Barcelona), surrounded by nature, I offer a creative and well-equipped space to support you in the production of your song—whether in person or remotely.',
      'I have all the tools needed to bring your ideas to life: professional microphones and gear, acoustic and electronic instruments, and a wide arsenal of plugins and virtual instruments ready to adapt to your sound.',
      'But beyond the technical side, what matters most to me is the human connection. I offer a close, respectful, and caring approach where you can feel free to explore, express yourself, and grow throughout the creative process.',
      'This is a space where we work calmly, with attention to detail and deep listening. If you have a song idea in mind, you’re warmly invited to visit—no pressure, no commitment.',
    ],
  },
  catalog: {
    body: 'Access a curated collection of original compositions, musical fragments, and soundscapes ready to be licensed or used in audiovisual projects. Each piece is categorized by style, emotion, and narrative use, making it easy for filmmakers, developers, and content creators to search and select the right track.',
  },
  funding: {
    text: 'Programa Kit Digital cofinanciado por los fondos Next Generation (EU) del Mecanismo de Recuperación y Resiliencia',
  },
}

export const contact = {
  phone: '+34 616101794',
  phoneHref: 'tel:+34616101794',
  email: 'joelopezesteves@gmail.com',
  location: 'Barcelona, Spain',
}

export const social = [
  { id: 'spotify', label: 'Spotify', href: 'https://open.spotify.com' },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
  { id: 'soundcloud', label: 'SoundCloud', href: 'https://soundcloud.com' },
  { id: 'youtube', label: 'YouTube', href: 'https://youtube.com' },
  { id: 'blog', label: 'Blog', href: '#blog' },
]

/**
 * `#media` and `#packs` are placeholders: the live site serves those as their
 * own pages, and this single-page boilerplate has no section for them yet.
 */
export const nav = [
  { label: 'Media', href: '#media' },
  { label: 'Music', href: '#music' },
  { label: 'Packs', href: '#packs' },
  { label: 'Libraries', href: '#libraries' },
  { label: 'Contact', href: '#contact' },
]

export const languages = [
  { code: 'es', label: 'Español', href: '#es' },
  { code: 'en', label: 'English', href: '#en', current: true },
]

export const legal = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Cookie Policy', href: '#cookies' },
  { label: 'Legal Notice', href: '#legal' },
]

export const footer = {
  copyright: `Joel Loopez \u00a9 ${new Date().getFullYear()}`,
  /* The footer lists the city in Spanish; the header band uses English. */
  location: 'Barcelona, Espa\u00f1a',
  /* Icon order differs from the header band on the live site. */
  socialOrder: ['instagram', 'spotify', 'soundcloud', 'youtube', 'blog'],
}
