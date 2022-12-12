<template>
	<figure>
		<ElementsMediaBaseImage
			:image="props.image"
			:svg-placeholder="props.svgPlaceholder"
			:lqip-placeholder="props.lqipPlaceholder"
			:alt="props.alt"
			:auto="props.auto"
			:fit="props.fit"
			:preload="props.preload"
			:use-object-position="props.useObjectPosition"
			:data-sizes="props.dataSizes"
			:data-parent-fit="props.dataParentFit"
			@lazyloaded="$emit('lazyloaded')"
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
	alt: {
		type: String,
		default: () => 'Missing alternative text',
	},
	svgPlaceholder: {
		type: Boolean,
		default: () => true,
	},
	lqipPlaceholder: {
		type: Boolean,
		default: () => false,
	},
	dataSizes: {
		type: String,
		default: () => 'auto',
	},
	dataParentFit: {
		type: String,
		default: () => '',
	},
	auto: {
		default: 'format',
		type: String,
	},
	fit: {
		default: 'max',
		type: String,
	},
	preload: {
		type: Boolean,
		default: () => false,
	},
	useObjectPosition: {
		type: Boolean,
		default: () => false,
	},
})
</script>
