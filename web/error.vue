<template>
	<main>
		<p class="text-">{{ props.error.message }}</p>
		<button @click="handleError">Back to Main</button>
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
