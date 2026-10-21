import { site } from '../data/site'
import { tools } from '../data/tools'
import './Catalog.css'

export function Catalog() {
  return (
    <section className="catalog section" id="libraries">
      <div className="catalog__inner container">
        <p className="catalog__text">{site.catalog.body}</p>

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
