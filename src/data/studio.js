/** The /the-studio subview: production for artists and mentorship, both from La Floresta. */
export const studio = {
  label: 'The Studio, La Floresta',
  title: 'A studio in the forest.',
  body: 'Produce your song or grow your career surrounded by trees, with every instrument within reach. In person in La Floresta, or remotely.',
  space: {
    label: 'The space',
    lead: 'A calm room, deep listening, and time to get it right.',
    body: [
      'My studio sits in La Floresta, surrounded by nature. Professional microphones, acoustic and electronic instruments and a wide arsenal of plugins are ready to adapt to your sound.',
      'Beyond the technical side, what matters most to me is the human connection: a close, respectful space where you can explore, express yourself and grow through the process.',
    ],
  },
  room: {
    title: 'In the room.',
    lead: 'Everything here is yours to play during the session. Pick it up, plug it in, record it.',
    gear: [
      ['Guitars', 'Acoustic and electric'],
      ['Keys and synths', 'Keyboards and synthesizers'],
      ['Microphones', 'For voice and instruments'],
      ['Monitoring', 'Near-field studio monitors'],
      ['Plugins', 'Virtual instruments and effects'],
      ['Records', 'A vinyl library for reference'],
    ],
  },
  /** Photos still to shoot; each caption is the brief. */
  photos: {
    forest: {
      label: 'Photo 1 — the studio among the trees',
      caption: 'Exterior, wide. Morning light through the canopy, the building small inside the forest.',
    },
    wall: {
      label: 'Photo 2 — the instrument wall',
      caption: 'Guitars on the rack, keys and synths, mics on stands. Shoot wide so the room reads as full.',
    },
    window: {
      label: 'Photo 3 — recording by the window',
      caption: 'Interior: an instrument or mic in the foreground, trees filling the window behind.',
    },
  },
  /** One card per service the studio hosts; `id` is the anchor the service index links to. */
  offers: [
    {
      id: 'production',
      num: '02',
      title: 'Production for Artists',
      body: 'Bring your song to life in my studio in La Floresta, or remotely.',
      points: [
        'Production and arrangement of your song',
        'Recording with the studio’s instruments and mics',
        'In person in La Floresta, or remotely',
      ],
      cta: 'Visit the studio',
      note: 'No pressure, no commitment.',
    },
    {
      id: 'mentorship',
      num: '03',
      title: 'Mentorship',
      body: 'For composers and producers building a professional career.',
      points: [
        'Guidance from a composer who scores for brands, games and film',
        'Licensing know-how from a catalog of 300+ tracks',
        '[Session format and length]',
      ],
      cta: 'Ask about mentorship',
    },
  ],
}
