import { Link, useParams } from "react-router-dom";
import { useSEO } from "../hooks/useSEO.js";
import { getArtisanById, getCategoryLabel } from "../services/artisans.js";
import StarsRating from "../components/StarsRating.jsx";
import ContactForm from "../components/ContactForm.jsx";
import NotFound from "./NotFound.jsx";
import "./artisan-detail.scss";

export default function ArtisanDetail() {
  const { id } = useParams();
  const artisan = getArtisanById(id);

  useSEO(
    artisan
      ? `${artisan.name} — Trouve ton artisan`
      : "Artisan introuvable — Trouve ton artisan",
    artisan
      ? `${artisan.specialty} à ${artisan.location}. Contactez ${artisan.name} via la plateforme.`
      : "Cet artisan n'existe pas ou plus.",
  );

  if (!artisan) return <NotFound />;

  return (
    <article className="container page">
      <nav className="breadcrumb" aria-label="Fil d'Ariane">
        <Link to="/">Accueil</Link> <span aria-hidden="true">{">"}</span>{" "}
        <Link to={`/categorie/${artisan.category}`}>
          {getCategoryLabel(artisan.category)}
        </Link>{" "}
        <span aria-hidden="true">{">"}</span>{" "}
        <span aria-current="page">{artisan.name}</span>
      </nav>

      <div className="artisan-detail">
        <aside className="artisan-detail__info">
          <h1>{artisan.name}</h1>
          <StarsRating note={artisan.note} />
          <p className="artisan-detail__line">
            <strong>{artisan.specialty}</strong>
          </p>
          <p className="artisan-detail__line">{artisan.location}</p>
          {artisan.website && (
            <p className="artisan-detail__line">
              <a
                href={artisan.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Site web de l'artisan ↗
              </a>
            </p>
          )}
        </aside>

        <div className="artisan-detail__body">
          <section aria-labelledby="apropos">
            <h2 id="apropos">À propos</h2>
            <p>{artisan.about}</p>
          </section>
          <section aria-labelledby="contact-titre">
            <h2 id="contact-titre">Contacter {artisan.name}</h2>
            <ContactForm artisan={artisan} />
          </section>
        </div>
      </div>
    </article>
  );
}
