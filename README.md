# 🌵 Sanity Nuxt 3 Starter

> The Starter uses Sanity Studio Version 3. For the previous v2 version, have a look at the [`studio-v2` branch](https://github.com/jjjuulliiaann/sanity-nuxt-3-starter/tree/studio-v2)

Opinionated monorepo starter based on Nuxt 3 and Sanity 3. Look at the [`Nuxt 3 documentation`](https://nuxt.com/docs/getting-started/introduction) and the [`Sanity documentation`](https://www.sanity.io/docs/overview-introduction) to learn more.

## ✨ Features

-   Monorepo using PNPM Workspaces
-   Sanity Studio v3 React Backend (in /studio)
-   Nuxt 3 Frontend (in /web)
-   Vite Module Bundler
-   Pinia Store
-   Linting with ESLint
-   Code Formatting with Prettier
-   Lazyloading with LazySizes
-   Studio using Mux for videos
-   Configured for Netlify Hosting

## 🚀 Quick start

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

## 📖 Documentation

### Deploying to Netlify

-   In Netlify add two separate sites with "studio" / "web" as the base directories. The rest of the build settings is handled automatically (and by the `studio/netlify.toml` file).

-   You will need to add environment variables used in your .env files to Netlify as well.

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

To upgrade Nuxt 3 to the latest release, use the `npx nuxi upgrade` command.

To update manually: Bump `nuxt` dependency to the new version and then use `npx nuxi@latest cleanup` to cleanup any local caches.

### Preview Mode

#### Studio:

- All documents defined in `config/views.js` have a preview tab in the Studio
- The production urls for those documents are resolved with the `resolveProductionUrl` function in `config/views.js`
- The "Open preview" button in the studio context menu is defined in `sanity.config.js` using `resolveProductionUrl`
- The studio uses the `sanity-plugin-iframe-pane` to show the page inside a preview pane

#### Frontend:

- A separate Sanity client named `preview` is defined in `nuxt.config.js`. 
- You have to allow credentials for the frontend URL in your Sanity API settings to access unpublished data from Sanity.
- If the url contains the `preview` query, the `useSanityData` composable uses the preview client for fetching data
