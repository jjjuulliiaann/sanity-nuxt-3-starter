import { useMainStore } from '~/stores/MainStore'

/* get global page data on start */
export default defineNuxtPlugin(async () => {
	const mainStore = useMainStore()
	await mainStore.fetchSiteContent()
})
