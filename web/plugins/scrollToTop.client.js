import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook('page:finish', () => {
		setTimeout(() => {
			window.scrollTo(0, 0)
		}, 500)
	})
})
