# Spécification Figma (résumé d'exécution)

## Tokens
Couleurs : #f1f8fc (fond) · #0074c7 (action) · #00497c (foncé) · #384050 (texte)
· #cd2c2e (erreur) · #82b864 (succès) · neutres dérivés : #d8e6f2 (bordures), #c9d6e2 (étoiles vides).
Typo : Graphik (fallback Segoe UI) — H1 28→36 / H2 22→28 / H3 18→20 / Body 16 / Small 14.
Grille : 12 col, contenu max 1200px, marges 16/24/64. Rayons : cartes 8, boutons 4.

## Composants
Header (burger <1200px, nav + recherche >=1200px) · Footer (fond #00497c, 3 colonnes desktop)
· Carte artisan (nom, étoiles, spécialité, ville, hover bordure action)
· Étoiles (pleines #0074c7) · Étapes numérotées (badge 48px) · Boutons (hover #00497c)
· Champs (focus #0074c7 ; erreur #cd2c2e + message 14px).

## Frames (375 / 768 / 1440)
01-Accueil (hero + 4 étapes + 3 artisans du mois) · 02-Liste (grille 1/2/3 col)
· 03-Fiche (infos 1/3 + à-propos + formulaire 2/3) · 04-404 · 05-États :
burger ouvert, recherche sans résultat, formulaire en erreur.

## Contraintes WCAG
AA 4.5:1 — #82b864 jamais en texte sur blanc ; focus visible ; cibles >= 44px.
