import { libraries, licensing as t, musicPacks, packFeatures, sfxPacks } from '../data/licensing'
import './MusicLicensing.css'

/** Diagonal "opens elsewhere" arrow; it nudges up-right on hover. */
function External({ size = 14 }) {
  return (
    <svg className="lc__ext" width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 11 11 5M6 5h5v5" />
    </svg>
  )
}

function Pack({ pack }) {
  return (
    <a className="lc__pack" href={pack.href} target="_blank" rel="noreferrer">
      <span className="lc__cover" aria-hidden="true">
        <span className="lc__tag">{pack.tag}</span>
        <span className="lc__short">{pack.short}</span>
      </span>
      <span className="lc__packText">
        <span className="lc__name">{pack.name}</span>
        <span className="lc__desc">{pack.desc}</span>
      </span>
      <span className="lc__buy">
        <span className="lc__price">{pack.price}</span>
        <span className="lc__buyLink">
          Buy on itch.io <External size={12} />
        </span>
      </span>
    </a>
  )
}

/**
 * The licensing half of /music: the bundle offer, the packs to buy today, and
 * where else the 300+ track catalog lives.
 */
export function MusicLicensing() {
  const b = t.bundle

  return (
    <>
      <section className="lc__intro container" id="licensing" aria-labelledby="lc-licensing">
        <div className="bo__subHero">
          <div className="bo__subHeroMain">
            <p className="bo__subLabel">
              <span className="bo__subRule" aria-hidden="true" />
              {t.label}
            </p>
            <h2 className="bo__h2" id="lc-licensing">
              {t.title}
            </h2>
            <p className="bo__subLede">{t.body}</p>
            <div className="bo__subCtas">
              <a className="bo__btnLight" href="#packs">
                Browse the packs
              </a>
              <a className="bo__textLink" href="#platforms">
                300+ tracks on other platforms
              </a>
            </div>
          </div>
          <div className="bo__subHeroAside">
            <article className="lc__bundle" aria-labelledby="lc-bundle">
              <div className="lc__bundleHead">
                <p className="lc__bundleKicker">{b.kicker}</p>
                <h3 className="lc__bundleTitle" id="lc-bundle">
                  {b.title}
                </h3>
                <p className="lc__bundleBody">{b.body}</p>
              </div>
              <div className="lc__bundlePrice">
                <span className="lc__bundleNow">{b.price}</span>
                <span className="lc__bundleWas">
                  <s>{b.was}</s> bought separately
                </span>
              </div>
              <a className="lc__bundleCta" href={b.href} target="_blank" rel="noreferrer">
                {b.cta} <External />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="lc__section container" id="packs" aria-labelledby="lc-packs">
        <div className="lc__head">
          <h2 className="bo__h2" id="lc-packs">
            Music packs.
          </h2>
          <p className="lc__note">{t.musicNote}</p>
        </div>
        <div className="lc__packs">
          {musicPacks.map((pack) => (
            <Pack pack={pack} key={pack.slug} />
          ))}
        </div>
      </section>

      <section className="lc__section container" aria-labelledby="lc-sfx">
        <div className="lc__head">
          <h2 className="bo__h2" id="lc-sfx">
            Sound effects.
          </h2>
          <span className="lc__badge">18+</span>
        </div>
        <div className="lc__packs">
          {sfxPacks.map((pack) => (
            <Pack pack={pack} key={pack.slug} />
          ))}
          <p className="lc__sfxNote">{t.sfxNote}</p>
        </div>
      </section>

      <section className="lc__section container" aria-labelledby="lc-every">
        <h2 className="bo__h2" id="lc-every">
          In every music pack.
        </h2>
        <div className="lc__features">
          {packFeatures.map((f) => (
            <div className="lc__feature" key={f.title}>
              <h3 className="lc__featureTitle">{f.title}</h3>
              <p className="lc__featureBody">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lc__section container" id="platforms" aria-labelledby="lc-platforms">
        <div className="lc__head">
          <h2 className="bo__h2" id="lc-platforms">
            Also on.
          </h2>
          <p className="lc__note">{t.platformsNote}</p>
        </div>
        <nav className="lc__platforms" aria-label="Music libraries">
          {libraries.map((lib) => (
            <a className="lc__platform" href={lib.href} key={lib.name} target="_blank" rel="noreferrer">
              {lib.name}
              <External />
            </a>
          ))}
        </nav>
      </section>
    </>
  )
}
