import { site } from '../data/site'
import './About.css'

export function About() {
  const { image, imageAlt, paragraphs } = site.about

  return (
    <section className="about section" id="about">
      <div className="about__inner container">
        <figure className="about__media">
          <img src={image} alt={imageAlt} loading="lazy" />
        </figure>

        <div className="about__text">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
      <div className="container">
        <hr className="about__rule" />
      </div>
    </section>
  )
}
