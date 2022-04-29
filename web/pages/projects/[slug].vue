<template>
	<main class="project">
		<section class="project__titleimage">
			<h1 class="text-lg text--bold text--white">{{ data.title }}</h1>
			<ElementsMediaBaseImage
				:image="data.images[0]"
				class="titleimage"
			/>
		</section>

		<section class="project__text"></section>
	</main>
</template>

<script setup>
import { singleProjectQuery } from '@/queries/contentQueries'

const route = useRoute()

// get data
const { data } = await useSanityQuery(singleProjectQuery, {
	slug: route.params.slug,
})
</script>

<style scoped>
.project {
	position: relative;
}

.project__titleimage {
	position: relative;
	width: 100%;
	top: 0;

	@media (--w-tablet-1) {
		top: calc(var(--header-height) * -1);
	}
}

.titleimage {
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

.project__text {
	min-height: 50vh;
}

.blockcontent {
	padding: 2rem 0;
}
</style>
