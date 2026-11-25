import { useState } from "react";
import "./contact-form.scss";

// URL de l'API : serveur local (maildev) en dev, API finale en production
const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:3001/api/contact";

const INITIAL = { nom: "", objet: "", message: "", societe: "" }; // « societe » = honeypot

export default function ContactForm({ artisan }) {
  const [form, setForm] = useState(INITIAL);
  const [statut, setStatut] = useState("idle"); // idle | sending | success | error

  const majChamp = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const envoyer = async (e) => {
    e.preventDefault();
    if (form.societe) return; // honeypot rempli = robot → on ignore
    setStatut("sending");
    try {
      const reponse = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: form.nom,
          objet: form.objet,
          message: form.message,
          artisanId: artisan.id,
          artisanEmail: artisan.email,
        }),
      });
      if (!reponse.ok) throw new Error("réponse non OK");
      setStatut("success");
      setForm(INITIAL);
    } catch {
      setStatut("error");
    }
  };

  if (statut === "success") {
    return (
      <p className="contact-form__success" role="status">
        Votre message a bien été envoyé à {artisan.name}. Une réponse vous sera
        apportée sous 48h.
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={envoyer}>
      <div className="contact-form__field">
        <label htmlFor="contact-nom">Nom</label>
        <input
          id="contact-nom"
          name="nom"
          type="text"
          value={form.nom}
          onChange={majChamp}
          required
          minLength={2}
          maxLength={80}
        />
      </div>
      <div className="contact-form__field">
        <label htmlFor="contact-objet">Objet</label>
        <input
          id="contact-objet"
          name="objet"
          type="text"
          value={form.objet}
          onChange={majChamp}
          required
          maxLength={120}
        />
      </div>
      <div className="contact-form__field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={form.message}
          onChange={majChamp}
          required
          maxLength={2000}
        />
      </div>

      {/* Honeypot anti-spam : hors écran pour l'utilisateur, rempli par les robots */}
      <div className="contact-form__honeypot" aria-hidden="true">
        <label htmlFor="contact-societe">Société</label>
        <input
          id="contact-societe"
          name="societe"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.societe}
          onChange={majChamp}
        />
      </div>

      <button
        type="submit"
        className="btn btn--primary"
        disabled={statut === "sending"}
      >
        {statut === "sending" ? "Envoi en cours…" : "Envoyer le message"}
      </button>

      {statut === "error" && (
        <p className="contact-form__error" role="alert">
          Une erreur est survenue lors de l'envoi. Vérifiez vos champs et
          réessayez.
        </p>
      )}
    </form>
  );
}
