import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

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
				hid: 'description',
				name: 'description',
				content: 'Sanity Nuxt 3 Starter',
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

	// css
	css: [
		'~/assets/css/reset.css',
		'~/assets/css/variables.css',
		'~/assets/css/app.css',
	],

	// modules
	modules: ['@nuxtjs/sanity'],

	// build modules
	buildModules: ['@nuxtjs/eslint-module', '@pinia/nuxt'],

	// vite
	vite: {
		plugins: [eslintPlugin()],
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
						extensions: {
							'--w-mobile-1': '(min-width: 320px)',
							'--w-mobile-2': '(min-width: 375px)',
							'--w-mobile-3': '(min-width: 450px)',

							'--w-tablet-1': '(min-width: 700px)',
							'--w-tablet-2': '(min-width: 850px)',

							'--w-desktop-1': '(min-width: 1000px)',
							'--w-desktop-2': '(min-width: 1300px)',
							'--w-desktop-3': '(min-width: 1500px)',
							'--w-desktop-4': '(min-width: 2000px)',

							'--h-1': '(max-height: 550px)',
							'--h-2': '(max-height: 750px)',
							'--h-3': '(max-height: 900px)',
						},
					},
				},
			},
		},
	},
})
