import { contact, footer, languages, legal, nav, social } from '../data/site'
import { Logo } from './Logo'
import {
  InstagramIcon,
  MailFilledIcon,
  PencilIcon,
  PhoneIcon,
  PinIcon,
  SoundcloudIcon,
  SpotifyIcon,
  YoutubeIcon,
} from './Icons'
import './Footer.css'

const socialIcons = {
  spotify: SpotifyIcon,
  instagram: InstagramIcon,
  soundcloud: SoundcloudIcon,
  youtube: YoutubeIcon,
  blog: PencilIcon,
}

const orderedSocial = footer.socialOrder.map((id) =>
  social.find((item) => item.id === id),
)

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__main container">
        <a className="footer__brand" href="#top" aria-label="Joel Loopez — home">
          <Logo width={205} />
        </a>

        <ul className="footer__social">
          {orderedSocial.map((item) => {
            const Icon = socialIcons[item.id]
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <Icon />
                </a>
              </li>
            )
          })}
        </ul>

        <ul className="footer__contact">
          <li>
            <PinIcon />
            <span>{footer.location}</span>
          </li>
          <li>
            <PhoneIcon />
            <a href={contact.phoneHref}>{contact.phone}</a>
          </li>
          <li>
            <MailFilledIcon />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
        </ul>

        <nav className="footer__nav" aria-label="Footer">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <nav className="footer__lang" aria-label="Language">
          {languages.map((lang) => (
            <a
              key={lang.code}
              href={lang.href}
              lang={lang.code}
              aria-current={lang.current ? 'true' : undefined}
            >
              {lang.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer__bar">
        <div className="footer__bar-inner container">
          <p>{footer.copyright}</p>
          <nav className="footer__legal" aria-label="Legal">
            {legal.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
