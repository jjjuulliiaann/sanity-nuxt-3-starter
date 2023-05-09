<template>
	<UnLazyImage
		:blurhash="blurhash"
		:placeholder-ratio="cropWidth / cropHeight"
		:src="singleImageSource"
		:sources="imageSources"
		:width="cropWidth"
		:height="cropHeight"
		:alt="props.image.alt"
		:style="[hotspotStyle, aspectRatioStyle]"
		:class="orientation"
		auto-sizes
	/>
</template>

<script setup>
const { $urlFor } = useNuxtApp()

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

const blurhash = computed(() => props.image?.asset?.metadata?.blurHash ?? '')

const singleImageSource = computed(() =>
	props.image
		? `${$urlFor(props.image).width(1000).auto(props.auto).fit(props.fit)}`
		: ''
)

const imageSources = computed(() => [
	{
		type: 'image/webp',
		srcSet: createSrcSet(props.image, 'webp'),
	},
	{
		type: 'image/jpeg',
		srcSet: createSrcSet(props.image),
	},
])

const createSrcSet = (image, fileFormat = 'jpeg') => {
	if (!image || !image.asset) {
		return ''
	}
	const widths = [250, 375, 500, 750, 1000, 1400, 2000, 3000]
	let srcSet = ''
	widths.forEach((width, index) => {
		if (!image?.asset) {
			return false
		}
		srcSet +=
			$urlFor(image)
				.format(fileFormat)
				.width(width)
				.auto(props.auto)
				.fit(props.fit) + ` ${width}w`
		if (index + 1 !== widths.length) {
			srcSet += ','
		}
		srcSet += ' '
	})
	return srcSet
}

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

/* use the hotspot values defined in Sanity to align the image inside the element box. 
Most useful if the image should fill its container (with "object-fit: cover")  */
const hotspotStyle = computed(() => {
	return props.useHotspot && props.image?.hotspot
		? {
				'object-position': `${[
					props.image?.hotspot.x,
					props.image?.hotspot.y,
				]
					.map((value) => `${(value * 100).toFixed(2)}%`)
					.join(' ')}`,
		  }
		: undefined
		? `${[props.image?.hotspot.x, props.image?.hotspot.y]
				.map((value) => `${(value * 100).toFixed(2)}%`)
				.join(' ')}`
		: ''
})

/* is helpful to avoid wrong aspect ratio when the blurry placeholder is visible */
const aspectRatioStyle = computed(() => {
	return !props.useHotspot
		? {
				aspectRatio: `${cropWidth.value} / ${cropHeight.value}`,
		  }
		: {}
})
</script>

<style scoped>
picture,
picture:deep(img) {
	display: block;
}
</style>
