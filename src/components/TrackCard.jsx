import './TrackCard.css'

/**
 * Spotify-styled track card. With a `spotifyId` it renders the real embed;
 * without one it renders the styled placeholder so the layout is reviewable
 * before the catalog is wired up.
 */
export function TrackCard({ track }) {
  if (track.spotifyId) {
    return (
      <iframe
        className="track-card track-card--embed"
        title={track.title}
        src={`https://open.spotify.com/embed/track/${track.spotifyId}`}
        loading="lazy"
        allow="encrypted-media; clipboard-write; picture-in-picture"
      />
    )
  }

  return (
    <article className="track-card" data-tone={track.tone}>
      <div className="track-card__art" aria-hidden="true" />
      <h3 className="track-card__title">{track.title}</h3>
      <p className="track-card__artist">{track.artist}</p>
      <button className="track-card__play" aria-label={`Play ${track.title}`}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </article>
  )
}
