import { useEffect, useState } from 'react'
import { getCanciones } from '../lib/sanity'

const PLATFORMS = [
  ['spotify.com', 'Spotify'],
  ['youtube.com', 'YouTube'],
  ['youtu.be', 'YouTube'],
  ['soundcloud.com', 'SoundCloud'],
  ['bandcamp.com', 'Bandcamp'],
  ['music.apple.com', 'Apple Music'],
]

function platformOf(href) {
  try {
    const host = new URL(href).hostname
    const match = PLATFORMS.find(([domain]) => host.endsWith(domain))
    return match ? match[1] : host.replace(/^www\./, '')
  } catch {
    return ''
  }
}

function toTrack(c) {
  return {
    id: c._id,
    title: c.titulo,
    href: c.enlace,
    portada: c.portada,
    color: c.color,
    project: platformOf(c.enlace),
  }
}

// One fetch per page load, shared by whichever design is on screen.
let request = null

/**
 * The songs from Sanity in the shape every design renders. `tracks` is null
 * while loading; `error` is true when Sanity could not be reached.
 */
export function useCanciones() {
  const [state, setState] = useState({ tracks: null, error: false })

  useEffect(() => {
    let active = true
    request ??= getCanciones().then((data) => data.map(toTrack))
    request
      .then((tracks) => active && setState({ tracks, error: false }))
      .catch(() => {
        request = null
        if (active) setState({ tracks: null, error: true })
      })
    return () => {
      active = false
    }
  }, [])

  return state
}
