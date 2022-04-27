<template>
	<main>
		<Counter />
		<h1 class="text-lg text--bold">{{ data.title }}</h1>
		<p class="text-base">Some text in font size base</p>
	</main>
</template>

<script setup>
const query = groq`*[_type == 'templateHome'][0]{
  ...
}`
const { data } = useSanityQuery(query)
</script>

<style scoped>
main {
	min-height: 100vh;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	padding: 1rem;
}

h1 {
	padding: 1rem 0;
}
</style>
