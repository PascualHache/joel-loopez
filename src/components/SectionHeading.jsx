import './SectionHeading.css'

/**
 * The shared section intro: a red rule plus red eyebrow, then a large
 * light-weight title. `title` is an array so each line breaks where the
 * design intends rather than wherever the text happens to wrap.
 */
export function SectionHeading({ eyebrow, title, id }) {
  return (
    <header className="section-heading">
      <p className="section-heading__eyebrow">
        <span className="section-heading__rule" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="section-heading__title" id={id}>
        {title.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h2>
    </header>
  )
}
