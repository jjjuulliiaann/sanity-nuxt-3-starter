<template>
	<h2 v-if="props.style === 'headline'" class="text-lg"><slot /></h2>
	<p v-else-if="props.style === 'small'" class="text-sm"><slot /></p>
	<p v-else><slot /></p>
</template>

<script setup>
const props = defineProps({
	style: {
		type: String,
		default: () => '',
	},
	children: {
		type: Object,
		default: () => {},
	},
})
</script>
