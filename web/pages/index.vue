<template>
	<main>
		<TheCounter />
		<section v-if="data.content" class="blockcontent text-base">
			<ElementsTextContent :blocks="data.content" />
		</section>
	</main>
</template>

<script setup>
import { homeQuery } from '@/queries/contentQueries'

// get data
const { data } = await useSanityQuery(homeQuery)

// preview handling
usePreviewHandler({ query: homeQuery, data })

// meta
usePageHead({
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
