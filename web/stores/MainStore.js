import { defineStore } from 'pinia'
import { siteQuery } from '@/queries/contentQueries'

export const useMainStore = defineStore('MainStore', {
	state: () => {
		return {
			siteOptions: {},
			siteNavigation: {},
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
