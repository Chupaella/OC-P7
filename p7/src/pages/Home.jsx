import { Link } from "react-router-dom"
import data from "../data/logements.json"
import Card from "../components/Card.jsx"
import Banner from "../components/Banner.jsx"

import homeBanner from "../assets/home-banner.jpg"

export default function Home() {
  return (
    <main className="home">
      <div className="container">
        {}
        <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />

        <section className="home__panel">
          <div className="home__grid">
            {data.map((item) => (
              <Link
                key={item.id}
                to={`/logement/${item.id}`}
                className="home__link"
                aria-label={`Voir ${item.title}`}
              >
                <Card title={item.title} cover={item.cover} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
