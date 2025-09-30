import { useParams, Navigate } from "react-router-dom"
import data from "../data/logements.json"
import Carousel from "../components/Carousel.jsx"
import Rating from "../components/Rating.jsx"
import Collapse from "../components/Collapse.jsx"

export default function Logement() {
  const { id } = useParams()
  const item = data.find((a) => a.id === id)
  if (!item) return <Navigate to="/404" replace />

  const { title, location, pictures, tags, host, rating, description, equipments } = item

  return (
    <main className="logement container">
      <Carousel pictures={pictures} alt={title} />

      <header className="logement__header">
        <div>
          <h1 className="logement__title">{title}</h1>
          <p className="logement__location">{location}</p>
          <div className="tags">
            {tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        <aside className="logement__side">
          <div className="rating">
            <Rating value={Number(rating)} />
          </div>

          <div className="host">
            <div className="host__name">
              {host.name.split(" ").map((p, i) => (
                <span key={i}>{p}<br /></span>
              ))}
            </div>
            <img className="host__pic" src={host.picture} alt={host.name} />
          </div>
        </aside>

      </header>

      <section className="logement__content">
        <Collapse title="Description">
          <p>{description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul className="equip">
            {equipments.map((e) => <li key={e}>{e}</li>)}
          </ul>
        </Collapse>
      </section>
    </main>
  )
}
