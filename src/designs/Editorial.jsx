import {
  about,
  clients,
  consoleImage,
  ecstaticDance,
  featuredWork,
  packs,
  positioning,
  quotes,
  services,
  studioImage,
} from '../data/designs'
import { contact, social } from '../data/site'
import { tracks } from '../data/tracks'
import { useTrackPlayer } from '../hooks/useTrackPlayer'
import { Logo } from '../components/Logo'
import { PlayIcon } from '../components/Icons'
import { Placeholder } from '../components/Placeholder'
import './Editorial.css'

const NAV = ['Work', 'Services', 'Ecstatic Dance', 'Studio', 'Licensing']

export function Editorial() {
  const { items } = useTrackPlayer(tracks)

  return (
    <div className="ed">
      <header className="ed__header">
        <div className="ed__bar container">
          <Logo width={120} />
          <nav className="ed__nav" aria-label="Primary">
            {NAV.map((label) => (
              <a key={label} href={`#${label.toLowerCase().replace(/ /g, '-')}`}>
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
            {positioning.eyebrow}
          </p>
          <h1 className="ed__h1">
            Original music for brands, games <strong>&amp; film.</strong>
          </h1>
          <p className="ed__lede">{positioning.lede}</p>
          <div className="ed__actions">
            <a className="ed__btn" href="#contact">
              Start a project
            </a>
            <a className="ed__ghost" href="#work">
              <PlayIcon />
              {positioning.reelCta}
            </a>
          </div>
        </div>
        <img className="ed__heroImg" src={consoleImage} alt="Studio console" />
      </section>

      <div className="ed__strip">
        <div className="ed__stripInner container">
          <span className="ed__label">Music for</span>
          <ul className="ed__clients">
            {clients.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="ed__split container" id="services">
        <p className="ed__label">Services</p>
        <div className="ed__rows">
          {services.map((service, i) => (
            <article className="ed__row" key={service.num} data-lead={i === 0 || undefined}>
              <span className="ed__num">{service.num}</span>
              <h2 className="ed__rowTitle">{service.title}</h2>
              <div className="ed__rowBody">
                <p>{service.body}</p>
                {service.cta && (
                  <a className="ed__link" href="#contact">
                    {service.cta}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ed__music container" id="work">
        <div className="ed__musicHead">
          <h2 className="ed__h2">Selected Work</h2>
          <a className="ed__link" href="https://open.spotify.com" target="_blank" rel="noreferrer">
            ♫ All music →
          </a>
        </div>

        <div className="ed__featured">
          <Placeholder label={featuredWork.placeholder} ratio="16 / 9" />
          <div className="ed__featuredText">
            <p className="ed__featuredKicker">{featuredWork.kicker}</p>
            <p className="ed__featuredTitle">{featuredWork.title}</p>
            <p className="ed__rowBody">{featuredWork.body}</p>
          </div>
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
                  <span className="ed__trackArtist">{track.project}</span>
                </span>
                <span className="ed__trackState">{track.playing ? 'Now playing' : ''}</span>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <section className="ed__dance" id="ecstatic-dance">
        <div className="ed__danceText">
          <p className="ed__labelLight">{ecstaticDance.kicker}</p>
          <h2 className="ed__h2 ed__h2--lines">
            {ecstaticDance.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="ed__danceBody">{ecstaticDance.body}</p>
          <div>
            <a className="ed__btnLight" href="#contact">
              {ecstaticDance.cta}
            </a>
          </div>
        </div>
        <Placeholder label={ecstaticDance.placeholder} tone="light" minHeight={420} />
      </section>

      <section className="ed__quotes container">
        {quotes.map((quote) => (
          <blockquote className="ed__quoteCard" key={quote.name}>
            <p className="ed__quoteText">“{quote.text}”</p>
            <footer className="ed__quoteWho">
              <span className="ed__quoteName">{quote.name}</span>
              <span className="ed__quoteRole">{quote.role}</span>
            </footer>
          </blockquote>
        ))}
      </section>

      <section className="ed__studio" id="studio">
        <img src={studioImage} alt="Joel Loopez in his studio in La Floresta" loading="lazy" />
        <div className="ed__studioText">
          <p className="ed__label">For artists · La Floresta studio</p>
          <h2 className="ed__h3">
            Produce your song,
            <br />
            surrounded by nature.
          </h2>
          <p className="ed__studioBody">
            Professional mics and gear, acoustic and electronic instruments, and a wide arsenal of
            plugins. A calm space, with attention to detail and deep listening — in person or
            remotely.
          </p>
          <div>
            <a className="ed__btn" href="#contact">
              Visit — no commitment
            </a>
          </div>
        </div>
      </section>

      <section className="ed__licensing container" id="licensing">
        <div className="ed__licensingText">
          <p className="ed__label">Licensing &amp; packs</p>
          <h2 className="ed__h3">300+ tracks, ready to license.</h2>
          <p className="ed__studioBody">
            Original compositions, musical fragments and soundscapes — sorted by style, emotion and
            narrative use. Available on AudioJungle, Pond5, MotionArray, Envato, Unity, Unreal and
            more.
          </p>
          <a className="ed__link" href="https://audiojungle.net" target="_blank" rel="noreferrer">
            Browse on the platforms →
          </a>
        </div>
        <ul className="ed__packs">
          {packs.map((pack) => (
            <li key={pack.name}>
              <Placeholder label="Pack cover" ratio="3 / 4" />
              <span className="ed__packName">{pack.name}</span>
              <span className="ed__packWhere">{pack.where}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="ed__about container" id="about">
        <p className="ed__label">About</p>
        <p className="ed__aboutText">{about.editorial}</p>
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
