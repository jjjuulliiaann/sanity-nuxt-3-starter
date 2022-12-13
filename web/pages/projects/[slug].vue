<template>
	<main v-if="data" class="Project">
		<section class="Project_Title">
			<ElementsMediaBaseFigure
				:image="data.titleImage"
				class="Project_Titleimage"
			/>
			<h1 v-if="data.title" class="text-lg text_bold text_white">{{
				data.title
			}}</h1>
			<span class="Project_Credits text_bold">
				Image by:
				<ElementsTextLink
					link-type="externalLink"
					:href="data.photographer.url"
					:blank="true"
					class="Projects_Photographer"
				>
					{{ data.photographer.name }}</ElementsTextLink
				> </span
			><br />
			<span class="text-base text_bold">
				{{ data.subtitle }}
			</span>
		</section>

		<section class="Project_Text blockcontent">
			<ElementsTextContent :blocks="data.content" />
		</section>
	</main>
</template>

<script setup>
import { useMainStore } from '~/stores/MainStore'
import { singleProjectQuery } from '@/queries/contentQueries'

definePageMeta({
	validate({ params }) {
		const mainStore = useMainStore()
		if (!mainStore.slugs.projects.includes(params.slug)) {
			return createError({
				statusCode: 404,
				message: 'Project not found',
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
const { data } = await useSanityQuery(singleProjectQuery, params)

// preview handling
usePreviewHandler({ query: singleProjectQuery, params, data })

// meta
usePageHead({
	title: data.value?.title,
	seo: data.value?.seo,
	titleImage: data.value?.images?.[0],
})
</script>

<style scoped>
.Project {
	position: relative;
}

.Project_Title {
	position: relative;
	width: 100%;
	margin-bottom: 4rem;
}

.Project_Titleimage {
	position: relative;
	width: 100%;
	aspect-ratio: 2 / 1;
}

.Project_Titleimage:deep(img) {
	position: relative;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

h1 {
	padding: 0.5rem 0;
}

.Project_Credits {
}

/* text */

.Project_Text {
	position: relative;
	min-height: 50vh;
	padding: 1rem;
	max-width: 60rem;
}
</style>
