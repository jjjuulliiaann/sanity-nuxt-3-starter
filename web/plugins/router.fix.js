export default defineNuxtPlugin(() => {
	// // TODO: this fix needs to make it into core
	useRouter().afterEach(async () => {
		await clearError()
	})
})
