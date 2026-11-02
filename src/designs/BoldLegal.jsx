import { BoldContact, BoldSubpage, SubHero } from './Bold'
import './BoldLegal.css'

/** B subview for a legal text: the shared hero, then the document as plain prose. */
export function BoldLegal({ doc }) {
  const hero = (
    <SubHero
      label={doc.label}
      title={doc.title}
      aside={<p className="bo__subLede">Last updated: {doc.updated}</p>}
    />
  )

  return (
    <BoldSubpage hero={hero}>
      <article className="lg container">
        {doc.sections.map((section) => (
          <section className="lg__section" key={section.heading}>
            <h2 className="lg__heading">{section.heading}</h2>
            <div className="lg__body">
              {section.body.map((block, i) =>
                typeof block === 'string' ? (
                  <p key={i}>{block}</p>
                ) : (
                  <ul className="lg__list" key={i}>
                    {block.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ),
              )}
            </div>
          </section>
        ))}
      </article>

      <BoldContact />
    </BoldSubpage>
  )
}
