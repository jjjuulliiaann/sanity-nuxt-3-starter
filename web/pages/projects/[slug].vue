<template>
	<main class="textpage">Projekt: {{ slug }}</main>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug
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
