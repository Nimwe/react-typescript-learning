# React Typescript

Ce projet à compléter vous permettra de vous entraîner à l'utilisation des fondamentaux de la bibliothèque React, ceci en Typescript (parcequ'avec des types la vies est toujours plus agréable).

> [!TIP]
> Il vous est fortement conseillé de suivre le [tutoriel officiel React](https://react.dev/learn/your-first-component) jusqu'à la partie "JavaScript in JSX with Braces.

## Mise en place du projet

1. Installer les dépendances :
```sh
npm install
```

2. Démarrer le serveur de développement :
```sh
npm run dev
```

L'odre `dev` de la commande ci-dessus fait référence à la section "script" du fichier de configuration `package.json`.

Voici l'extrait en question :
```json
"scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
```

Plusieurs commandes possibles pour ce projet :
- `npm run dev` correspond à `vite`: lance la commande `vite` qui démarrer un serveur de développement local
- `npm run build` correspond à `tsc -b && vite build` : 
    - lance la commande `tsc -b` qui appelle le transpileur TypeScript et démarre la transpilation en Javascript (option `-b` pour "build")
    - grâce à `&&` la première commande est chaînée avec `vite build` qui permet de créer un "bundle" de l'application optimisé pour la production (fichiers minifiés, CSS regroupé, optimisation des `assets` comme les images...)
- `npm run lint` correspond à `eslint .` : ESLint est un outil d'analyse de code qui permet :
    - détecter les erreurs
    - vérifier que l'indentation est bien faite
    - retrouver les ["code smell"](https://fr.wikipedia.org/wiki/Code_smell)
- `npm run preview` correspond à `vite preview` : démarre un serveur local pour prévisualiser la version compilée pour la production (avec, par exemple, la commande `npm run build`).

## Etapes de développement

Vous allez pouvoir développer les différents composants proposés dans l'ordre présenté dans la liste ci-dessous. :
1. `CounterPage.tsx` :
- écriture de composant
- utilisation de `state`
- gestion des évènements

2. `TasksPage.tsx` :
- utiliation de `states`
- manipulation de tableaux
- répétition de composants

3. `RandomWord.tsx` :
- utiliation de `states`
- mise en place du `hook` `useEffect`

4. `ClockPage.tsx` :
- utilisation de `states`
- utilisation de la fonction `setInterval`

5. `UsersPage.tsx` :
- requêtage de Web API
- construction dynamique d'une interface
- répétition de composants