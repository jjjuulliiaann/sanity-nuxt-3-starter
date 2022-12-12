<template>
	<main v-if="data" class="TextPage">
		<h1 class="text-lg text_bold">{{ data.title }}</h1>

		<section class="TextPage_Text blockcontent">
			<ElementsTextContent :blocks="data.content" />
		</section>
	</main>
</template>

<script setup>
import { useMainStore } from '~/stores/MainStore'
import { pageQuery } from '@/queries/contentQueries'

definePageMeta({
	validate({ params }) {
		const mainStore = useMainStore()
		if (!mainStore.slugs.pages.includes(params.slug)) {
			return createError({
				statusCode: 404,
				message: 'Page not found',
			})
		}

		return true
	},
})

// get data
const route = useRoute()
const params = {
	slug: route.params.slug,
}
const { data } = await useSanityQuery(pageQuery, params)

// preview handling
usePreviewHandler({ query: pageQuery, params, data })

// meta
usePageHead({ title: data.value?.title, seo: data.value?.seo })
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
