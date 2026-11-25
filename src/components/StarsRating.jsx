import "./stars-rating.scss";

// Étoiles décoratives + note en texte pour les lecteurs d'écran (WCAG)
export default function StarsRating({ note }) {
  const pleines = Math.round(note);
  return (
    <>
      <span className="stars" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={i <= pleines ? "star star--full" : "star"}>
            ★
          </span>
        ))}
      </span>
      <span className="visually-hidden">Note : {note} sur 5</span>
    </>
  );
}
