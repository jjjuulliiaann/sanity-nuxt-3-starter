<template>
	<main>
		<p class="text-base"
			><span class="text_bold">Error {{ props.error.statusCode }}:</span>
			{{ props.error.message }}</p
		>
		<button @click="handleError" class="textlink">Back to Main</button>
	</main>
</template>

<script setup>
const props = defineProps({
	error: {
		type: Object,
		default: () => {},
	},
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>
main {
	position: relative;
	padding: 1rem;
}
</style>
