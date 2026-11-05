import {
  about,
  clients,
  ecstaticDance,
  quotes,
  services,
  studioImage,
} from '../data/designs'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { contact, social } from '../data/site'
import { Logo } from '../components/Logo'
import { Placeholder } from '../components/Placeholder'
import './Bold.css'

/** The top nav lists subviews only; moving around the home is done with anchors. */
const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Music', to: '/music' },
  { label: 'The Studio', to: '/the-studio' },
  { label: 'Ecstatic Dance', to: '/ecstatic-dance' },
]

/** Shared by the home and every B subview. */
export function BoldHeader() {
  return (
    <header className="bo__header">
      <Link to="/" aria-label="Joel Loopez — home">
        <Logo width={120} />
      </Link>
      <nav className="bo__nav" aria-label="Primary">
        {NAV.map((item) => (
          <NavLink key={item.to} to={item.to} end>
            {item.label}
          </NavLink>
        ))}
        <span className="bo__lang">ES / EN</span>
        <Link className="bo__btnLight" to="/#contact">
          Start a project
        </Link>
      </nav>
    </header>
  )
}

/**
 * The index of the three subviews. On the home it leads with Music; on a
 * subview it leads with — and marks as current — the one you are on.
 */
export function ServicePaths() {
  const { pathname } = useLocation()
  const here = services.some((service) => service.to === pathname)

  return (
    <nav className="bo__paths" aria-label="What I do">
      {services.map((service, i) => {
        const current = service.to === pathname
        const lead = here ? current : i === 0
        return (
          <Link
            className="bo__path"
            key={service.num}
            data-lead={lead || undefined}
            aria-current={current ? 'page' : undefined}
            to={service.to}
          >
            <span className="bo__pathKicker">
              {service.num} · {service.includes}
            </span>
            <span className="bo__pathTitle">{service.title} →</span>
            <span className="bo__pathBody">{service.body}</span>
          </Link>
        )
      })}
    </nav>
  )
}

/** The red contact block that closes the home and every B subview. */
export function BoldContact() {
  return (
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
            <a href={contact.phoneHref}>{contact.phone}</a>
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
            <Link to="/privacy">Privacy</Link>
            <Link to="/legal">Legal</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

/**
 * A subview's opening: a red label and a light headline on the left, `aside`
 * on the right. `lead` sits under the headline when the right side is taken.
 */
export function SubHero({ label, title, lead, aside }) {
  return (
    <div className="bo__subHero">
      <div className="bo__subHeroMain">
        <p className="bo__subLabel">
          <span className="bo__subRule" aria-hidden="true" />
          {label}
        </p>
        <h1 className="bo__subH1">{title}</h1>
        {lead}
      </div>
      {aside && <div className="bo__subHeroAside">{aside}</div>}
    </div>
  )
}

/** A B subview: a slim red header band and the hero on black, then the page. */
export function BoldSubpage({ hero, children }) {
  return (
    <div className="bo">
      <div className="bo__top">
        <div className="bo__subHead container">
          <BoldHeader />
        </div>
      </div>
      <div className="bo__subTop container">
        {hero}
      </div>
      {children}
    </div>
  )
}

export function Bold() {
  return (
    <div className="bo">
      <div className="bo__top" id="top">
        <div className="bo__topInner container">
          <BoldHeader />

          <h1 className="bo__h1">
            Music for
            <br />
            brands, games
            <br />
            &amp; film.
          </h1>

          <div className="bo__topText">
            <p className="bo__lede">
              Original soundtracks in any genre you need. Composed in Barcelona.
            </p>
            <div className="bo__clients">
              <span className="bo__clientsLabel">Music for</span>
              {clients.map((client) => (
                <img
                  className="bo__clientLogo"
                  key={client.name}
                  src={client.logo}
                  alt={client.name}
                  style={{ '--logo-scale': client.scale ?? 1 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bo__services container" id="services">
        <ServicePaths />
      </div>

      <section className="bo__dance" id="ecstatic-dance">
        <div className="bo__danceText">
          <span className="bo__danceKicker">03 · Ecstatic Dance</span>
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

      <BoldContact />
    </div>
  )
}
