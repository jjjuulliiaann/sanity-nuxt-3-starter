import { defineStore } from 'pinia'
import { slugsQuery, homeQuery } from '@/queries/contentQueries'

export const useContentStore = defineStore('ContentStore', {
	state: () => {
		return {
			slugs: {
				pages: [],
				projects: [],
				isLoaded: false,
			},
			siteOptions: {},
			home: {},
		}
	},

	getters: {
		getHomeTitle: (state) => state.home.title,
	},

	actions: {
		async fetchSlugs() {
			const { data } = await useSanityQuery(slugsQuery)
			this.slugs = data.value
			return this.slugs
		},

		async fetchHome() {
			const { data } = await useSanityQuery(homeQuery)
			this.home = data.value
		},
	},
})
