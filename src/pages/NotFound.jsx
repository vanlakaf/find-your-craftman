import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO.js";
import "./notfound.scss";

export default function NotFound() {
  useSEO(
    "Page non trouvée — Trouve ton artisan",
    "La page demandée n'existe pas.",
  );
  return (
    <section className="notfound container page">
      <img src="/404.svg" alt="" width="280" height="200" />
      <h1>404</h1>
      <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <Link to="/" className="btn btn--primary">
        Retour à l'accueil
      </Link>
    </section>
  );
}
