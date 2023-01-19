/* get global page data on start */
export default defineNuxtPlugin(async () => {
	const mainStore = useMainStore()
	const route = useRoute()
	await mainStore.fetchSiteContent()
	// set preview mode active if query contains "preview"
	if (route.query.preview) {
		mainStore.previewIsActive = true
	}
})
