import { defineStore } from 'pinia'
import { siteQuery } from '@/queries/contentQueries'

export const useMainStore = defineStore('MainStore', {
	state: () => {
		return {
			siteOptions: {},
			siteNavigation: {},
			slugs: {},
			window: {
				width: 0,
				height: 0,
				desktopWidth: 700,
			},
			menuIsOpen: false,
			messages: {
				notFound: 'Page not found.',
			},
			counter: 0,
			preview: {
				isActive: false,
				isFullscreen: false,
				query: '',
				params: {},
				data: {},
			},
		}
	},

	getters: {
		counterIsZero: (state) => state.counter === 0,
	},

	actions: {
		async fetchSiteContent() {
			const { data } = await useSanityQuery(siteQuery)
			this.siteOptions = data.value.siteOptions
			this.siteNavigation = data.value.siteNavigation
			this.slugs = data.value.slugs
		},
		// load preview data with sanity preview client
		async refreshPreview() {
			if (!this.preview.query) {
				console.error(`Preview query is missing.`)
				return false
			}
			try {
				const { data } = await useSanityQuery(
					this.preview.query,
					this.preview.params,
					{
						client: 'preview',
						server: false,
						initialCache: false,
					}
				)
				if (!data.value) {
					throw new Error('Received no data')
				}
				this.preview.data = data
			} catch (e) {
				console.error(e)
			}
		},
		closeMenu() {
			this.menuIsOpen = false
		},
		openMenu() {
			this.menuIsOpen = true
		},
		toggleMenu() {
			this.menuIsOpen = !this.menuIsOpen
		},
		increaseCounter() {
			this.counter++
		},
		randomizeCounter() {
			this.counter = Math.round(100 * Math.random())
		},
		resetCounter() {
			this.counter = 0
		},
	},
})
