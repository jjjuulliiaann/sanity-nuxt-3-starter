<template>
	<main class="Project">
		<section class="Project_Title">
			<h1 class="text-lg text_bold text_white">{{ data.title }}</h1>
			<ElementsMediaBaseImage
				:image="data.images[0]"
				class="Project_Titleimage"
			/>
		</section>

		<section class="Project_Text blockcontent">
			<ElementsTextContent :blocks="data.content" />
		</section>
	</main>
</template>

<script setup>
import { singleProjectQuery } from '@/queries/contentQueries'

const route = useRoute()

// get data
const { data } = await useSanityQuery(singleProjectQuery, {
	slug: route.params.slug,
})

// meta
useDefaultHead(data.value.title, data.value.seo)
</script>

<style scoped>
main {
	margin-top: 0;
}

.Project {
	position: relative;
}

.Project_Title {
	position: relative;
	width: 100%;
	top: 0;

	@media (--w-tablet-1) {
		top: calc(var(--header-height) * -1);
	}
}

.Project_Titleimage {
	position: relative;
	width: 100%;
	height: auto;
}

h1 {
	position: absolute;
	bottom: 1rem;
	padding: 1rem;
	z-index: 2;
}

/* text */

.Project_Text {
	position: relative;
	min-height: 50vh;
	padding: 1rem;
	max-width: 60rem;
}
</style>
