import { site } from '../data/site'
import './Funding.css'

const badges = ['Financiado por la Unión Europea', 'Gobierno de España', 'red.es', 'Plan de Recuperación', 'Kit Digital']

export function Funding() {
  return (
    <section className="funding" aria-label="Public funding">
      <div className="container">
        <p className="funding__text">{site.funding.text}</p>
        <ul className="funding__badges">
          {badges.map((badge) => (
            <li className="funding__badge" key={badge}>
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
