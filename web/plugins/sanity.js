import { useContentStore } from '~/stores/ContentStore'

export default defineNuxtPlugin(() => {
	console.log('sanity plugin in operation')
	const contentStore = useContentStore()
	return contentStore.fetchSiteContent()
})
