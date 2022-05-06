import { useContentStore } from '~/stores/ContentStore'

export default defineNuxtPlugin(async () => {
	console.log('fetch global data on start')

	const contentStore = useContentStore()
	await contentStore.fetchSiteContent()
})
