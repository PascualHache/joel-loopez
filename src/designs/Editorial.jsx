import { consoleImage, services, studioImage } from '../data/designs'
import { contact, social } from '../data/site'
import { tools } from '../data/tools'
import { tracks } from '../data/tracks'
import { useTrackPlayer } from '../hooks/useTrackPlayer'
import { Logo } from '../components/Logo'
import { PlayIcon } from '../components/Icons'
import './Editorial.css'

const NAV = ['Services', 'Music', 'Studio', 'Licensing']

export function Editorial() {
  const { items } = useTrackPlayer(tracks)

  return (
    <div className="ed">
      <header className="ed__header">
        <div className="ed__bar container">
          <Logo width={120} />
          <nav className="ed__nav" aria-label="Primary">
            {NAV.map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`}>
                {label}
              </a>
            ))}
            <span className="ed__lang">
              ES / <span>EN</span>
            </span>
            <a className="ed__btn" href="#contact">
              Start a project
            </a>
          </nav>
        </div>
      </header>

      <section className="ed__hero container" id="top">
        <div className="ed__heroText">
          <p className="ed__kicker">
            <span className="ed__rule" aria-hidden="true" />
            Composer &amp; Producer · Barcelona
          </p>
          <h1 className="ed__h1">
            Original music for film, games, ads <strong>&amp; artists.</strong>
          </h1>
          <p className="ed__lede">
            I create custom music in any genre you need — and support artists and composers
            from my studio in La Floresta.
          </p>
          <div className="ed__actions">
            <a className="ed__btn" href="#contact">
              Start a project
            </a>
            <a className="ed__ghost" href="#music">
              <PlayIcon />
              Listen to the reel
            </a>
          </div>
        </div>
        <img className="ed__heroImg" src={consoleImage} alt="Studio console" />
      </section>

      <div className="ed__strip">
        <div className="ed__stripInner container">
          <div className="ed__marquee">
            {/* Two identical groups: the track slides exactly one group, so the
                loop is seamless. The copy is hidden from assistive tech. */}
            {[0, 1].map((copy) => (
              <div className="ed__marqueeGroup" key={copy} aria-hidden={copy === 1 || undefined}>
                <span className="ed__stripLead">300+ tracks licensed on</span>
                {tools.map((tool) => (
                  <span key={tool.id}>{tool.name}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="ed__split container" id="services">
        <p className="ed__label">What I do</p>
        <div className="ed__rows">
          {services.map((service) => (
            <article className="ed__row" key={service.num}>
              <span className="ed__num">{service.num}</span>
              <h2 className="ed__rowTitle">{service.title}</h2>
              <p className="ed__rowBody">{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ed__music container" id="music">
        <div className="ed__musicHead">
          <h2 className="ed__h2">Original Soundtracks</h2>
          <a className="ed__link" href="https://open.spotify.com" target="_blank" rel="noreferrer">
            ♫ All music →
          </a>
        </div>

        <ol className="ed__list">
          {items.map((track) => (
            <li key={track.id}>
              <button
                className="ed__track"
                data-playing={track.playing || undefined}
                onClick={track.toggle}
                aria-label={`${track.playing ? 'Pause' : 'Play'} ${track.title}`}
              >
                <span className="ed__trackNum">{track.num}</span>
                <span className="ed__trackBtn" aria-hidden="true">
                  {track.playing ? <span className="ed__bars" /> : <PlayIcon />}
                </span>
                <span className="ed__trackMeta">
                  <span className="ed__trackTitle">{track.title}</span>
                  <span className="ed__trackArtist">{track.artist}</span>
                </span>
                <span className="ed__trackState">{track.playing ? 'Now playing' : ''}</span>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <section className="ed__studio" id="studio">
        <img src={studioImage} alt="Joel Loopez in his studio in La Floresta" loading="lazy" />
        <div className="ed__studioText">
          <p className="ed__label">The studio · La Floresta</p>
          <blockquote className="ed__quote">
            “A space where we work calmly, with attention to detail and deep listening.”
          </blockquote>
          <p className="ed__studioBody">
            Professional microphones and gear, acoustic and electronic instruments, and a wide
            arsenal of plugins — surrounded by nature. If you have a song idea in mind, you’re
            warmly invited to visit — no pressure, no commitment.
          </p>
          <div>
            <a className="ed__btn" href="#contact">
              Visit the studio
            </a>
          </div>
        </div>
      </section>

      <section className="ed__contact container" id="contact">
        <p className="ed__label">Contact</p>
        <h2 className="ed__h1">
          Have a project
          <br />
          in mind?
        </h2>
        <a className="ed__email" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <div className="ed__details">
          <span>{contact.phone}</span>
          <span>{contact.location}</span>
          <span>{social.map((s) => s.label).join(' · ')}</span>
        </div>
      </section>

      <p className="ed__funding container">
        Programa Kit Digital cofinanciado por los fondos Next Generation (EU) del Mecanismo de
        Recuperación y Resiliencia
      </p>

      <div className="ed__legal">
        <div className="ed__legalInner container">
          <span>Joel Loopez © {new Date().getFullYear()}</span>
          <span className="ed__legalLinks">
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookie Policy</a>
            <a href="#legal">Legal Notice</a>
          </span>
        </div>
      </div>
    </div>
  )
}
