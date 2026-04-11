# Feuille de Route — Portfolio Louis Frerejean
> Audit réalisé le 12 avril 2026. Mis à jour après retours P1.

---

## PRIORITÉ 1 — Corrections bloquantes ✅ TERMINÉ

### Contenu (Fond)
- [x] Mettre à jour le badge hero → "Recherche Alternance • Cybersécurité 2026-2027"
- [x] Reformuler le sous-titre hero (sans acronymes, plus lisible)
- [x] Ajouter Guardia Cybersecurity School dans la timeline
- [x] Corriger dates LDLC (2024-2026, statut "En cours", nom complet, vrais 3 piliers)
- [x] Corriger Olympiades → "Top 150 Académie de Lyon (Ain, Loire et Rhône)"
- [x] Corriger badge Croix-Rousse Précision → "CDD + Stage"
- [x] Renommer "Modules Radio Arduino" → "Prototypage IoT" (description enrichie)
- [x] Renommer "Agent IA Personnalisé" → "IA Générative en pratique" (recentré veille + agents)
- [x] Renommer "Inclusion Automobile" → "Gestion de Projet RSE" (contexte explicité)
- [x] Mettre à jour le footer alternance → priorité Lyon, ouvert à toute opportunité
- [x] Corriger le copyright © 2025 → © 2026
- [x] Ajouter LinkedIn dans la section Contact
- [x] Ajouter bouton "Télécharger mon CV" dans le Hero

### Technique (Forme)
- [x] Corriger le bug JS de l'effet lueur (`.card` → `.bento-card, .project-tile`)
- [x] Rendre le numéro de téléphone cliquable (`tel:`)
- [x] Supprimer le `console.log` en production

---

## PRIORITÉ 2 — Améliorations importantes ✅ TERMINÉ

### Contenu (Fond)
- [x] Corriger "Start" → "Accueil" dans la navbar
- [x] Enrichir les projets avec résultats (badges Résultat/Engagement + mentions jury)
- [x] Corriger "Gestion Projet RSE" → reformulé "conception académique" (pas un vrai événement)
- [x] Préciser le projet "Développement Web" : ce portfolio + résultats cours web
- [x] Ajouter section Compétences (Langages, Outils, Lean Green Belt, Culture Tech)
- [x] Lean Green Belt mis en avant dans la section Compétences (badge vert)
- [x] Mettre à jour le titre de l'onglet → "Louis Frerejean | Cybersécurité & Tech"

### SEO & Partage (Forme)
- [x] Ajouter `<meta name="description">`
- [x] Ajouter balises Open Graph (titre, description, image, URL)
- [x] Ajouter favicon SVG "LF"

---

## PRIORITÉ 3 — Optimisations UX

Ces points améliorent la fluidité et la qualité perçue.

### Contenu (Fond)

- [ ] **Ajouter un pitch personnel** entre le Hero et la timeline : 2–3 phrases qui expliquent le fil rouge de ton parcours (pourquoi la cyber après l'industrie et l'IA ?). C'est ce que tout recruteur veut comprendre.
- [ ] **Réviser les hobbies dans le footer** : ajouter une courte phrase d'intro pour les ancrer (ex : "En dehors du travail..."). Aujourd'hui ils flottent sans contexte.
- [ ] **Revoir l'ordre des projets** : mettre en avant les plus impactants en premier (Diwii, Prototypage IoT, IA) avant les plus génériques (Keeshirt, Pop Up).
- [ ] **Corriger le lien "Mon parcours"** dans le Hero (le bouton a été remplacé par "Télécharger mon CV" — ajouter un 3ème lien ou revoir la disposition CTA si besoin).

### Interface (Forme)

- [ ] **Ajouter un état actif sur la navbar** : lien mis en évidence selon la section visible (IntersectionObserver + classe CSS active).
- [ ] **Corriger le débordement des floating cards sur mobile** : `left: -30px` / `right: -30px` sortent du viewport sur petits écrans — contraindre avec `clamp()` ou masquer sous 480px.
- [ ] **Ajouter une flèche de scroll animée** en bas du Hero pour inciter à descendre.
- [ ] **Ajouter une transition sur les tags** au survol pour renforcer l'interactivité.

---

## PRIORITÉ 4 — Nettoyage technique

Ces points n'impactent pas l'utilisateur final mais améliorent la qualité du code.

- [ ] **Ajouter `defer`** au chargement du script Phosphor Icons pour ne pas bloquer le rendu initial.
- [ ] **Déplacer les styles inline** restants dans le HTML vers le CSS (`style="margin-bottom: 10px;"`, `style="margin-top: 15px;"` dans la card Diwii).
- [ ] **Ajouter `aria-hidden="true"`** sur les icônes purement décoratives.
- [ ] **Ajouter un lien "Passer au contenu"** (`skip-to-main`) pour l'accessibilité clavier.
- [ ] **Ajouter un hash d'intégrité** (`integrity` + `crossorigin`) sur le script CDN Phosphor.

---

## PRIORITÉ 5 — Évolutions futures ✅ TERMINÉ (sauf exceptions)

### Contenu (Fond)
- [x] Témoignage Bertrand NEMORIN (Diwii / Mines St-Étienne) — synthèse + points forts
- [x] Section "Ce que je cherche" — équipe cyber, SOC, alternance 1 an, Lyon priorité
- [ ] **Version anglaise** — reportée à plus tard, pas prioritaire pour l'alternance FR

### Technique (Forme)
- [x] JSON-LD schema.org/Person ajouté dans le `<head>`
- [ ] **Optimiser `photo.jpeg`** — actuellement 1016 Ko, objectif < 200 Ko. Utiliser [squoosh.app](https://squoosh.app) pour compresser sans perte visible, puis renommer en `photo.webp` et mettre à jour la balise `<img>` et les OG.
- [ ] **Domaine personnalisé** — GitHub Pages gratuit conservé pour l'instant
- [ ] **Passer à un générateur de site statique** (Astro, Eleventy) — si le site grossit encore

---

## Récapitulatif

| Priorité | Statut | Nb de tâches |
|---|---|---|
| P1 — Bloquant | ✅ Terminé | 16 |
| P2 — Important | 🔄 À faire | 9 |
| P3 — UX | 🔄 À faire | 8 |
| P4 — Nettoyage | 🔄 À faire | 5 |
| P5 — Futur | ⏳ À planifier | 7 |
