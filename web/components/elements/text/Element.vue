<template>
	<h1 v-if="props.style === 'h1'" class="text-base"><slot /></h1>
	<h2 v-else-if="props.style === 'h2'" class="text-base"><slot /></h2>
	<h3 v-else-if="props.style === 'h3'" class="text-base"><slot /></h3>
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
