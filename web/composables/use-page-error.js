import { useMainStore } from '~/stores/MainStore'
import { createError } from 'h3'

export default function (data) {
	const mainStore = useMainStore()
	if (!data.value) {
		throwError(
			createError({
				statusCode: 404,
				statusMessage: mainStore.messages.notFound,
			})
		)
	}
}
