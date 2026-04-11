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

## PRIORITÉ 2 — Améliorations importantes

Ces points impactent l'expérience utilisateur et la visibilité en ligne.

### Contenu (Fond)

- [ ] **Corriger "Start" → "Accueil"** dans la navbar. Le site est 100% en français.
- [ ] **Enrichir les projets avec des résultats concrets** : ajouter une ligne de résultat ou chiffre pour chaque tile (ex : classement Keeshirt, retours sur le week-end au Mans, etc.).
- [ ] **Préciser le projet "Développement Web"** : mentionner explicitement que c'est ce portfolio.
- [ ] **Ajouter une section "Compétences"** : bloc synthétique des langages (Python, Arduino, HTML/CSS/JS), outils (VS Code, Suite Adobe, Canva, WordPress) et certifications (Lean Green Belt). Aujourd'hui cette info est noyée dans les cards.
- [ ] **Mettre en avant la certification Lean Green Belt** plus visiblement — se noie dans les tags du stage Diwii.
- [ ] **Mettre à jour le titre de l'onglet** : "Louis Frerejean | Tech & Business" → "Louis Frerejean | Cybersécurité & Tech".

### SEO & Partage (Forme)

- [ ] **Ajouter une `<meta name="description">`** : "Portfolio de Louis Frerejean — Futur alternant en Cybersécurité (Guardia), background IoT, IA générative et gestion de projet."
- [ ] **Ajouter les balises Open Graph** (og:title, og:description, og:image) pour les aperçus LinkedIn, WhatsApp, etc.
- [ ] **Ajouter un favicon** (icône "LF" dans l'onglet navigateur).

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

## PRIORITÉ 5 — Évolutions futures

À considérer une fois les priorités 1–3 traitées.

### Contenu (Fond)

- [ ] **Ajouter des témoignages** : tuteur Diwii, référent LDLC, partenaire du projet Mans — très fort pour un profil qui cherche une alternance.
- [ ] **Ajouter une section "Ce que je cherche"** : type de mission cyber (pentest, SOC, GRC ?), secteur, rythme d'alternance souhaité. Aide le recruteur à se projeter.
- [ ] **Internationaliser** : version anglaise si des opportunités hors France sont envisagées.

### Technique (Forme)

- [ ] **Ajouter des données structurées JSON-LD** (schema.org/Person) pour le référencement sémantique.
- [ ] **Optimiser `photo.jpg`** : convertir en WebP, vérifier le poids (< 200 Ko idéalement).
- [ ] **Mettre en place un domaine personnalisé** (`louisfrerejean.com` ou similaire).
- [ ] **Passer à un générateur de site statique** (Astro, Eleventy) si le site grossit.

---

## Récapitulatif

| Priorité | Statut | Nb de tâches |
|---|---|---|
| P1 — Bloquant | ✅ Terminé | 16 |
| P2 — Important | 🔄 À faire | 9 |
| P3 — UX | 🔄 À faire | 8 |
| P4 — Nettoyage | 🔄 À faire | 5 |
| P5 — Futur | ⏳ À planifier | 7 |
