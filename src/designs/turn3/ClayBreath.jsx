import { studioImage, turn3 } from '../../data/designs'
import { Turn3Page } from './Turn3Page'
import './clay.css'

/** 3c — warm, soft, embodied. Circles echo the logo rings. */
export function ClayBreath() {
  const t = turn3.clay

  const hero = (
    <section className="cb__hero t3__container" id="top">
      <img className="cb__round" src={studioImage} alt="Joel Loopez in his studio" />
      <div className="cb__heroText">
        <h1 className="cb__h1 t3__display">
          <span>{t.title[0]}</span>
          <i>{t.title[1]}</i>
        </h1>
        <p className="cb__lede">{t.body}</p>
        <ul className="cb__tags">
          {t.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
          <li data-accent="true">{t.accentTag}</li>
        </ul>
      </div>
    </section>
  )

  return <Turn3Page variant="clay" theme="cb" hero={hero} placeholderTone="paper" />
}
