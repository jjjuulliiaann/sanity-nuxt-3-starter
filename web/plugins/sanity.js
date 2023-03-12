/* get global page data on start */
export default defineNuxtPlugin(async () => {
	const mainStore = useMainStore()
	const route = useRoute()
	await mainStore.fetchSiteContent()
})
