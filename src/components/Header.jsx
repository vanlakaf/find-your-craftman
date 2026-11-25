import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CATEGORIES } from "../data/categories.js";
import "./header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (q) navigate(`/artisans?q=${encodeURIComponent(q)}`);
    setMenuOpen(false);
  };

  return (
    <header className={menuOpen ? "header header--open" : "header"}>
      <div className="header__inner container">
        <Link
          to="/"
          className="header__logo"
          aria-label="Trouve ton artisan — retour à l'accueil"
        >
          <img src="/logo.svg" alt="" width="48" height="48" />
        </Link>

        <button
          type="button"
          className="header__burger"
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Fermer" : "Menu"}
        </button>

        <div id="menu-principal" className="header__panel">
          <form
            className="header__search"
            role="search"
            onSubmit={submitSearch}
          >
            <label className="visually-hidden" htmlFor="recherche-artisan">
              Rechercher un artisan par nom, spécialité ou ville
            </label>
            <input
              id="recherche-artisan"
              type="search"
              placeholder="Nom, spécialité, ville…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="btn btn--primary">
              Rechercher
            </button>
          </form>

          <nav aria-label="Navigation principale">
            <ul className="header__links">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <NavLink
                    to={`/categorie/${c.slug}`}
                    className="header__link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {c.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
