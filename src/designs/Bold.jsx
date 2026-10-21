import { consoleImage, services, studioImage } from '../data/designs'
import { contact, social } from '../data/site'
import { tracks } from '../data/tracks'
import { useTrackPlayer } from '../hooks/useTrackPlayer'
import { Logo } from '../components/Logo'
import { PlayIcon } from '../components/Icons'
import './Bold.css'

const NAV = ['Music', 'Services', 'Studio', 'Licensing']

export function Bold() {
  const { items } = useTrackPlayer(tracks)

  return (
    <div className="bo">
      <div className="bo__top" id="top">
        <div className="bo__topInner container">
          <header className="bo__header">
            <Logo width={120} />
            <nav className="bo__nav" aria-label="Primary">
              {NAV.map((label) => (
                <a key={label} href={`#${label.toLowerCase()}`}>
                  {label}
                </a>
              ))}
              <span className="bo__lang">ES / EN</span>
              <a className="bo__btnLight" href="#contact">
                Get in touch
              </a>
            </nav>
          </header>

          <h1 className="bo__h1">
            Original
            <br />
            Music &amp; Audio
          </h1>

          <div className="bo__topGrid">
            <p className="bo__lede">
              Custom music for film, games and ads. Production for artists. Mentorship for
              composers. Composed in Barcelona.
            </p>
            <img className="bo__topImg" src={consoleImage} alt="Studio console" />
          </div>
        </div>
      </div>

      <section className="bo__music container" id="music">
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
                <span className="bo__tileArtist">{track.artist}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="bo__cards container" id="services">
        {services.map((service, i) => (
          <article className="bo__card" key={service.num} data-feature={i === 3 || undefined}>
            <span className="bo__cardKicker">{service.kicker}</span>
            <span className="bo__cardTitle">{service.cardTitle}</span>
            <span className="bo__cardBody">{service.cardBody}</span>
          </article>
        ))}
      </section>

      <section className="bo__studio" id="studio">
        <div className="bo__studioText">
          <p className="bo__eyebrow">
            <span className="bo__rule" aria-hidden="true" />
            A Professional Studio At Your Service
          </p>
          <h2 className="bo__h3">
            Surrounded by nature.
            <br />
            Built for deep listening.
          </h2>
          <p className="bo__studioBody">
            What matters most to me is the human connection. If you have a song idea in mind,
            you’re warmly invited to visit — no pressure, no commitment.
          </p>
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
              <span className="bo__muted">Barcelona, España</span>
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
