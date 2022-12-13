import { defineStore } from 'pinia'
import { siteQuery } from '@/queries/contentQueries'

export const useMainStore = defineStore('MainStore', {
	state: () => {
		return {
			siteOptions: {},
			siteNav: {},
			slugs: {},
			previewIsActive: false,
			window: {
				width: 0,
				height: 0,
				desktopWidth: 700,
			},
			menuIsOpen: false,
			messages: {
				notFound: 'Page not found.',
			},
		}
	},

	actions: {
		async fetchSiteContent() {
			const { data } = await useSanityQuery(siteQuery)
			this.siteOptions = data.value.siteOptions
			this.siteNav = data.value.siteNav
			this.slugs = data.value.slugs
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
	},
})
