<template>
	<main class="textpage">
		<h1 class="text-lg text--bold">{{ data.title }}</h1>
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
.textpage {
	position: relative;
	padding: 1rem;
}

.blockcontent {
	padding: 2rem 0;
}
</style>
