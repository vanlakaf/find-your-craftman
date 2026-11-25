import { Link } from "react-router-dom";
import "./footer.scss";

const LEGAL_LINKS = [
  { to: "/mentions-legales", label: "Mentions légales" },
  { to: "/donnees-personnelles", label: "Données personnelles" },
  { to: "/accessibilite", label: "Accessibilité" },
  { to: "/cookies", label: "Cookies" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div>
          <img src="/logo-blanc.svg" alt="" width="48" height="48" />
          <p>La plateforme des artisans d'Auvergne-Rhône-Alpes.</p>
        </div>
        <nav aria-label="Pages légales">
          <h2 className="footer__title">Informations légales</h2>
          <ul>
            {LEGAL_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="footer__title">Contact</h2>
          <address>
            101 cours Charlemagne
            <br />
            CS 20033
            <br />
            69269 LYON CEDEX 02
            <br />
            France
          </address>
          <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
        </div>
      </div>
    </footer>
  );
}
