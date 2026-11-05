/** Licensing, part of /music: ready-made music and SFX packs, plus the catalog on other libraries. */
const SHOP = 'https://zoidberg-es.itch.io/'
const euro = (price) => `${price} €`

export const licensing = {
  label: 'Licensing',
  title: 'Ready to drop in.',
  body: 'Music packs and sound effects for games, ads and video. Loop-ready, in WAV, MP3 and OGG, and licensed for commercial use.',
  bundle: {
    kicker: 'Game Music Collection',
    title: 'All 12 music packs',
    body: '129 original tracks, every one loop-ready.',
    price: euro('99.90'),
    was: euro('472.50'),
    href: `${SHOP}game-music-collection`,
    cta: 'Get the bundle on itch.io',
  },
  musicNote: `12 packs, from ${euro('39')} on itch.io`,
  sfxNote: 'A sexual sound-effects library for adult games and media, sold as voices, actions or the full bundle.',
  platformsNote: '300+ tracks on the libraries you already license from.',
}

export const musicPacks = [
  { slug: 'ethnic-ambient-music-pack', short: 'Ethnic', name: 'Ethnic Ambient Music Pack', desc: 'World and meditation moods', tracks: 10, price: '39.90' },
  { slug: 'casual-game-music-pack', short: 'Casual', name: 'Casual Game Music Pack', desc: 'Happy, light game music', tracks: 12, price: '39.90' },
  { slug: 'cyberpack-music', short: 'Cyber', name: 'Cyberpack Music', desc: 'Sci-fi, industrial electro, future metal', tracks: 11, price: '39' },
  { slug: 'fantasy-orchestral-music', short: 'Fantasy', name: 'Fantasy Orchestral Music', desc: 'Orchestral scores for fantasy worlds', tracks: 10, price: '39' },
  { slug: '8bit-chiptue', short: '8-Bit', name: '8-Bit Chiptune Music', desc: 'Game Boy-style retro chiptune', tracks: 11, price: '39' },
  { slug: 'acoustic-guitar-music-pack', short: 'Acoustic', name: 'Acoustic Guitar Music Pack', desc: 'Warm acoustic guitar songs', tracks: 10, price: '39.90' },
  { slug: 'lofi-hip-hop-lofi-beats-music-pack', short: 'Lo-fi', name: 'Lo-fi Hip Hop', desc: 'Lo-fi beats for chill content', tracks: 12, price: '39' },
  { slug: 'mycraft', short: 'Craft', name: 'My Craft', desc: 'Ambient for crafting sandbox games', tracks: 11, price: '39' },
  { slug: 'village-music-pack', short: 'Village', name: 'Village Music Pack', desc: 'Village and town levels', tracks: 9, price: '39.90' },
  { slug: 'western-music-pack', short: 'Western', name: 'Western Music Pack', desc: 'Wild west for your game', tracks: 10, price: '39' },
  { slug: 'ambient-music-pack', short: 'Ambient', name: 'Ambient Music Pack', desc: 'Atmospheres for any project', tracks: 11, price: '39' },
  { slug: 'instrumental-hip-hop-pack', short: 'Hip Hop', name: 'Instrumental Hip Hop Pack', desc: 'Urban moods, upbeat to lo-fi', tracks: 12, price: '39.90' },
].map((p) => ({ ...p, href: SHOP + p.slug, tag: `${p.tracks} tracks`, price: euro(p.price) }))

export const sfxPacks = [
  { slug: 'sex-sounds-bundle', short: 'Bundle', name: 'Sex Sounds Bundle', desc: 'The full SFX library', price: '49' },
  { slug: 'sex-sounds-voices', short: 'Voices', name: 'Sex Sounds: Voices', desc: 'Voice sound effects', price: '39' },
  { slug: 'sex-sounds-actions', short: 'Actions', name: 'Sex Sounds: Actions', desc: 'Action sound effects', price: '35' },
].map((p) => ({ ...p, href: SHOP + p.slug, tag: 'SFX library', price: euro(p.price) }))

export const packFeatures = [
  { title: 'Seamless loops', body: 'Every track loops cleanly, for game levels and long scenes.' },
  { title: 'Short edits', body: '60, 30 and 15-second versions of each track in most packs, cut for ads and social.' },
  { title: 'WAV, MP3 and OGG', body: '44.1 kHz, 16-bit stereo files, ready for any engine or editor.' },
  { title: 'Commercial license', body: 'Use it in free or paid games, videos and other media, and edit it freely. Credit is optional.' },
]

export const libraries = [
  { name: 'AudioJungle', href: 'https://audiojungle.net/user/joel_loopez/portfolio' },
  { name: 'Envato Elements', href: 'https://elements.envato.com/es/user/Joel_Loopez' },
  { name: 'Motion Array', href: 'https://motionarray.com/browse/producer/joel-loopez/' },
  { name: 'Pond5', href: 'https://www.pond5.com/artist/joel_loopez' },
  { name: 'Jamendo', href: 'https://licensing.jamendo.com/es/catalogo?search=%22%40Joel%20Loopez%40%22' },
  { name: 'Fab (Unreal Engine)', href: 'https://www.fab.com/sellers/Joel%20Loopez' },
  { name: 'Unity Asset Store', href: 'https://assetstore.unity.com/publishers/48941' },
  { name: 'TunePocket', href: 'https://www.tunepocket.com/composer/joel-loopez/' },
  { name: 'Filmpac', href: 'https://filmpac.com/music/artists/A00194/joel-loopez/' },
  { name: 'AudioCrowd', href: 'https://en.audiocrowd.net/composers/368-joel-loopez' },
  { name: 'Houzi8', href: 'https://houzi8.com/musician/855712' },
  { name: 'itch.io', href: SHOP },
]
