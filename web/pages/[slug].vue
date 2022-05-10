<template>
	<main v-if="data" class="TextPage">
		<h1 class="text-lg text_bold">{{ data.title }}</h1>

		<section class="TextPage_Text blockcontent">
			<ElementsTextContent :blocks="data.content" />
		</section>
	</main>
</template>

<script setup>
import { pageTextQuery } from '@/queries/contentQueries'
import { createError } from 'h3'

// get data
const route = useRoute()
const { data } = await useSanityQuery(pageTextQuery, {
	slug: route.params.slug,
})

// error handling
if (!data.value) {
	throwError(
		createError({
			statusCode: 404,
			statusMessage: 'Not Found',
		})
	)
}

// meta
useDefaultHead(data.value.title, data.value.seo)
</script>

<style scoped>
.TextPage {
	position: relative;
	padding: 1rem;
}

.TextPage_Text {
	position: relative;
	padding: 2rem 0;
	max-width: 60rem;
}
</style>
