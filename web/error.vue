<template>
	<div class="container">
		<TheHeader @click="handleError" />

		<main>
			<p class="text-lg"
				><span class="text_bold"
					>Error {{ props.error.statusCode }}:</span
				>
				{{ props.error.message }}</p
			>
			<button @click="handleError" class="text-base text_bold textlink"
				>Back to Main</button
			>
		</main>
	</div>
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
}

button {
	margin-top: 2rem;
}

.TheHeader:deep(.TheHeader_NavButton) {
	display: none;
}
</style>
