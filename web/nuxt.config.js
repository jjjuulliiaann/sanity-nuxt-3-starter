import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	// meta
	meta: {
		title: 'Sanity Nuxt 3 Starter',
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

	publicRuntimeConfig: {
		BASE_URL: process.env.BASE_URL,
	},

	// css
	css: [
		'~/assets/css/reset.css',
		'~/assets/css/variables.css',
		'~/assets/css/typography.css',
		'~/assets/css/app.css',
	],

	// modules
	modules: ['@nuxtjs/sanity', '@vueuse/motion/nuxt'],

	// build modules
	buildModules: ['@pinia/nuxt', '@vueuse/nuxt'],

	// vueuse motion
	motion: {
		directives: {
			'pop-up': {
				initial: {
					opacity: 0,
					scale: 0.5,
				},
				visible: {
					opacity: 1,
					scale: 1,
					transition: {
						type: 'spring',
						stiffness: 250,
						damping: 15,
						mass: 0.5,
					},
				},
			},
		},
	},

	// sanity
	sanity: {
		projectId: process.env.SANITY_PROJECT_ID,
		dataset: process.env.SANITY_DATASET,
		apiVersion: '2022-04-26',
		useCdn: true,
	},

	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					autoprefixer: {},
					'postcss-import': {},
					'postcss-nesting': {},
					'postcss-custom-media': {
						preserve: false,
						importFrom: {
							customMedia: {
								'--w-mobile-1': '(min-width: 320px)',
								'--w-mobile-2': '(min-width: 375px)',
								'--w-mobile-3': '(min-width: 450px)',

								'--w-tablet-1': '(min-width: 768px)',
								'--w-tablet-2': '(min-width: 850px)',

								'--w-desktop-1': '(min-width: 1024px)',
								'--w-desktop-2': '(min-width: 1280px)',
								'--w-desktop-3': '(min-width: 1440px)',
								'--w-desktop-4': '(min-width: 1920px)',

								'--h-1': '(max-height: 550px)',
								'--h-2': '(max-height: 750px)',
								'--h-3': '(max-height: 900px)',
							},
						},
					},
				},
			},
		},
	},
})
