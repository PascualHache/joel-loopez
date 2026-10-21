import { consoleImage, paths, studioImage } from '../data/designs'
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
import './Paths.css'

const NAV = ['Music', 'Studio', 'Licensing', 'Contact']

const socialIcons = {
  instagram: InstagramIcon,
  spotify: SpotifyIcon,
  soundcloud: SoundcloudIcon,
  youtube: YoutubeIcon,
  blog: PencilIcon,
}

const STUDIO_FEATURES = [
  'Professional mics & gear',
  'Acoustic & electronic instruments',
  'Plugins & virtual instruments',
]

export function Paths() {
  const { items, playing } = useTrackPlayer(tracks)
  const featured = playing ?? items[0]
  const rest = items.filter((t) => t.id !== featured.id)

  return (
    <div className="pa">
      <div className="pa__top" id="top">
        <img className="pa__topBg" src={consoleImage} alt="" aria-hidden="true" />

        <header className="pa__header container">
          <Logo width={120} />
          <nav className="pa__nav" aria-label="Primary">
            {NAV.map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`}>
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
              Original Music &amp;
              <br />
              Audio Services
            </h1>
            <p className="pa__lede">
              Composer and producer in Barcelona. Tell me what you’re working on.
            </p>
          </div>

          <nav className="pa__paths" aria-label="Choose your path">
            {paths.map((path, i) => (
              <a className="pa__path" key={path.kicker} data-lead={i === 0 || undefined} href={path.href}>
                <span className="pa__pathKicker">{path.kicker}</span>
                <span className="pa__pathTitle">{path.title} →</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <section className="pa__music container" id="music">
        <div className="pa__musicLeft">
          <p className="pa__eyebrow">
            <span className="pa__rule" aria-hidden="true" />
            For film, games &amp; ads
          </p>
          <h2 className="pa__h2">Original Soundtracks</h2>
          <p className="pa__body">
            Custom music in any genre you need, plus music supervision for your production.
          </p>

          <div className="pa__player">
            <div className="pa__playerRow">
              <button
                className="pa__playerBtn"
                onClick={featured.toggle}
                aria-label={`${featured.playing ? 'Pause' : 'Play'} ${featured.title}`}
              >
                {featured.playing ? <span className="pa__bars" /> : <PlayIcon size={24} />}
              </button>
              <div className="pa__playerMeta">
                <span className="pa__playerState">
                  {featured.playing ? 'Now playing' : 'Featured'}
                </span>
                <span className="pa__playerTitle">{featured.title}</span>
                <span className="pa__playerArtist">{featured.artist}</span>
              </div>
            </div>
            <div className="pa__progress">
              <div style={{ width: featured.playing ? '38%' : '0%' }} />
            </div>
          </div>
        </div>

        <div className="pa__musicRight">
          <ol className="pa__list">
            {rest.map((track) => (
              <li key={track.id}>
                <button className="pa__track" onClick={track.toggle}>
                  <span className="pa__trackLeft">
                    <span className="pa__trackNum">{track.num}</span>
                    <span className="pa__trackTitle">{track.title}</span>
                  </span>
                  <span className="pa__trackAction">Play</span>
                </button>
              </li>
            ))}
          </ol>
          <a className="pa__link" href="https://open.spotify.com" target="_blank" rel="noreferrer">
            ♫ More music →
          </a>
        </div>
      </section>

      <section className="pa__studio container" id="studio">
        <img src={studioImage} alt="Joel Loopez in his studio" loading="lazy" />
        <div className="pa__studioText">
          <p className="pa__eyebrow">
            <span className="pa__rule" aria-hidden="true" />
            For artists
          </p>
          <h2 className="pa__h2">
            Music Production
            <br />
            for Artists
          </h2>
          <p className="pa__body">
            From my studio in La Floresta, surrounded by nature, I support the production of your
            song — in person or remotely. A close, respectful approach where you can explore and
            grow.
          </p>
          <ul className="pa__features">
            {STUDIO_FEATURES.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div>
            <a className="pa__btn" href="#contact">
              Book a visit — no commitment
            </a>
          </div>
        </div>
      </section>

      <section className="pa__mentorship container" id="mentorship">
        <div>
          <p className="pa__kicker">For composers &amp; producers</p>
          <p className="pa__mentorTitle">Mentorship to help build a professional career.</p>
        </div>
        <a className="pa__btn" href="#contact">
          Ask about mentoring
        </a>
      </section>

      <section className="pa__licensing container" id="libraries">
        <div className="pa__licensingHead">
          <div>
            <p className="pa__eyebrow">
              <span className="pa__rule" aria-hidden="true" />
              Licensing
            </p>
            <h2 className="pa__h2">300+ tracks, ready to license</h2>
          </div>
          <p className="pa__body pa__body--narrow">
            Sorted by style, emotion and narrative use — find the right track on the platform you
            already use.
          </p>
        </div>
        <ul className="pa__platforms">
          {tools.map((tool) => (
            <li key={tool.id}>{tool.name}</li>
          ))}
        </ul>
      </section>

      <footer className="pa__footer" id="contact">
        <div className="pa__footerInner container">
          <div className="pa__footerBrand">
            <Logo width={160} />
            <div className="pa__footerDetails">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <span>{contact.phone}</span>
              <span>Barcelona, España</span>
            </div>
          </div>
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
