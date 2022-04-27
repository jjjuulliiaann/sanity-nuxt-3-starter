<template>
	<main class="textpage">
		<h1>{{ data.title }}</h1>

		<!-- <section class="blockcontent text-01">
			<ElementsTextBlock :blocks="data.content" />
		</section> -->
	</main>
</template>

<script setup>
import { templateTextQuery } from '@/queries/contentQueries'

// validate
definePageMeta({
	middleware: ['validate-page'],
})

// get data
const route = useRoute()
const { data } = useSanityQuery(templateTextQuery, { slug: route.params.slug })
</script>

<style scoped>
.textpage {
	position: relative;
	min-height: 90vh;
	padding: 1rem;
}

.blockcontent {
	padding: 2rem 0;
}
</style>
