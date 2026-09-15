# Architecture front-end

Ce document décris la nouvelle organisation du projet apres le refactor.

Le but concret est de ne plus avoir tout le code dans `App.tsx`, mais de separer les pages, les composants reutilisables, les types et la recuperation des données.

## Arborescence final

```txt
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
│   └── useData.ts
│
└── models/
    ├── Country.ts
    └── Participation.ts
```

## Pages

`App.tsx` sert seulement a definir les routes de l'application.

`Home.tsx` est une page smart. Elle utilise le hook `useData`, recupere la liste des pays et affiche le dashboard avec les statistiques principales et le graphique des medailles.

`Country.tsx` est aussi une page smart. Elle recupere l'id dans l'URL, use `useData`, puis cherche le pays correspondant dans la liste pour afficher les details.

## Composants

`HomeHeader.tsx` est un composant dumb. Il affiche le titre et le texte d'intro de la page d'accueil.

`Indicator.tsx` est un composant dumb. Il recoit un pays et affiche ses statistiques principales: total des medailles, total des athletes et participations.

`ChartMedal.tsx` affiche le graphique global des medailles pour tous les pays.

`ChartEvolution.tsx` affiche l'evolution des medailles pour un seul pays.

## Hook de donnees

`useData.ts` centralise l'acces aux donnees.

Il contient :

* le tableau des pays ;
* un state `data` ;
* un state `loading` ;
* un `useEffect` qui charge les donnees dans le state.

Comme ça,  les composants ne vont pas chercher les donnees directement. Ils passent par le meme hook, ce qui rend le code plus simple a maintenir.

## Loading

Le loading est retenu dans les pages qui ont besoin des donnees.

Dans `Home.tsx`, si `loading` est vrai, la page affiche `Chargement...`.

Dans `Country.tsx`, le loading est vérifié avant l'affichage de l'erreur `Country not found`, pour éviter d'afficher une erreur alors que les données ne sont pas encore pretes.

## Preparation pour une API

Les donnees sont encore statiques, mais elles sont deja isolees dans `useData` pour un futur usage API.

Si plus tard une API rest est ajoutée, il faudra surtout modifier ce hook pour remplacer les donnees statiques par un appel à l'api choisie.

Les pages et composants n'auront pas besoin d'être modifié ou très peu, car ils utilisent déjà `useData` au lieu de manipuler directement le tableau.
