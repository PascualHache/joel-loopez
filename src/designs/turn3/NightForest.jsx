import { studioImage, turn3 } from '../../data/designs'
import { Placeholder } from '../../components/Placeholder'
import { Turn3Page } from './Turn3Page'
import './night.css'

/** 3b — dark, warm, intimate. Centred hero, firelight amber as the only accent. */
export function NightForest() {
  const t = turn3.night

  const hero = (
    <>
      <section className="nf__hero t3__container" id="top">
        <span className="nf__eyebrow">{t.eyebrow}</span>
        <h1 className="nf__h1 t3__display">
          {t.title[0]}
          <i>{t.title[1]}</i>
          {t.title[2]}
        </h1>
        <p className="nf__lede">{t.body}</p>
        <a className="t3__btn" href="#contact">
          {turn3.cta}
        </a>
      </section>

      <div className="nf__split">
        <img src={studioImage} alt="Joel Loopez in his studio" />
        <Placeholder label={t.placeholder} tone="night" minHeight={280} className="nf__splitPh" />
      </div>
    </>
  )

  return <Turn3Page variant="night" theme="nf" hero={hero} lightLogo placeholderTone="night" />
}
