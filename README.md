# 🌵 Sanity Nuxt 3 Starter

Opinionated monorepo starter based on Nuxt 3 and Sanity v3.

Preview: https://sanity-nuxt-3-starter.netlify.app 👀

## ✨ Features

-   Monorepo using PNPM Workspaces
-   Sanity Studio v3 React Backend (in /studio)
-   Nuxt 3 Frontend (in /web)
-   Live Previews
-   Progressive image loading with [Unlazy](https://github.com/johannschopplich/unlazy) using BlurHashes
-   Studio using [Mux](https://www.mux.com/) for videos
-   Vite Module Bundler
-   Pinia Store
-   Linting with ESLint
-   Code Formatting with Prettier
-   Configured for Netlify Hosting

## 🚀 Quick start

1. Install the project as a nuxt template

    ```
    npx nuxi init -t gh:jjjuulliiaann/sanity-nuxt-3-starter my-project-title
    ```

2. If not installed, you can install the sanity cli globally

    ```
    pnpm i sanity@latest -g
    ```

3. Create a new Sanity project & dataset:

    ```
    pnpm create sanity --bare
    ```

    The `--bare` flag skips the installation of a new studio as we already have a studio folder.

    After the setup steps you can copy the new project ID and dataset from the console.

4. Create a `.env` file from `.env.template` in both `/studio` and `/web` and fill in the project ID and dataset.
5. Rename project in `package.json` and your studio in `studio/sanity.config.js`

6. On [sanity.io/manage](https://sanity.io/manage) add `http://localhost:3000` to the CORS origins (allow Credentials for Previews)

7. Install dependencies (from root)

    ```
    pnpm i --shamefully-hoist
    ```

8. Start developing on localhost:3000 (Nuxt frontend) and localhost:3333 (Sanity studio) (from root)

    ```
    pnpm dev
    ```

## 📖 Documentation

### 🤖 Deploying to Netlify

-   In Netlify add two separate sites with "studio" / "web" as the base directories. The rest of the build settings is handled automatically (and by the `studio/netlify.toml` file).

-   You will need to add environment variables used in your .env files to Netlify as well.

### 🎟️ Sanity

-   Documentation: https://www.sanity.io/docs/overview-introduction

-   API Access: You have to add all origins that should have access to your Sanity dataset (like http://localhost:3333 or your netlify url) the to the API settings in your [`Sanity Account`](https://manage.sanity.io)

-   To install updates for the Sanity studio run from root:

    ```
    pnpm i sanity@latest --filter studio
    ```

### 🏔️ Nuxt

-   Documentation: https://nuxt.com/docs/getting-started/introduction

-   To upgrade Nuxt 3 to the latest release, use the `npx nuxi upgrade` command.

-   To update manually: Bump `nuxt` dependency to the new version and then use `npx nuxi@latest cleanup` to cleanup any local caches.

### 👀 (Live) Previews

#### Studio:

-   All documents defined in `config/views.js` have a preview tab in the Studio
-   The production urls for those documents are resolved with the `resolveProductionUrl` function in `config/views.js`
-   The "Open preview" button in the studio context menu is defined in `sanity.config.js` using `resolveProductionUrl`
-   The studio uses the `sanity-plugin-iframe-pane` to show the page inside a preview pane

#### Frontend:

-   A separate Sanity client named `preview` is defined in `nuxt.config.js` with `useCDN` set to false and `withCredentials` set to true.
-   The plugin `sanity.js` is checking if the current route contains a `?preview=true` query and sets `previewIsActive` in MainStore accordingly.
-   All pages use the `useSanityData` composable to handle previews and load data from Sanity. If the url contains the preview query, preview data is loaded.
-   When `livePreview` is set to true (default), the composable is listening to changes and updates the data every time. (This can substantially increase the amount of Sanity API requests!)
-   Don't forget to allow credentials for the frontend URL in your Sanity API settings to access unpublished data from Sanity.
-   Groq queries should be ordererd by updates (`order(_updatedAt desc) [0]`) so that unpublished drafts are queried in preview mode.
