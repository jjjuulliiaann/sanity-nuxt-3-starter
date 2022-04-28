<template>
	<main>
		<Counter />
		<h1 class="text-lg text--bold">{{ contentStore.pageHome?.title }}</h1>
		<p class="text-base">Some text in font size base</p>
		<button @click="test">Click!</button>
	</main>
</template>

<script setup>
import { useContentStore } from '~/stores/ContentStore'

// get data
const contentStore = useContentStore()
contentStore.fetchHome()
</script>

<style scoped>
main {
	min-height: 100vh;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	padding: 1rem;
}

h1 {
	padding: 1rem 0;
}
</style>
