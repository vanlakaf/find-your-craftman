import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO.js';
import { getHighlighted } from '../services/artisans.js';
import ArtisanCard from '../components/ArtisanCard.jsx';
import './home.scss';

// Rubrique exigée : numéro + texte de chaque étape obligatoires
const ETAPES = [
  { titre: "Choisissez une catégorie", texte: "Sélectionnez la catégorie d'artisanat dans le menu : bâtiment, services, fabrication ou alimentation." },
  { titre: "Choisissez un artisan", texte: "Parcourez la liste et ouvrez la fiche de l'artisan qui correspond à votre besoin." },
  { titre: "Contactez-le", texte: "Remplissez le formulaire de contact de sa fiche pour lui demander des renseignements, prestations ou tarifs." },
  { titre: "Recevez une réponse", texte: "Une réponse vous sera apportée sous 48h." },
];

export default function Home() {
  useSEO("Trouve ton artisan — Région Auvergne-Rhône-Alpes",
    "Trouvez un artisan près de chez vous en Auvergne-Rhône-Alpes et contactez-le en quelques clics : bâtiment, services, fabrication, alimentation.");
  const artisansDuMois = getHighlighted();

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Trouvez votre artisan en région</h1>
          <p>Des artisans qualifiés partout en Auvergne-Rhône-Alpes, à contacter en quelques clics.</p>
          <Link to="/categorie/batiment" className="btn btn--primary">Découvrir les artisans</Link>
        </div>
      </section>

      <section className="steps" aria-labelledby="titre-etapes">
        <div className="container">
          <h2 id="titre-etapes">Comment trouver mon artisan ?</h2>
          <ol className="steps__list">
            {ETAPES.map((etape, i) => (
              <li key={etape.titre} className="steps__item">
                <span className="steps__number" aria-hidden="true">{i + 1}</span>
                <h3>{etape.titre}</h3>
                <p>{etape.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="highlight" aria-labelledby="titre-mois">
        <div className="container">
          <h2 id="titre-mois">Les artisans du mois</h2>
          <div className="cards-grid">
            {artisansDuMois.map((a) => <ArtisanCard key={a.id} artisan={a} />)}
          </div>
        </div>
      </section>
    </>
  );
}
