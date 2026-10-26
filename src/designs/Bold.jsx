import {
  about,
  clients,
  ecstaticDance,
  featuredWork,
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
import './Bold.css'

const NAV = ['Work', 'Services', 'Ecstatic Dance', 'Licensing']

export function Bold() {
  const { items } = useTrackPlayer(tracks)
  const [lead, ...rest] = services.slice(0, 4)

  return (
    <div className="bo">
      <div className="bo__top" id="top">
        <div className="bo__topInner container">
          <header className="bo__header">
            <Logo width={120} />
            <nav className="bo__nav" aria-label="Primary">
              {NAV.map((label) => (
                <a key={label} href={`#${label.toLowerCase().replace(/ /g, '-')}`}>
                  {label}
                </a>
              ))}
              <span className="bo__lang">ES / EN</span>
              <a className="bo__btnLight" href="#contact">
                Start a project
              </a>
            </nav>
          </header>

          <h1 className="bo__h1">
            Music for
            <br />
            brands, games
            <br />
            &amp; film.
          </h1>

          <div className="bo__topGrid">
            <div className="bo__topText">
              <p className="bo__lede">
                Original soundtracks in any genre you need. Composed in Barcelona.
              </p>
              <div className="bo__clients">
                <span className="bo__clientsLabel">Music for</span>
                {clients.map((client) => (
                  <span key={client}>{client}</span>
                ))}
              </div>
            </div>
            <Placeholder
              label={featuredWork.placeholder}
              tone="light"
              minHeight={320}
              className="bo__topPh"
            />
          </div>
        </div>
      </div>

      <section className="bo__music container" id="work">
        <div className="bo__musicHead">
          <h2 className="bo__h2">Press play.</h2>
          <a
            className="bo__btn"
            href="https://open.spotify.com"
            target="_blank"
            rel="noreferrer"
          >
            ♫ More music
          </a>
        </div>

        <div className="bo__tiles">
          {items.map((track) => (
            <button
              className="bo__tile"
              key={track.id}
              data-playing={track.playing || undefined}
              onClick={track.toggle}
              aria-label={`${track.playing ? 'Pause' : 'Play'} ${track.title}`}
            >
              <span className="bo__tileTop">
                <span className="bo__tileNum">{track.num}</span>
                <span className="bo__tileBtn" aria-hidden="true">
                  {track.playing ? <span className="bo__bars" /> : <PlayIcon />}
                </span>
              </span>
              <span className="bo__tileMeta">
                <span className="bo__tileTitle">{track.title}</span>
                <span className="bo__tileArtist">{track.project}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="bo__cards container" id="services">
        <article className="bo__lead">
          <div className="bo__leadText">
            <span className="bo__leadKicker">{lead.kicker}</span>
            <span className="bo__leadTitle">{lead.cardTitle}</span>
            <span className="bo__leadBody">{lead.cardBody}</span>
          </div>
          <a className="bo__btn" href="#contact">
            Start a project
          </a>
        </article>

        {rest.map((service) => (
          <article className="bo__card" key={service.num}>
            <span className="bo__cardKicker">{service.kicker}</span>
            <span className="bo__cardTitle">{service.cardTitle}</span>
            <span className="bo__cardBody">{service.cardBody}</span>
          </article>
        ))}
      </section>

      <section className="bo__dance" id="ecstatic-dance">
        <div className="bo__danceText">
          <span className="bo__danceKicker">05 · Ecstatic Dance DJ</span>
          <h2 className="bo__h4">
            Dance
            <br />
            freely.
          </h2>
          <p className="bo__danceBody">
            Live DJ journeys for conscious movement — grounding, peak, stillness. For gatherings,
            retreats and festivals.
          </p>
          <div>
            <a className="bo__btnLight" href="#contact">
              {ecstaticDance.cta}
            </a>
          </div>
        </div>
        <Placeholder label={ecstaticDance.placeholder} tone="light" minHeight={460} />
      </section>

      <section className="bo__quotes container">
        {quotes.map((quote) => (
          <blockquote className="bo__quoteCard" key={quote.name}>
            <span className="bo__quoteMark" aria-hidden="true">
              “
            </span>
            <p className="bo__quoteText">{quote.text}</p>
            <footer className="bo__quoteWho">
              <span className="bo__quoteName">{quote.name}</span>
              <span className="bo__quoteRole">{quote.role}</span>
            </footer>
          </blockquote>
        ))}
      </section>

      <section className="bo__studio" id="about">
        <div className="bo__studioText">
          <p className="bo__eyebrow">
            <span className="bo__rule" aria-hidden="true" />
            About Joel
          </p>
          <h2 className="bo__h3">
            Composer, producer,
            <br />
            DJ. Barcelona.
          </h2>
          <p className="bo__studioBody">{about.bold}</p>
        </div>
        <img src={studioImage} alt="Joel Loopez in his studio" loading="lazy" />
      </section>

      <footer className="bo__contact" id="contact">
        <div className="bo__contactInner container">
          <div className="bo__contactGrid">
            <h2 className="bo__h4">
              Let’s make
              <br />
              something.
            </h2>
            <div className="bo__contactDetails">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <span>{contact.phone}</span>
              <span className="bo__muted">{contact.location}</span>
            </div>
          </div>

          <div className="bo__contactFoot">
            <span>Joel Loopez © {new Date().getFullYear()} · Kit Digital — Next Generation EU</span>
            <span className="bo__contactLinks">
              {social.map((item) => (
                <a key={item.id} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href="#privacy">Privacy</a>
              <a href="#legal">Legal</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
