import { NavLink, Link } from "react-router-dom"
import logo from "../assets/logo.svg"

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__brand" aria-label="Kasa — accueil">
          {}
          <img src={logo} alt="" />
        </Link>

        <nav className="header__nav" aria-label="Navigation principale">
          <NavLink
            to="/"
            end
            className={({ isActive }) => "nav__link" + (isActive ? " is-active" : "")}
          >
            Accueil
          </NavLink>

          <NavLink
            to="/a-propos"
            className={({ isActive }) => "nav__link" + (isActive ? " is-active" : "")}
          >
            À&nbsp;Propos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
