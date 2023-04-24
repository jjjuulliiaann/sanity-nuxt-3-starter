<template>
	<figure>
		<ElementsMediaBaseImage
			:image="props.image"
			:auto="props.auto"
			:fit="props.fit"
			:use-hotspot="props.useHotspot"
		/>
		<figcaption v-if="props.image?.caption" class="text-sm">
			{{ props.image.caption }}
		</figcaption>
	</figure>
</template>

<script setup>
const props = defineProps({
	image: {
		type: Object,
		default: () => undefined,
	},
	auto: {
		default: 'format',
		type: String,
	},
	fit: {
		default: 'max',
		type: String,
	},
	useHotspot: {
		type: Boolean,
		default: () => false,
	},
})
</script>
