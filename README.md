# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Personnaliser le thème et les animations

Ce projet utilise `@nuxt/ui` et `motion-v` (via `motion`) : j'ai centralisé les tokens de thème et les presets d'animations pour faciliter la personnalisation.

- **Fichier de tokens (couleurs, polices)** : `app/ui/theme.ts`
	- Modifiez les couleurs, polices et rayons (`radii`) ici pour impacter l'apparence globale.
	- Les tokens sont exposés via `app/app.config.ts` sous `appConfig().ui.tokens`.

- **Presets d'animation** : `app/composables/useMotionPresets.ts`
	- Définissez ou ajustez `fadeUp(delay)` et `popIn(delay)` pour changer duration, easing, ou valeurs initiales.
	- Exemple d'utilisation dans un composant :

```vue
<script setup lang="ts">
const { popIn } = useMotionPresets()
</script>

<template>
	<Motion v-bind="popIn(0.2)">
		<!-- contenu animé -->
	</Motion>
</template>
```

- **Stagger / listes** : utilisez `fadeUp(index * 0.08)` pour espacer l'entrée des items.

- **Variables CSS (optionnel)** : si vous préférez utiliser les couleurs dans du CSS pur, vous pouvez générer des variables `--brand-500` dans un fichier CSS en important `app/ui/theme.ts` via un script de build ou composer un petit utilitaire pour écrire un fichier `.css` à partir des tokens.

## Commandes utiles (rapide rappel)

```bash
# installer les dépendances
pnpm install

# lancer le serveur de développement
pnpm dev

# vérifier les types
pnpm run typecheck
```

Si vous voulez que je :
- ajoute la génération automatique de variables CSS depuis `app/ui/theme.ts`,
- expose une petite page dev-only pour tester en live les tokens/animations,
- ou applique d'autres presets sur des composants restants,
 dites-moi lequel et je l'implémente.
