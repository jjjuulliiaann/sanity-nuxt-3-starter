export default defineNuxtPlugin((nuxtApp) => {
	const route = useRoute()
	const mainStore = useMainStore()
	const preview = route.query.preview && route.query.preview === 'true'

	if (preview) {
		mainStore.previewIsActive = true

		mainStore.sanityClient = {
			client: 'preview',
			server: false,
			initialCache: false,
		}
	}
})
