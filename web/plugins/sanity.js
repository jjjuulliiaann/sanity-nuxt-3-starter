import { useContentStore } from '~/stores/ContentStore'

/* get global page data on start */
export default defineNuxtPlugin(async () => {
	const contentStore = useContentStore()
	await contentStore.fetchSiteContent()
})
