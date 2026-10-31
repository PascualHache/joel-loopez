import { portadaSrcSet, portadaUrl } from '../lib/sanity'
import './TrackCard.css'

/**
 * Spotify-styled track card linking out to wherever the song lives. The cover
 * comes from Sanity already cropped square around the client's hotspot; its
 * dominant colour fills the frame while the image loads.
 */
export function TrackCard({ track }) {
  return (
    <a
      className="track-card"
      href={track.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Listen to ${track.title}${track.project ? ` on ${track.project}` : ''}`}
    >
      <div className="track-card__art" style={track.color ? { '--cover': track.color } : undefined}>
        <img
          src={portadaUrl(track.portada, 800)}
          srcSet={portadaSrcSet(track.portada)}
          sizes="(max-width: 640px) 50vw, 240px"
          width="800"
          height="800"
          loading="lazy"
          decoding="async"
          alt=""
        />
      </div>
      <h3 className="track-card__title">{track.title}</h3>
      <p className="track-card__artist">{track.project}</p>
      <span className="track-card__play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </a>
  )
}
