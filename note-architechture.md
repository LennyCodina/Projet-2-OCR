## Problèmes identifiés

**Données codées en dur**

  * Les données ne proviennent pas d’une API.
  * Elles sont directement écrites dans le fichier.
  * Elles ne sont donc pas réellement dynamiques.

**Mauvaise séparation des composants**

  * Une grande partie du site est regroupée dans un seul fichier.
  * Plusieurs responsabilités sont mélangées au même endroit.
  * Il serait préférable de séparer les différentes pages et les composants réutilisables.

**Utilisation artificielle de `useEffect`**

  * Le `useEffect` ne récupère aucune donnée distante.
  * Il utilise simplement un `setTimeout` pour simuler un délai réseau.
  * Ce délai est donc artificiel et n’apporte rien dans le fonctionnement réel de l’application.

**Composant inutilisé**

  * Un composant correspondant à une autre page est déjà présent dans le fichier.
  * Cependant, celui-ci n’est pas réellement utilisé ou accessible dans le routing actuel.

**Code peu homogène**

  * Certaines données codées en dur ne suivent pas exactement le même style de formatage.
  * L’indentation et la présentation de certains objets sont irrégulières.

**Code de debug encore présent**

  * Plusieurs `console.log()` sont encore présents.
  * Ils devraient être retirés dans une version propre ou destinée à la production.

## Nouvelle architechture proposée

```
src/
├── App.tsx
├── Main.tsx
│
├── components/
│   ├── Indicator.tsx
│   ├── ChartMedal.tsx
│   └── ChartEvolution.tsx
│
├── pages/
│   ├── Home.tsx
│   └── Country.tsx
│
├── hooks/
│   ├── useCountry.ts
│   └── useParticitaption.ts
│
├── data/
│   └── olympicsData.ts
│
└── models/
    ├── Country.ts
    └── Participation.ts
```

**Raisonnement**
* Les routes sont dans le fichier ``App``
* Les composants UI vont dans `components`
* Les compositions des pages dans `pages`
* La récupération et organisation des données dans `hooks`
* `data` contiens les données en dur mais plus tard il y aura un fichier de récupération API
* Les objets utilisés ont leurs models dans `models`