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
		<figcaption v-if="props.caption">{{ props.caption }}</figcaption>
	</figure>
</template>

<script setup>
const props = defineProps({
	image: {
		type: Object,
		default: () => undefined,
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
	alt: {
		type: String,
		default: 'Missing alternative text',
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
	caption: {
		type: String,
		default: () => '',
	},
})
</script>
