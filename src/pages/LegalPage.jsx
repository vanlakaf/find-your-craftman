import { useSEO } from "../hooks/useSEO.js";

// Pages légales
export default function LegalPage({ title }) {
  useSEO(
    `${title} — Trouve ton artisan`,
    `${title} de la plateforme Trouve ton artisan.`,
  );
  return (
    <section className="container page">
      <h1>{title}</h1>
    </section>
  );
}
