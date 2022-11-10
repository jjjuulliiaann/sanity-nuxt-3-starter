# 🍿 Sanity Nuxt 3 Starter

Opinionated monorepo starter based on Nuxt 3 and Sanity. Look at the [`Nuxt 3 documentation`](https://v3.nuxtjs.org) and the [`Sanity documentation`](https://www.sanity.io/docs/overview-introduction) to learn more.

## Features

-   Monorepo using PNPM Workspaces
-   Sanity 2 React Backend (in /studio)
-   Nuxt 3 Frontend (in /web)
-   Vite Module Bundler
-   Pinia Store
-   Linting with ESLint
-   Code Formatting with Prettier
-   Lazyloading with LazySizes
-   Studio using Mux for videos
-   Configured for Netlify Hosting

## Quick start

1. Clone the repository

2. Rename Studio (in `studio/sanity.js`), rename project (in `package.json`)

3. Initialize Sanity studio (select "Reconfigure" when asked)

    ```
    cd studio
    sanity init
    ```

4. In `/web` create a `.env` file from `.env.example` and paste the `SANITY_PROJECT_ID` from `studio/sanity.json`

    In `/studio` create a `.env.development` file from `.env.development.example`

5. Install dependencies (from root)

    ```
    pnpm i --shamefully-hoist
    ```

6. Start development at localhost:3000 (Nuxt frontend) and localhost:3333 (Sanity studio)

    ```
    pnpm dev
    ```

## Documentation

### Deploying to Netlify

-   In Netlify add two separate sites with "studio" / "web" as the base directories. The rest of the build settings is handled automatically (and by the `studio/netlify.toml` file).

-   You will need to add environment variables used in your .env and .env.development to Netlify as well.

### Sanity

-   API Access: You have to add all origins that should have access to your Sanity dataset (like http://localhost:3333 or your netlify url) the to the API settings in your [`Sanity Account`](https://manage.sanity.io)

-   To install updates for the Sanity studio:

    ```
    cd studio
    sanity upgrade
    cd ..
    pnpm i --shamefully-hoist
    ```

### Nuxt

Nuxt 3 is still in release candidate stage. You can check the [`Roadmap`](https://v3.nuxtjs.org/community/roadmap).

To update manually: Bump `nuxt` dependency to `3.0.0-rc.XX` and then use `npx nuxi@latest cleanup` to cleanup any local caches.

### Preview Mode

#### Studio:

All singleton documents with `preview: true` set in the desk structure and all collection documents feature a Preview panel. The URL schema of those documents has to be defined in `utils/resolveProductionUrl.js` to adapt to your front end's URL structure.

#### Frontend:

(Setup for Universal Rendering) A separate Sanity client named `preview` is defined in `nuxt.config.js`. You have to allow credentials for the frontend URL in your Sanity API settings to access unpublished data from Sanity.

All pages that support previews include the composable `use-preview-handler`. If the URL contains the param `?preview=true` the Preview header is visible and the separate sanity preview client is used for updates.
