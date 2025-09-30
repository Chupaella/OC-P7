import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <main className="notfound container" role="alert" aria-live="polite">
      <h1 className="notfound__code">404</h1>
      <p className="notfound__msg">Oups.. La page que vous demandez n'existe pas..</p>
      <Link to="/" className="notfound__back">Retourner à l'accueil</Link>
    </main>
  )
}
