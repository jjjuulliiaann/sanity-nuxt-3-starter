<template>
	<main>
		<Counter />
		<h1 class="text-lg text--bold">{{ contentStore.home.title }}</h1>
		<p class="text-base">Some text in font size base</p>
		<button @click="test">Click!</button>
		<p class="text-base">{{ testValue }}</p>
	</main>
</template>

<script setup>
import { useContentStore } from '~/stores/ContentStore'

// get data
const contentStore = useContentStore()
contentStore.fetchHome()

onMounted(() => {
	console.log(contentStore.home)
})

// test
const testValue = ref('')
const test = () => {
	testValue.value = contentStore.getHomeTitle
}
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
