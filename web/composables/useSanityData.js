/*
composable for loading and previewing data from sanity 
*/
export default async function ({ query, params, livePreview = true }) {
	const mainStore = useMainStore()
	const sanityClient = mainStore.previewIsActive
		? {
				client: 'preview',
				server: false,
				initialCache: false,
		  }
		: undefined

	// live preview: listen to changes
	onMounted(() => {
		if (mainStore.previewIsActive && livePreview) {
			const sanity = useSanity('preview')
			sanity.client.listen(query, params).subscribe((event) => {
				setTimeout(() => {
					refresh()
				}, 900)
			})
		}
	})

	// get data
	const { data, refresh } = await useLazySanityQuery(
		query,
		params,
		sanityClient
	)

	return data
}
