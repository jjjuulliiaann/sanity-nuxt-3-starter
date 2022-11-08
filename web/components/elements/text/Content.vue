<template>
	<SanityContent :blocks="props.blocks" :serializers="serializers" />
</template>

<script setup>
import BaseFigure from '~/components/elements/media/BaseFigure'
import BaseLoop from '~/components/elements/media/BaseLoop'
import BaseVideoPlayer from '~/components/elements/media/BaseVideoPlayer'
import Link from '~/components/elements/text/Link'
import Element from '~/components/elements/text/Element'

const props = defineProps({
	blocks: {
		type: Array,
		default: () => [],
	},
})

const serializers = {
	types: {
		blockImage: BaseFigure,
		blockLoop: BaseLoop,
		blockVideo: BaseVideoPlayer,
	},
	marks: {
		externalLink: Link,
		internalLink: Link,
		underline: 'u',
		'strike-through': 's',
	},
	styles: {
		normal: 'p',
		headline: Element,
		small: Element,
	},
}
</script>
