import {
  about,
  consoleImage,
  ecstaticDance,
  featuredWork,
  packs,
  paths,
  quotes,
  studioImage,
} from '../data/designs'
import { contact, social } from '../data/site'
import { tools } from '../data/tools'
import { tracks } from '../data/tracks'
import { useTrackPlayer } from '../hooks/useTrackPlayer'
import { Logo } from '../components/Logo'
import {
  InstagramIcon,
  PencilIcon,
  PlayIcon,
  SoundcloudIcon,
  SpotifyIcon,
  YoutubeIcon,
} from '../components/Icons'
import { Placeholder } from '../components/Placeholder'
import './Paths.css'

const NAV = ['Work', 'Ecstatic Dance', 'Studio', 'Licensing', 'Contact']

const socialIcons = {
  instagram: InstagramIcon,
  spotify: SpotifyIcon,
  soundcloud: SoundcloudIcon,
  youtube: YoutubeIcon,
  blog: PencilIcon,
}

export function Paths() {
  const { items } = useTrackPlayer(tracks)
  const top = items.slice(0, 4)

  return (
    <div className="pa">
      <div className="pa__top" id="top">
        <img className="pa__topBg" src={consoleImage} alt="" aria-hidden="true" />

        <header className="pa__header container">
          <Logo width={120} />
          <nav className="pa__nav" aria-label="Primary">
            {NAV.map((label) => (
              <a key={label} href={`#${label.toLowerCase().replace(/ /g, '-')}`}>
                {label}
              </a>
            ))}
            <span className="pa__lang">
              ES / <span>EN</span>
            </span>
          </nav>
        </header>

        <div className="pa__topBody container">
          <div className="pa__intro">
            <h1 className="pa__h1">
              Original music for
              <br />
              brands, games &amp; film
            </h1>
            <p className="pa__lede">
              Composer and producer in Barcelona. Music for Domino’s, CANADA and ESLAND. What are
              you working on?
            </p>
          </div>

          <nav className="pa__paths" aria-label="Choose your path">
            {paths.map((path) => (
              <a className="pa__path" key={path.kicker} data-lead={path.lead || undefined} href={path.href}>
                <span className="pa__pathKicker">{path.kicker}</span>
                <span className="pa__pathTitle">{path.title} →</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <section className="pa__work container" id="work">
        <p className="pa__eyebrow">
          <span className="pa__rule" aria-hidden="true" />
          Custom music for brands, games &amp; film
        </p>

        <div className="pa__featured">
          <Placeholder label={featuredWork.placeholder} ratio="16 / 9" />
          <div className="pa__featuredText">
            <h2 className="pa__h2">Music that fits the story — in any genre.</h2>
            <p className="pa__body">
              Original scores and music supervision for ads, video games, film and events.
            </p>
            <div>
              <a className="pa__btn" href="#contact">
                Start a project
              </a>
            </div>
          </div>
        </div>

        <ul className="pa__tracks">
          {top.map((track) => (
            <li key={track.id}>
              <button
                className="pa__trackCard"
                data-playing={track.playing || undefined}
                onClick={track.toggle}
                aria-label={`${track.playing ? 'Pause' : 'Play'} ${track.title}`}
              >
                <span className="pa__trackBtn" aria-hidden="true">
                  {track.playing ? <span className="pa__bars" /> : <PlayIcon />}
                </span>
                <span className="pa__trackMeta">
                  <span className="pa__trackTitle">{track.title}</span>
                  <span className="pa__trackProject">{track.project}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="pa__quotes container">
        {quotes.map((quote) => (
          <blockquote className="pa__quoteCard" key={quote.name}>
            <p className="pa__quoteText">“{quote.text}”</p>
            <footer className="pa__quoteWho">
              <span className="pa__quoteName">{quote.name}</span>
              <span className="pa__quoteRole">{quote.role}</span>
            </footer>
          </blockquote>
        ))}
      </section>

      <section className="pa__studio container" id="studio">
        <img src={studioImage} alt="Joel Loopez in his studio" loading="lazy" />
        <div className="pa__studioText">
          <p className="pa__eyebrow">
            <span className="pa__rule" aria-hidden="true" />
            For artists &amp; composers
          </p>
          <h2 className="pa__h2">
            Production &amp;
            <br />
            Mentorship
          </h2>
          <p className="pa__body">
            From my studio in La Floresta, surrounded by nature, I help you bring your song to life
            — in person or remotely. For composers and producers, I offer mentorship to build a
            professional career.
          </p>
          <div className="pa__studioActions">
            <a className="pa__btn" href="#contact">
              Visit — no commitment
            </a>
            <a className="pa__link" href="#contact">
              Ask about mentoring →
            </a>
          </div>
        </div>
      </section>

      <section className="pa__dance container" id="ecstatic-dance">
        <div className="pa__danceText">
          <p className="pa__kicker">For event organisers</p>
          <h2 className="pa__h2">Ecstatic Dance DJ</h2>
          <p className="pa__body">
            Journeys for free, conscious movement — from slow, grounding rhythms to the peak and
            back to stillness. For gatherings, retreats and festivals.
          </p>
          <div>
            <a className="pa__btn" href="#contact">
              {ecstaticDance.cta}
            </a>
          </div>
        </div>
        <Placeholder label={ecstaticDance.placeholder} minHeight={360} className="pa__dancePh" />
      </section>

      <section className="pa__licensing container" id="licensing">
        <div className="pa__licensingText">
          <p className="pa__eyebrow">
            <span className="pa__rule" aria-hidden="true" />
            Licensing
          </p>
          <h2 className="pa__h2">300+ tracks &amp; sound packs</h2>
          <p className="pa__body pa__body--narrow">
            Sorted by style, emotion and narrative use. Buy and license them on the platform you
            already use.
          </p>
          <ul className="pa__packs">
            {packs.map((pack) => (
              <li key={pack.name}>
                <span className="pa__packName">{pack.name}</span>
                <span className="pa__packWhere">{pack.where}</span>
              </li>
            ))}
          </ul>
        </div>
        <ul className="pa__platforms">
          {tools.map((tool) => (
            <li key={tool.id}>{tool.name}</li>
          ))}
        </ul>
      </section>

      <footer className="pa__footer" id="contact">
        <div className="pa__footerInner container">
          <div className="pa__footerAbout">
            <p className="pa__kickerMuted">About &amp; contact</p>
            <p className="pa__aboutText">{about.paths}</p>
            <div>
              <a className="pa__btn" href={`mailto:${contact.email}`}>
                Write to me
              </a>
            </div>
          </div>

          <div className="pa__footerDetails">
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <span>{contact.location}</span>
            <ul className="pa__social">
              {social.map((item) => {
                const Icon = socialIcons[item.id]
                return (
                  <li key={item.id}>
                    <a href={item.href} aria-label={item.label}>
                      <Icon />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="pa__legal">
          <div className="pa__legalInner container">
            <span>Joel Loopez © {new Date().getFullYear()} · Kit Digital — Next Generation EU</span>
            <span className="pa__legalLinks">
              <a href="#privacy">Privacy Policy</a>
              <a href="#cookies">Cookie Policy</a>
              <a href="#legal">Legal Notice</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
