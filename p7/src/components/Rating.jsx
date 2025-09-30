export default function Rating({ value = 0, max = 5 }) {
  const n = typeof value === "string" ? parseInt(value, 10) : value
  const stars = Array.from({ length: max }, (_, i) => i < n)
  return (
    <div className="rating" aria-label={`Note ${n} sur ${max}`}>
      {stars.map((filled, i) => (
        <span key={i} className={`rating__star ${filled ? "is-filled" : ""}`} aria-hidden="true">★</span>
      ))}
    </div>
  )
}
