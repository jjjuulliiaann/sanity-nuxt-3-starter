export default defineNuxtPlugin(async () => {
	const mainStore = useMainStore()
	const route = useRoute()

	// fetch global page data on start
	await mainStore.fetchSiteContent()

	// check if preview mode is active and set previewIsActive
	const preview = route.query.preview && route.query.preview === 'true'
	if (preview) {
		mainStore.previewIsActive = true
	}
})
