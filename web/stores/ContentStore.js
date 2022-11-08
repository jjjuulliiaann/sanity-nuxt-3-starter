import { defineStore } from 'pinia'
import {
	slugsQuery,
	siteQuery,
	homeQuery,
	projectsQuery,
} from '@/queries/contentQueries'

export const useContentStore = defineStore('ContentStore', {
	state: () => {
		return {
			slugs: {
				pages: [],
				projects: [],
				isLoaded: false,
			},
			siteOptions: {},
			siteNavigation: {},
			pageHome: {},
		}
	},

	actions: {
		async fetchSlugs() {
			const { data } = await useSanityQuery(slugsQuery)
			this.slugs = data.value
			return this.slugs
		},

		async fetchSiteContent() {
			const { data } = await useSanityQuery(siteQuery)
			this.siteOptions = data.value.siteOptions
			this.siteNavigation = data.value.siteNavigation
			return this.slugs
		},

		async fetchHome() {
			const { data } = await useSanityQuery(homeQuery)
			this.pageHome = data.value
		},
	},
})
