# 🌵 Sanity Nuxt 3 Starter

Opinionated monorepo starter based on Nuxt 3 and Sanity v3. Look at the [`Nuxt 3 documentation`](https://nuxt.com/docs/getting-started/introduction) and the [`Sanity documentation`](https://www.sanity.io/docs/overview-introduction) to learn more.

Preview: https://sanity-nuxt-3-starter.netlify.app 👀

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

1. Install the project as a nuxt template

    ```
    npx nuxi init -t gh:jjjuulliiaann/sanity-nuxt-3-starter my-project-title
    ```

2. If not installed, you can install the sanity cli globally

    ```
    npm install --global sanity@latest
    ```

3. Create a new Sanity project (from root):
   
    ```
	npm create sanity@latest
	```
   
   Follow the steps until asked for the "Project output path". Enter `Ctrl+C` to abort as we already have a studio folder. 
   
   (Currently it seems not to be possible to create a new sanity project using the cli without installing a new studio folder)
   
4. Get the ID of your newly created project by listing your projects:

    ```
	sanity projects list
	```
   
5. Create a `.env` file from `.env.template` in both `/studio` and `/web` and fill in the project ID and dataset.
   
6. Rename project in `package.json` and your studio in `studio/sanity.config.js`

7. On [sanity.io/manage](https://sanity.io/manage) add `http://localhost:3000` to the CORS origins (allow Credentials for Previews)

8. Install dependencies (from root)

    ```
    pnpm i --shamefully-hoist
    ```

9. Start developing on localhost:3000 (Nuxt frontend) and localhost:3333 (Sanity studio) (from root)

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

-  A separate Sanity client named `preview` is defined in `nuxt.config.js` with `useCDN` set to false and `withCredentials` set to true. 
- The plugin `preview.js` is checking if the current route contains a `?preview=true` query and sets `previewIsActive` and a `sanityClient` object in MainStore accordingly.
- All pages supporting previews use the `sanityClient` object inside `useSanityQuery()` and will retrieve preview data if the route contains `?preview=true`
- Don't forget to allow credentials for the frontend URL in your Sanity API settings to access unpublished data from Sanity.
- Groq queries should be ordererd by updates (`order(_updatedAt desc) [0]`) so that unpublished drafts are queried in preview mode.
