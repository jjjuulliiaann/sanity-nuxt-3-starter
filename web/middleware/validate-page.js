import { useContentStore } from '@/stores/ContentStore'
import { useMainStore } from '@/stores/MainStore'

/* validation function for templateText pages */
export default defineNuxtRouteMiddleware(async (to) => {
	const contentStore = useContentStore()
	const mainStore = useMainStore()

	let slugs = []
	if (!contentStore.slugs.isLoaded) {
		slugs = await contentStore.fetchSlugs()
	} else {
		slugs = contentStore.slugs
	}

	const isValid = slugs.pages.includes(to.params.slug)
	if (!isValid) {
		return abortNavigation(mainStore.messages.notFound)
	}
})
