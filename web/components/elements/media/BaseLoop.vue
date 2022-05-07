<template>
	<figure>
		<span>Base Loop</span>
		{{ props.video }}
	</figure>
</template>

<script setup>
const props = defineProps({
	video: {
		type: Object,
		default: () => undefined,
	},
})
</script>
