import { useState } from 'react'
import { contact, languages, nav, social } from '../data/site'
import { Logo } from './Logo'
import {
  InstagramIcon,
  MailIcon,
  MapIcon,
  PencilIcon,
  PhoneIcon,
  SoundcloudIcon,
  SpotifyIcon,
  YoutubeIcon,
} from './Icons'
import './Header.css'

const socialIcons = {
  spotify: SpotifyIcon,
  instagram: InstagramIcon,
  soundcloud: SoundcloudIcon,
  youtube: YoutubeIcon,
  blog: PencilIcon,
}

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__inner container">
        <ul className="topbar__contact">
          <li>
            <PhoneIcon />
            <a href={contact.phoneHref}>Tel: {contact.phone}</a>
          </li>
          <li>
            <MailIcon />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <MapIcon />
            <span>{contact.location}</span>
          </li>
        </ul>

        <ul className="topbar__social">
          {social.map((item) => {
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
      </div>
    </div>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <TopBar />

      <div className="navbar">
        <div className="navbar__inner container">
          <a className="navbar__brand" href="#top" aria-label="Joel Loopez — home">
            <Logo width={160} />
          </a>

          <button
            className="navbar__toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>

          <nav
            id="primary-nav"
            className="navbar__nav"
            data-open={open || undefined}
            aria-label="Primary"
          >
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}

            {languages.map((lang) => (
              <a
                key={lang.code}
                href={lang.href}
                lang={lang.code}
                aria-current={lang.current ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {lang.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
