import { tokens } from './assets/tokens'

export default defineNuxtConfig({
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{
					name: 'og:type',
					content: 'website',
				},
			],
			link: [
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: '/favicons/apple-touch-icon.png',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					href: '/favicons/favicon-32x32.png',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '16x16',
					href: '/favicons/favicon-16x16.png',
				},
				{
					rel: 'manifest',
					href: '/favicons/site.webmanifest',
				},
				{
					rel: 'mask-icon',
					href: '/favicons/safari-pinned-tab.svg',
					color: '#000000',
				},
				{
					rel: 'shortcut icon',
					href: '/favicons/favicon.ico',
				},
			],
		},
	},

	devServer: {
		host: 0, // localhost & local ip address
	},

	runtimeConfig: {
		public: {
			BASE_URL: process.env.BASE_URL,
		},
	},

	css: [
		'~/assets/css/reset.css',
		'~/assets/css/variables.css',
		'~/assets/css/typography.css',
		'~/assets/css/app.css',
	],

	modules: ['@nuxtjs/sanity', '@pinia/nuxt', '@vueuse/nuxt', '@unlazy/nuxt'],

	imports: {
		dirs: ['stores'],
	},

	sanity: {
		projectId: process.env.SANITY_PROJECT_ID,
		dataset: process.env.SANITY_DATASET,
		apiVersion: '2022-04-26',
		useCdn: true,
		additionalClients: {
			preview: {
				useCdn: false,
				withCredentials: true,
			},
		},
	},

	postcss: {
		plugins: {
			autoprefixer: {},
			'postcss-import': {},
			'postcss-design-tokens': { tokens },
			'postcss-nesting': {},
		},
	},
})
