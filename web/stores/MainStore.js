import { defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', {
	state: () => {
		return {
			counter: 0,
			window: {
				width: 0,
				height: 0,
				isMobile: false,
			},
			messages: {
				notFound: 'Page not found.',
			},
		}
	},

	getters: {
		counterIsZero: (state) => state.counter === 0,
	},

	actions: {
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

	// getters
})
