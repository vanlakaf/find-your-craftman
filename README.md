# Trouve ton artisan — Région Auvergne-Rhône-Alpes

Plateforme de mise en relation entre particuliers et artisans de la région.
Frontend : React (Vite) + Sass + react-router-dom. Données : JSON local en
attente de l'API (couche service prête pour la bascule).

## Prérequis
- Node.js >= 18

## Installation
    npm install
    cp .env.example .env

## Lancement (3 terminaux)
    npm run mail        # serveur mail local — interface : http://localhost:1080
    npm run api:local   # API de contact locale (port 3001) -> envoie via MailDev
    npm run dev         # application : http://localhost:5173

## Build production
    npm run build && npm run preview

## Structure
- src/services/ : accès aux données (JSON aujourd'hui, API demain — un seul fichier à changer)
- src/components/ : Header, Footer, cartes, formulaire
- src/pages/ : Accueil, Liste, Fiche artisan, 404, pages légales (vides)
- public/ : assets, en-têtes de sécurité (Netlify)
- docs/ : plan d'exécution, spécification Figma, captures des maquettes

## Maquettes
docs/PHASE1-FIGMA.md et captures dans docs/maquettes/.

## Note assets
Les fichiers SVG de public/ sont des placeholders de démonstration.
Remplacez-les par le logo et le favicon officiels fournis dans le brief.
