import { defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', {
	state: () => {
		return {
			counter: 0,
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

	// getters
})
