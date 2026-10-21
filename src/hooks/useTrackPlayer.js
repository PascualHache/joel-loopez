import { useState } from 'react'

/**
 * One track plays at a time. Returns the numbered tracks plus the toggle, so
 * every design shares the same player behaviour over the same track list.
 */
export function useTrackPlayer(tracks) {
  const [playingId, setPlayingId] = useState(null)

  const items = tracks.map((track, i) => ({
    ...track,
    num: String(i + 1).padStart(2, '0'),
    playing: playingId === track.id,
    toggle: () => setPlayingId((p) => (p === track.id ? null : track.id)),
  }))

  return { items, playing: items.find((t) => t.playing) ?? null }
}
