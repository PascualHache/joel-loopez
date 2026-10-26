import { useEffect } from 'react'
import {
  about,
  clients,
  ecstaticDance,
  featuredWork,
  packs,
  quotes,
  services,
  studioImage,
  turn3,
} from '../../data/designs'
import { contact, social } from '../../data/site'
import { tracks } from '../../data/tracks'
import { useTrackPlayer } from '../../hooks/useTrackPlayer'
import { ensureTurn3Fonts } from '../../lib/fonts'
import { Logo } from '../../components/Logo'
import { PlayIcon } from '../../components/Icons'
import { Placeholder } from '../../components/Placeholder'
import './turn3.css'

/**
 * The three Turn 3 identities share this page: same content structure, same
 * markup, different skin. Each variant supplies its own hero and a theme class
 * that redefines the --t3-* tokens below.
 */
export function Turn3Page({ variant, theme, hero, lightLogo = false, placeholderTone = 'dark' }) {
  const { items } = useTrackPlayer(tracks)

  useEffect(() => {
    ensureTurn3Fonts()
    document.documentElement.dataset.design = variant
    return () => {
      delete document.documentElement.dataset.design
    }
  }, [variant])

  return (
    <div className={`t3 ${theme}`}>
      <header className="t3__header">
        <div className="t3__bar t3__container">
          <Logo width={104} negative={lightLogo} />
          <nav className="t3__nav" aria-label="Primary">
            {turn3.nav.map((label) => (
              <a key={label} href={`#${label.toLowerCase().replace(/ /g, '-')}`}>
                {label}
              </a>
            ))}
            <a className="t3__navCta" href="#contact">
              {turn3.navCta}
            </a>
          </nav>
        </div>
      </header>

      {hero}

      <section className="t3__clients t3__container" aria-label="Clients">
        <span className="t3__label">Music for</span>
        <ul>
          {clients.map((client) => (
            <li key={client}>{client}</li>
          ))}
        </ul>
      </section>

      <section className="t3__services t3__container" id="services">
        <h2 className="t3__display t3__h2">What I do</h2>
        <ol className="t3__serviceList">
          {services.map((service) => (
            <li key={service.num}>
              <span className="t3__serviceNum">{service.num}</span>
              <span className="t3__serviceTitle t3__display">{service.title}</span>
              <span className="t3__serviceBody">{service.body}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="t3__work t3__container" id="work">
        <h2 className="t3__display t3__h2">Selected work</h2>

        <div className="t3__featured">
          <Placeholder label={featuredWork.placeholder} ratio="16 / 9" tone={placeholderTone} />
          <div className="t3__featuredText">
            <span className="t3__label">{featuredWork.kicker}</span>
            <span className="t3__display t3__h3">{featuredWork.title}</span>
            <p className="t3__muted">{featuredWork.body}</p>
          </div>
        </div>

        <ol className="t3__tracks">
          {items.map((track) => (
            <li key={track.id}>
              <button
                className="t3__track"
                data-playing={track.playing || undefined}
                onClick={track.toggle}
                aria-label={`${track.playing ? 'Pause' : 'Play'} ${track.title}`}
              >
                <span className="t3__trackBtn" aria-hidden="true">
                  {track.playing ? <span className="t3__bars" /> : <PlayIcon />}
                </span>
                <span className="t3__trackMeta">
                  <span className="t3__trackTitle">{track.title}</span>
                  <span className="t3__trackProject">{track.project}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <section className="t3__dance" id="ecstatic-dance">
        <div className="t3__danceInner t3__container">
          <div className="t3__danceText">
            <span className="t3__label">{ecstaticDance.kicker}</span>
            <h2 className="t3__display t3__h2">
              {ecstaticDance.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p className="t3__muted">{ecstaticDance.body}</p>
            <div>
              <a className="t3__btn" href="#contact">
                {ecstaticDance.cta}
              </a>
            </div>
          </div>
          <Placeholder
            label={ecstaticDance.placeholder}
            minHeight={340}
            tone={placeholderTone}
            className="t3__dancePh"
          />
        </div>
      </section>

      <section className="t3__quotes t3__container" aria-label="Testimonials">
        {quotes.map((quote) => (
          <blockquote className="t3__quote" key={quote.name}>
            <p className="t3__quoteText t3__display">“{quote.text}”</p>
            <footer>
              <span className="t3__quoteName">{quote.name}</span>
              <span className="t3__quoteRole">{quote.role}</span>
            </footer>
          </blockquote>
        ))}
      </section>

      <section className="t3__studio t3__container" id="studio">
        <img src={studioImage} alt="Joel Loopez in his studio in La Floresta" loading="lazy" />
        <div className="t3__studioText">
          <span className="t3__label">The studio · La Floresta</span>
          <h2 className="t3__display t3__h2">
            Produce your song,
            <br />
            surrounded by nature.
          </h2>
          <p className="t3__muted">
            Professional mics and gear, acoustic and electronic instruments, and a wide arsenal of
            plugins. A calm space, with attention to detail and deep listening — in person or
            remotely.
          </p>
          <div>
            <a className="t3__btn" href="#contact">
              Visit — no commitment
            </a>
          </div>
        </div>
      </section>

      <section className="t3__licensing t3__container" id="licensing">
        <div className="t3__licensingText">
          <span className="t3__label">Licensing &amp; packs</span>
          <h2 className="t3__display t3__h2">300+ tracks, ready to license.</h2>
          <p className="t3__muted">
            Original compositions, musical fragments and soundscapes — sorted by style, emotion and
            narrative use.
          </p>
        </div>
        <ul className="t3__packs">
          {packs.map((pack) => (
            <li key={pack.name}>
              <span className="t3__packName">{pack.name}</span>
              <span className="t3__packWhere">{pack.where}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="t3__about t3__container" id="about">
        <p className="t3__display t3__aboutText">{about.editorial}</p>
      </section>

      <footer className="t3__footer" id="contact">
        <div className="t3__footerInner t3__container">
          <div className="t3__footerMain">
            <h2 className="t3__display t3__h2">Shall we talk?</h2>
            <a className="t3__email" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <p className="t3__muted">
              {contact.phone} · {contact.location}
            </p>
          </div>
          <ul className="t3__social">
            {social.map((item) => (
              <li key={item.id}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="t3__legal t3__container">
          <span>Joel Loopez © {new Date().getFullYear()}</span>
          <span>Kit Digital — Next Generation EU</span>
        </div>
      </footer>
    </div>
  )
}
