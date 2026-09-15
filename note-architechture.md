## Problemes identifies

**Donnees codees en dur**

  * Les donnees ne proviennent pas encore d'une API.
  * Elles sont maintenant separees dans un fichier `data`.
  * Elles pourront etre remplacees plus tard par un vrai appel API.

**Mauvaise separation des composants**

  * Le composant principal contenait plusieurs responsabilites.
  * Les pages et les composants reutilisables sont maintenant separes.
  * Les composants dumb affichent seulement les informations qu'ils recoivent.

**Utilisation artificielle de `useEffect`**

  * Le `setTimeout` a ete retire.
  * La recuperation des donnees est centralisee dans un custom hook.

**Code peu homogene**

  * Les models permettent de typer les objets principaux.
  * Les `any` ont ete retires du code refactorise.
  * Les imports ont ete mis a jour apres le decoupage.

## Nouvelle architecture

```
src/
├── App.tsx
├── main.tsx
├── index.css
│
├── components/
│   ├── HomeHeader.tsx
│   ├── Indicator.tsx
│   ├── ChartMedal.tsx
│   └── ChartEvolution.tsx
│
├── pages/
│   ├── Home.tsx
│   └── Country.tsx
│
├── hooks/
│   ├── useOlympics.ts
│   └── useCountry.ts
│
├── data/
│   └── olympicsData.ts
│
└── models/
    ├── Country.ts
    └── Participation.ts
```

## Raisonnement

* `App.tsx` gere le routing.
* Les pages sont dans `pages`.
* Les composants reutilisables sont dans `components`.
* Les hooks gerent l'acces aux donnees.
* Les donnees temporaires sont dans `data`.
* Les types des objets sont dans `models`.
