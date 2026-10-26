import { studioImage, turn3 } from '../../data/designs'
import { Turn3Page } from './Turn3Page'
import './paper.css'

/** 3a — light, editorial, calm. Arch-cropped photography as the organic motif. */
export function PaperMoss() {
  const t = turn3.paper

  const hero = (
    <>
      <section className="pm__hero t3__container" id="top">
        <div className="pm__heroText">
          <span className="pm__eyebrow">{t.eyebrow}</span>
          <h1 className="pm__h1 t3__display">
            {t.title[0]}
            <i>{t.title[1]}</i>
          </h1>
          <p className="pm__lede">{t.body}</p>
          <div className="pm__actions">
            <a className="t3__btn" href="#contact">
              {turn3.cta}
            </a>
            <a className="pm__aside" href="#work">
              {t.aside}
            </a>
          </div>
        </div>
        <img className="pm__arch" src={studioImage} alt="Joel Loopez in his studio" />
      </section>

      <div className="pm__strip">
        <div className="pm__stripInner t3__container">
          {t.strip.map((item) => (
            <div key={item.title}>
              <span className="pm__stripTitle t3__display">{item.title}</span>
              <span className="pm__stripBody">{item.body}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )

  return <Turn3Page variant="paper" theme="pm" hero={hero} placeholderTone="paper" />
}
