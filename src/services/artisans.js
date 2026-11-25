import artisansData from '../data/artisans.json';
import { CATEGORIES } from '../data/categories.js';

// Normalise : minuscules + suppression des accents (recherche insensible à la casse/accents)
const normalize = (str) =>
  (str ?? '').toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const ARTISANS = artisansData;

export function getArtisans() {
  return ARTISANS;
}

export function getArtisanById(id) {
  return ARTISANS.find((a) => String(a.id) === String(id)) ?? null;
}

export function getByCategory(slug) {
  return ARTISANS.filter((a) => a.category === slug);
}

// Les 3 « artisans du mois » ; repli sur les 3 meilleures notes si le JSON ne les marque pas
export function getHighlighted() {
  const tops = ARTISANS.filter((a) => a.highlight);
  return tops.length > 0
    ? tops
    : [...ARTISANS].sort((a, b) => b.note - a.note).slice(0, 3);
}

// Recherche exigée par le brief : nom + spécialité + ville
export function searchArtisans(query) {
  const q = normalize(query);
  if (!q) return [];
  return ARTISANS.filter((a) =>
    [a.name, a.specialty, a.location].some((champ) => normalize(champ).includes(q)),
  );
}

export function getCategoryLabel(slug) {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}
