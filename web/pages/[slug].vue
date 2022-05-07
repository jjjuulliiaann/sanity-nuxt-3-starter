<template>
	<main class="textpage">
		<h1 class="text-lg text--bold">{{ data.title }}</h1>

		<!-- <section class="blockcontent text-01">
			<ElementsTextBlock :blocks="data.content" />
		</section> -->
	</main>
</template>

<script setup>
import { pageTextQuery } from '@/queries/contentQueries'

// validate
definePageMeta({
	middleware: ['validate-page'],
})

// get data
const route = useRoute()
const { data } = await useSanityQuery(pageTextQuery, {
	slug: route.params.slug,
})
</script>

<style scoped>
.textpage {
	position: relative;
	padding: 1rem;
}
</style>
