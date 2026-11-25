import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO.js';
import { getArtisans, getByCategory, searchArtisans, getCategoryLabel } from '../services/artisans.js';
import { CATEGORIES } from '../data/categories.js';
import ArtisanCard from '../components/ArtisanCard.jsx';
import './artisan-list.scss';

export default function ArtisanList() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';

  // Recherche (nom/spécialité/ville) prioritaire, sinon filtre par catégorie, sinon tout
  const artisans = query ? searchArtisans(query) : slug ? getByCategory(slug) : getArtisans();
  const titre = query ? `Résultats pour « ${query} »`
    : slug ? `Artisans · ${getCategoryLabel(slug)}` : 'Tous les artisans';

  useSEO(`${titre} — Trouve ton artisan`,
    "Liste des artisans d'Auvergne-Rhône-Alpes par catégorie et par recherche.");

  return (
    <section className="container page">
      <h1>{titre}</h1>

      <nav className="cat-nav" aria-label="Catégories d'artisanat">
        {CATEGORIES.map((c) => (
          <Link key={c.slug} to={`/categorie/${c.slug}`}
            className={slug === c.slug ? 'cat-nav__chip cat-nav__chip--active' : 'cat-nav__chip'}>
            {c.label}
          </Link>
        ))}
      </nav>

      <p className="artisan-list__count" role="status">
        {artisans.length} artisan{artisans.length > 1 ? 's' : ''}
      </p>

      {artisans.length > 0 ? (
        <div className="cards-grid">
          {artisans.map((a) => <ArtisanCard key={a.id} artisan={a} />)}
        </div>
      ) : (
        <div className="artisan-list__empty">
          <p>Aucun artisan ne correspond à votre recherche.</p>
          <Link to="/categorie/batiment" className="btn btn--primary">Voir toutes les catégories</Link>
        </div>
      )}
    </section>
  );
}
