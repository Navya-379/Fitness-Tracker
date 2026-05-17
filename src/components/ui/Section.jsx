export function Section({ eyebrow, title, children, id }) {
  return (
    <section id={id} className="section">
      {(eyebrow || title) && (
        <div className="section-head">
          {eyebrow && <p>{eyebrow}</p>}
          {title && <h2>{title}</h2>}
        </div>
      )}
      {children}
    </section>
  )
}
