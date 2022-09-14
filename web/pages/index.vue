<template>
	<main>
		<TheCounter />
		<section class="text-base">
			<ElementsTextContent :blocks="contentStore.pageHome?.content" />
		</section>
	</main>
</template>

<script setup>
import { useContentStore } from '~/stores/ContentStore'

// get data
const contentStore = useContentStore()
contentStore.fetchHome()

// meta
useHead({
	title: '',
})
</script>

<style scoped>
main {
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	padding: 1rem;
}
</style>
