import { site } from '../data/site'
import { tracks } from '../data/tracks'
import { SectionHeading } from './SectionHeading'
import { TrackCard } from './TrackCard'
import './Music.css'

export function Music() {
  const { heading } = site.music

  return (
    <section className="music section" id="music">
      <div className="container">
        <div className="music__head">
          <SectionHeading eyebrow={heading.eyebrow} title={heading.title} />

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
