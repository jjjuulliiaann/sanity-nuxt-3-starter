<template>
	<SanityBlocks :blocks="props.blocks" :serializers="serializers" />
</template>

<script setup>
import { SanityBlocks } from 'sanity-blocks-vue-component'
import Link from '~/components/elements/text/Link'

const props = defineProps({
	blocks: {
		type: Array,
		default: () => [],
	},
})

const serializers = {
	marks: {
		link: Link,
	},
	styles: {
		normal: 'p',
		small: 'span',
	},
}
</script>
