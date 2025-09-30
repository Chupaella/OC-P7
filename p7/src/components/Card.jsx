export default function Card({ title, cover }) {
  return (
    <article className="card" aria-label={title}>
      <img className="card__img" src={cover} alt={title} />
      <h2 className="card__title">{title}</h2>
    </article>
  )
}
