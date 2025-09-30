export default function Tags({ items = [] }) {
  if (!items.length) return null
  return (
    <div className="tags">
      {items.map((t) => (
        <span key={t} className="tag">{t}</span>
      ))}
    </div>
  )
}
