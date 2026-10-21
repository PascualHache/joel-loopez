/* Inline icon set — no icon library, so the bundle stays dependency-free. */

const base = { width: 16, height: 16, viewBox: '0 0 24 24', 'aria-hidden': 'true' }

export function PhoneIcon() {
  return (
    <svg {...base} fill="currentColor">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .7-.2 1l-2.3 2.2z" />
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4.5" width="20" height="15" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </svg>
  )
}

export function MapIcon() {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2v16" />
    </svg>
  )
}

export function SpotifyIcon() {
  return (
    <svg {...base} fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.781.54-.901 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

export function InstagramIcon() {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function SoundcloudIcon() {
  return (
    <svg {...base} fill="currentColor">
      <rect x="1" y="12" width="1.8" height="5" rx=".9" />
      <rect x="4.4" y="10" width="1.8" height="7" rx=".9" />
      <rect x="7.8" y="8.5" width="1.8" height="8.5" rx=".9" />
      <path d="M12 7.2c1.9 0 3.5 1.3 4 3a3.6 3.6 0 0 1 4.4 3.5A3.3 3.3 0 0 1 17.1 17H12a.9.9 0 0 1-.9-.9V8.1c0-.5.4-.9.9-.9z" />
    </svg>
  )
}

export function YoutubeIcon() {
  return (
    <svg {...base} fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export function PencilIcon() {
  return (
    <svg {...base} fill="currentColor">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  )
}

export function PinIcon() {
  return (
    <svg {...base} fill="currentColor">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  )
}

export function MailFilledIcon() {
  return (
    <svg {...base} fill="currentColor">
      <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v.4l-10 6.1L2 5.9v-.4zm0 2.7 9.5 5.8c.3.2.7.2 1 0L22 8.2v10.3a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5V8.2z" />
    </svg>
  )
}
