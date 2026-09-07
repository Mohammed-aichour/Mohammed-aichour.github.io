# Portfolio de Zinedine Tlemsani Benhattal

Portfolio personnel construit avec React, TypeScript, Vinext et Tailwind CSS.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

Pour vérifier la version de production :

```bash
npm run build
npm start
```

## Personnaliser le contenu

Toutes les informations éditoriales se trouvent dans `app/data/portfolio.ts` : identité, biographie, centres d’intérêt, compétences, parcours, projets, objectifs, coordonnées et chemins des médias.

- Avatar actuel : `public/assets/avatar-zinedine-v2.png`. Remplacez-le ou changez `identity.avatar`.
- Photo actuelle : `public/assets/photo-zinedine.jpg`. Remplacez-la ou changez `identity.photo`.
- CV : ajouter le PDF dans `public/documents/`, puis renseigner `identity.cv`.
- Projet : ajouter un nouvel objet dans le tableau `projects`. Les liens vides ne sont jamais affichés.
- Contact : le formulaire est validé localement. Connecter EmailJS, Resend ou une API dans la fonction `submit` de `components/portfolio/Portfolio.tsx` pour activer l’envoi réel.

Les champs volontairement laissés vides sont signalés par des commentaires `PERSONNALISATION`.
