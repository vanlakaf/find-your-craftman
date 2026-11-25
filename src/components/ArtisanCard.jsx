import { Link } from "react-router-dom";
import StarsRating from "./StarsRating.jsx";
import "./artisan-card.scss";

// Toute la carte est un lien : cible tactile large (WCAG) + clic simple
export default function ArtisanCard({ artisan }) {
  return (
    <Link to={`/artisan/${artisan.id}`} className="artisan-card">
      <h3 className="artisan-card__name">{artisan.name}</h3>
      <StarsRating note={artisan.note} />
      <p className="artisan-card__specialty">{artisan.specialty}</p>
      <p className="artisan-card__location">
        <svg
          aria-hidden="true"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
        {artisan.location}
      </p>
    </Link>
  );
}
