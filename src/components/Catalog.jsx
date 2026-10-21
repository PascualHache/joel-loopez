import { site } from '../data/site'
import { tools } from '../data/tools'
import { SectionHeading } from './SectionHeading'
import './Catalog.css'

export function Catalog() {
  const { heading, body } = site.catalog

  return (
    <section className="catalog section" id="libraries">
      <div className="catalog__inner container">
        <div className="catalog__text">
          <SectionHeading eyebrow={heading.eyebrow} title={heading.title} />
          <p>{body}</p>
        </div>

        <ul className="catalog__grid">
          {tools.map((tool) => (
            <li className="catalog__tile" key={tool.id}>
              <img src={tool.src} alt={tool.name} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
