import { useMainStore } from '~/stores/MainStore'

export default async function ({ query, params }) {
	const mainStore = useMainStore()

	// use preview client if preview is active
	const sanityClient = mainStore.previewIsActive
		? {
				client: 'preview',
				server: false,
				initialCache: false,
		  }
		: undefined

	const { data } = await useSanityQuery(query, params, sanityClient)

	return data
}
