<template>
	<img
		:src="placeholderSrc"
		:data-src="imageSrc"
		:data-srcset="imageSrcSet"
		:data-sizes="props.dataSizes"
		:data-parent-fit="props.dataParentFit"
		:alt="altText"
		:width="cropWidth"
		:height="cropHeight"
		:style="objectPositionStyle"
		:class="[orientation, { lazypreload: props.preload }]"
		class="lazyload"
		@lazyloaded="$emit('lazyloaded')"
	/>
</template>

<script setup>
const { $urlFor } = useNuxtApp()

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
})

const placeholderSrc = computed(() => {
	const svgColor = 'rgb(230,230,230)'
	return props.svgPlaceholder
		? `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${cropWidth.value} ${cropHeight.value}'%3E%3Crect width='${cropWidth.value}' height='${cropHeight.value}' fill='${svgColor}' /%3E%3C/svg%3E`
		: props.lqipPlaceholder
		? props.image?.asset?.metadata?.lqip
		: ''
})

const imageSrc = computed(() =>
	props.image?.asset
		? $urlFor(props.image).width(1000).auto(props.auto).fit(props.fit)
		: ''
)

const imageSrcSet = computed(() => {
	let srcSet = ''
	const widths = [250, 375, 500, 750, 1000, 1400, 2000, 3000]
	widths.forEach((width, index) => {
		if (!props.image?.asset) {
			return false
		}
		srcSet +=
			$urlFor(props.image).width(width).auto(props.auto).fit(props.fit) +
			` ${width}w`
		if (index + 1 !== widths.length) {
			srcSet += ','
		}
		srcSet += ' '
	})
	return srcSet
})

const cropWidth = computed(() => {
	const originalWidth = props.image?.asset?.metadata?.dimensions?.width
	const cropLeft = props.image?.crop?.left ?? 0
	const cropRight = props.image?.crop?.right ?? 0

	return originalWidth - cropLeft * originalWidth - cropRight * originalWidth
})

const cropHeight = computed(() => {
	const originalHeight = props.image?.asset?.metadata?.dimensions?.height
	const cropTop = props.image?.crop?.top ?? 0
	const cropBottom = props.image?.crop?.bottom ?? 0
	return (
		originalHeight - cropTop * originalHeight - cropBottom * originalHeight
	)
})

const orientation = computed(() => {
	if (!cropWidth || !cropHeight) return undefined

	return cropWidth.value > cropHeight.value
		? 'landscape'
		: cropWidth.value < cropHeight.value
		? 'portrait'
		: 'square'
})

const altText = computed(() => props.image?.alt ?? props.alt)

const objectPositionStyle = computed(() => {
	return props.useObjectPosition && props.image?.hotspot
		? {
				'object-position': `${[
					props.image?.hotspot.x,
					props.image?.hotspot.y,
				]
					.map((value) => `${(value * 100).toFixed(2)}%`)
					.join(' ')}`,
		  }
		: undefined
})
</script>

<style scoped>
.lazyload,
.lazyloading {
	opacity: 0;
}

.lazyloaded {
	opacity: 1;
	transition: opacity 0.75s;
}
</style>
