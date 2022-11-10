import { useMainStore } from '~/stores/MainStore'
import { createError } from 'h3'

export default function (data) {
	const route = useRoute()
	const mainStore = useMainStore()

	if (!data.value && !route.query.preview) {
		throwError(
			createError({
				statusCode: 404,
				statusMessage: mainStore.messages.notFound,
			})
		)
	}
}
