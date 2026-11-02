import { useEffect, useRef, useState } from 'react'
import { musicService as t, works } from '../data/music'
import { PlayIcon } from '../components/Icons'
import { BoldContact, BoldSubpage, ServicePaths, SubHero } from './Bold'
import './BoldMusicService.css'

const playerSrc = (work) =>
  `https://player.vimeo.com/video/${work.id}?h=${work.hash}&autoplay=1&title=0&byline=0&portrait=0&dnt=1`

/** B subview: custom music — who it's for, the work to watch, then the other services. */
export function BoldMusicService() {
  const [active, setActive] = useState(null)
  const dialog = useRef(null)

  // The native dialog brings Esc, the backdrop and focus return for free.
  useEffect(() => {
    const el = dialog.current
    if (active && !el.open) el.showModal()
    if (!active && el.open) el.close()
  }, [active])

  const hero = (
    <SubHero
      label={t.label}
      title={t.title}
      aside={
        <>
          <p className="bo__subLede">{t.body}</p>
          <div className="bo__subCtas">
            <a className="bo__btnLight" href="#contact">
              Start a project
            </a>
            <a className="bo__textLink" href="#work">
              Watch the work
            </a>
          </div>
        </>
      }
    />
  )

  return (
    <BoldSubpage hero={hero}>
      <section className="ms__brands container" aria-labelledby="ms-brands">
        <h2 className="ms__label" id="ms-brands">
          Music for
        </h2>
        <p className="ms__brandList">
          {t.brands.map((brand, i) => (
            <span key={brand}>
              {brand}
              <span className="ms__punct">
                {i === t.brands.length - 1 ? '.' : i === t.brands.length - 2 ? ' &' : ','}
              </span>{' '}
            </span>
          ))}
        </p>
        <div className="ms__facts">
          {t.facts.map((fact) => (
            <p key={fact.join('')}>
              {fact.length === 3 ? (
                <>
                  {fact[0]}
                  <span className="ms__strong">{fact[1]}</span>
                  {fact[2]}
                </>
              ) : (
                fact[0]
              )}
            </p>
          ))}
        </div>
      </section>

      <section className="ms__work container" id="work" aria-labelledby="ms-work">
        <div className="ms__workHead">
          <h2 className="bo__h2" id="ms-work">
            Watch.
          </h2>
          <a className="bo__btn" href={t.vimeoProfile} target="_blank" rel="noreferrer">
            <PlayIcon size={12} /> More on Vimeo
          </a>
        </div>

        <div className="ms__videos">
          {works.map((work, i) => (
            <button
              type="button"
              className="ms__video"
              data-featured={i === 0 || undefined}
              key={work.id}
              onClick={() => setActive(work)}
              aria-label={`Play ${work.title}, ${work.meta}`}
            >
              <span className="ms__videoTop">
                <span className="ms__videoNum">{String(i + 1).padStart(2, '0')}</span>
                <span className="ms__videoPlay" aria-hidden="true">
                  <PlayIcon size={i === 0 ? 22 : 14} />
                </span>
              </span>
              <span className="ms__videoMeta">
                <span className="ms__videoTitle">{work.title}</span>
                <span className="ms__videoSub">{work.meta}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="ms__services container" aria-labelledby="ms-services">
        <h2 className="bo__h2" id="ms-services">
          Services.
        </h2>
        <ServicePaths />
      </section>

      <BoldContact />

      <dialog
        ref={dialog}
        className="ms__dialog"
        aria-labelledby="ms-player-title"
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialog.current && setActive(null)}
      >
        {active && (
          <div className="ms__player">
            <div className="ms__playerHead">
              <div>
                <p className="ms__playerTitle" id="ms-player-title">
                  {active.title}
                </p>
                <p className="ms__playerMeta">{active.meta}</p>
              </div>
              <button
                type="button"
                className="ms__close"
                onClick={() => setActive(null)}
                aria-label="Close video"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                  <path d="M3 3l10 10M13 3 3 13" />
                </svg>
              </button>
            </div>
            <div className="ms__frame">
              <iframe
                src={playerSrc(active)}
                title={`${active.title} — ${active.meta}`}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a
              className="ms__vimeoLink"
              href={`https://vimeo.com/${active.id}`}
              target="_blank"
              rel="noreferrer"
            >
              Open on Vimeo ↗
            </a>
          </div>
        )}
      </dialog>
    </BoldSubpage>
  )
}
