import { studio as t } from '../data/studio'
import { Placeholder } from '../components/Placeholder'
import { BoldContact, BoldSubpage, ServicePaths, SubHero } from './Bold'
import './BoldMusic.css'
import './BoldStudio.css'

/** B subview: the studio in La Floresta, home to production for artists and mentorship. */
export function BoldStudio() {
  const [production, mentorship] = t.offers

  const hero = (
    <SubHero
      label={t.label}
      title={t.title}
      aside={
        <>
          <p className="bo__subLede">{t.body}</p>
          <div className="bo__subCtas">
            <a className="bo__btnLight" href={`#${production.id}`}>
              {production.title}
            </a>
            <a className="bo__textLink" href={`#${mentorship.id}`}>
              {mentorship.title}
            </a>
          </div>
        </>
      }
    />
  )

  return (
    <BoldSubpage hero={hero}>
      <section aria-label="The studio among the trees">
        <div className="st__wideWrap">
          <Placeholder tone="brand" className="st__wide" {...t.photos.forest} />
        </div>
      </section>

      <section className="st__space container" aria-labelledby="st-space">
        <div className="st__spaceLead">
          <h2 className="bo__eyebrow" id="st-space">
            <span className="bo__rule" aria-hidden="true" />
            {t.space.label}
          </h2>
          <p className="st__spaceQuote">{t.space.lead}</p>
        </div>
        <div className="st__spaceBody">
          {t.space.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="st__room container" aria-labelledby="st-room">
        <h2 className="bo__h2" id="st-room">
          {t.room.title}
        </h2>
        <div className="st__roomGrid">
          <Placeholder tone="brand" className="st__tall" {...t.photos.wall} />
          <div className="st__roomText">
            <p className="st__roomLead">{t.room.lead}</p>
            <ul className="st__gear">
              {t.room.gear.map(([name, detail]) => (
                <li key={name}>
                  <span className="st__gearName">{name}</span>
                  <span className="st__gearDetail">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="st__photo container" aria-label="Recording by the window">
        <Placeholder tone="brand" className="st__wide" {...t.photos.window} />
      </section>

      <section className="st__offers container" aria-labelledby="st-offers">
        <h2 className="bo__h2" id="st-offers">
          Work with me.
        </h2>
        <div className="st__offerGrid">
          {t.offers.map((offer, i) => (
            <article className="st__offer" id={offer.id} key={offer.id} aria-labelledby={`st-${offer.id}`}>
              <span className="st__offerNum">{offer.num}</span>
              <div className="st__offerHead">
                <h3 className="st__offerTitle" id={`st-${offer.id}`}>
                  {offer.title}
                </h3>
                <p className="st__offerBody">{offer.body}</p>
              </div>
              <ul className="st__points">
                {offer.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="st__offerFoot">
                <a className={i === 0 ? 'bo__btnLight ms__cta' : 'ms__ctaGhost'} href="#contact">
                  {offer.cta}
                </a>
                {offer.note && <span className="st__note">{offer.note}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ms__services container" aria-labelledby="st-services">
        <h2 className="bo__h2" id="st-services">
          Services.
        </h2>
        <ServicePaths />
      </section>

      <BoldContact />
    </BoldSubpage>
  )
}
