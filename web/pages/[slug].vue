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

// get data
const route = useRoute()
const params = {
	slug: route.params.slug,
}
const { data } = await useSanityQuery(pageTextQuery, params)

// preview handling
usePreviewHandler({ query: pageTextQuery, params, data })

// error handling
const pageError = usePageError(data)

// meta
useDefaultHead({ title: data.value.title, seo: data.value.seo })
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
