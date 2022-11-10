import { useMainStore } from '~/stores/MainStore'

export default function ({ query, params, data }) {
	const mainStore = useMainStore()

	// listen to preview data changes
	watch(
		() => mainStore.preview.data,
		(newVal) => {
			if (newVal) {
				// replace page data with new preview data
				data.value = mainStore.preview.data
			}
		}
	)

	// save page query and params in store
	const setupPreview = () => {
		mainStore.preview.query = query
		mainStore.preview.params = params
	}

	onMounted(() => {
		if (mainStore.preview.isActive) {
			setupPreview()
			setTimeout(() => {
				mainStore.refreshPreview()
			}, 300)
		}
	})
}
