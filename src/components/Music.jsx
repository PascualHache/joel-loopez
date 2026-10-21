import { tracks } from '../data/tracks'
import { TrackCard } from './TrackCard'
import './Music.css'

export function Music() {
  return (
    <section className="music section" id="music">
      <div className="container">
        <div className="music__head">
          <h2 className="visually-hidden">Music</h2>
          <a
            className="music__cta"
            href="https://open.spotify.com"
            target="_blank"
            rel="noreferrer"
          >
            ♫ More music
          </a>
        </div>

        <div className="music__grid">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  )
}
