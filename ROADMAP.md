# Feuille de Route — Portfolio Louis Frerejean
> Audit réalisé le 11 avril 2026. Classement par priorité décroissante.

---

## PRIORITÉ 1 — Corrections bloquantes

Ces points nuisent directement à la crédibilité ou au fonctionnement du site.

### Contenu (Fond)

- [ ] **Mettre à jour la disponibilité** : "Dispo Vendredi • Janvier 2026" est périmé. Indiquer la disponibilité actuelle ou supprimer la date précise.
- [ ] **Mettre à jour le texte footer** : "disponible tous les vendredis à partir de Janvier 2026" → à reformuler en fonction de la situation réelle.
- [ ] **Corriger le copyright** : "© 2025" → "© 2026".
- [ ] **Ajouter un lien LinkedIn** dans la section Contact. C'est le premier réflexe d'un recruteur après avoir vu le portfolio.
- [ ] **Ajouter un bouton "Télécharger mon CV"** (PDF) dans la section Hero ou Contact. Indispensable pour un portfolio à vocation professionnelle.

### Technique (Forme)

- [ ] **Corriger le bug JS de l'effet lueur** : le script cible `.card` mais les éléments HTML utilisent `.bento-card` et `.project-tile`. L'effet ne se déclenche jamais. Corriger le sélecteur.
- [ ] **Rendre le numéro de téléphone cliquable** : remplacer le `<div>` par `<a href="tel:0769477425">` pour que le tap fonctionne sur mobile.

---

## PRIORITÉ 2 — Améliorations importantes

Ces points impactent l'expérience utilisateur et la visibilité en ligne.

### Contenu (Fond)

- [ ] **Corriger "Start" → "Accueil"** dans la navbar. Le site est 100% en français, ce mot rompt la cohérence.
- [ ] **Enrichir les projets** : chaque tile est très courte. Ajouter une ligne de résultat concret ou de chiffre pour chaque projet (ex : "Keeshirt : classement N°X sur Y équipes").
- [ ] **Préciser le projet "Développement Web"** : c'est ce portfolio lui-même — le dire explicitement rend ça plus honnête et plus fort.
- [ ] **Ajouter une section "Compétences"** ou un bloc synthétique des outils maîtrisés (langages, logiciels, certifications) — aujourd'hui cette info est éparpillée dans les cards.
- [ ] **Mentionner la certification Lean Green Belt** plus visiblement — c'est un vrai atout qui se noie dans une liste à puces.

### SEO & Partage (Forme)

- [ ] **Ajouter une `<meta name="description">`** dans le `<head>`. Exemple : "Portfolio de Louis Frerejean — Étudiant Bachelor Numérique & Entrepreneuriat, passionné par la Tech et le Business."
- [ ] **Ajouter les balises Open Graph** (og:title, og:description, og:image) pour que le lien soit joli sur LinkedIn, WhatsApp, etc.
- [ ] **Ajouter un favicon** (icône dans l'onglet navigateur). Peut être un simple "LF" stylisé en SVG.

---

## PRIORITÉ 3 — Optimisations UX

Ces points améliorent la fluidité et la qualité perçue.

### Contenu (Fond)

- [ ] **Ajouter une vraie section "À propos"** ou un paragraphe de pitch plus personnel entre le Hero et la timeline. Le titre "chaînon manquant" est fort mais mériterait 2–3 phrases de développement.
- [ ] **Réviser les hobbies dans le footer** : actuellement ils flottent sans contexte. Ajouter une courte phrase d'intro du type "En dehors du travail..." pour les ancrer.
- [ ] **Revoir l'ordre des projets** : commencer par les plus impressionnants (Diwii, CNC) avant les plus génériques (Développement Web, Agent IA).

### Interface (Forme)

- [ ] **Ajouter un état actif sur la navbar** : mettre en évidence le lien correspondant à la section visible (via IntersectionObserver + classe active CSS). Améliore fortement l'orientation.
- [ ] **Corriger le débordement des floating cards** sur mobile (`left: -30px` / `right: -30px` sortent du viewport sur petits écrans). Les contraindre avec `clamp()` ou les masquer sous 480px.
- [ ] **Ajouter un indicateur de scroll** (flèche animée) en bas du Hero pour inciter à descendre — le contenu commence haut et n'est pas immédiatement visible.
- [ ] **Ajouter une transition de couleur sur les tags** au survol pour renforcer l'interactivité.

---

## PRIORITÉ 4 — Nettoyage technique

Ces points n'impactent pas l'utilisateur final mais améliorent la qualité du code.

- [ ] **Supprimer le `console.log`** en production (`script.js`, ligne 37).
- [ ] **Ajouter `defer`** au chargement du script Phosphor Icons (`<script defer src="...">`) pour ne pas bloquer le rendu initial.
- [ ] **Déplacer les styles inline** du HTML vers le CSS (`style="margin-bottom: 10px;"`, `style="margin-top: 15px;"`).
- [ ] **Ajouter `aria-hidden="true"`** sur les icônes purement décoratives pour les lecteurs d'écran.
- [ ] **Ajouter un lien "Passer au contenu"** (`skip-to-main`) pour l'accessibilité clavier.
- [ ] **Ajouter un hash d'intégrité** (`integrity` + `crossorigin`) sur le script CDN Phosphor pour la sécurité.

---

## PRIORITÉ 5 — Évolutions futures

À considérer une fois les priorités 1–3 traitées.

### Contenu (Fond)

- [ ] **Ajouter des témoignages** (tuteur de stage, professeur, partenaire) pour renforcer la crédibilité.
- [ ] **Ajouter une section "Ce que je cherche"** : type de mission, secteur visé, rythme souhaité. Aide le recruteur à se projeter.
- [ ] **Internationaliser** : proposer une version anglaise du site si des opportunités internationales sont visées.

### Technique (Forme)

- [ ] **Ajouter des données structurées JSON-LD** (schema.org/Person) pour améliorer le référencement sémantique.
- [ ] **Optimiser `photo.jpg`** : convertir en WebP et ajouter un `loading="lazy"` approprié. Vérifier que la taille du fichier est raisonnable (< 200 Ko idéalement).
- [ ] **Passer à un générateur de site statique** (Astro, Eleventy) si le site grossit, pour mieux gérer la structure et le SEO.
- [ ] **Mettre en place un domaine personnalisé** (`louisfrerejean.com` ou similaire) et un hébergement stable (Vercel, Netlify, GitHub Pages).

---

## Récapitulatif

| Priorité | Nb de tâches | Effort estimé |
|---|---|---|
| P1 — Bloquant | 7 | ~1h |
| P2 — Important | 10 | ~2–3h |
| P3 — UX | 8 | ~2h |
| P4 — Nettoyage | 6 | ~30min |
| P5 — Futur | 8 | À planifier |
