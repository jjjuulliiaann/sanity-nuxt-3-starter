<template>
	<main class="TextPage">
		<h1 v-if="data" class="text-lg text_bold">{{ data.title }}</h1>

		<section v-if="data" class="TextPage_Text">
			<div class="blockcontent">
				<ElementsTextContent :blocks="data.content" />
			</div>
		</section>
	</main>
</template>

<script setup>
import { pageQuery } from '@/queries/contentQueries'

definePageMeta({
	validate({ params }) {
		const mainStore = useMainStore()
		if (
			!mainStore.slugs.pages.includes(params.slug) &&
			!mainStore.previewIsActive
		) {
			return createError({
				statusCode: 404,
				message: 'Page not found',
			})
		}

		return true
	},
})

// get data
const mainStore = useMainStore()
const route = useRoute()
const params = {
	slug: route.params.slug,
}
const data = await useSanityData({
	query: pageQuery,
	params: params,
})

// meta
usePageHead({ title: data.value?.title, seo: data.value?.seo })
</script>

<style scoped>
h1 {
	margin-bottom: 10rem;
}

/* text */

.TextPage_Text {
	position: relative;
	display: grid;

	@media (min-width: token(width.md)) {
		grid-template-columns: repeat(6, minmax(0, 1fr));
		gap: 1rem;
	}
}

.TextPage_Text > div {
	@media (min-width: token(width.md)) {
		grid-column: 1 / -2;
	}

	@media (min-width: token(width.lg)) {
		grid-column: 1 / -4;
	}
}
</style>
