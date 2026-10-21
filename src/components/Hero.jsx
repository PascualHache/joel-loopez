import { site } from '../data/site'
import './Hero.css'

export function Hero() {
  const { eyebrow, title, body, highlight, image } = site.hero

  return (
    <section className="hero" id="top">
      <img className="hero__bg" src={image} alt="" aria-hidden="true" />
      <div className="hero__content container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="hero__title">
          {title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="hero__body">{body}</p>
        <p className="hero__highlight">{highlight}</p>
      </div>
    </section>
  )
}
