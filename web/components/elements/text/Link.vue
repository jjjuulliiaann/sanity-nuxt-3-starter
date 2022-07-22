<template>
	<NuxtLink
		:to="props.linkType === 'externalLink' ? props.href : internalRoute"
		:target="
			props.blank && props.linkType === 'externalLink' ? '_blank' : ''
		"
		:rel="
			props.blank && props.linkType === 'externalLink' ? 'noopener' : ''
		"
		class="link"
		><slot></slot
	></NuxtLink>
</template>

<script setup>
const props = defineProps({
	linkType: {
		type: String,
		default: () => 'externalLink',
	},
	href: {
		type: String,
		default: () => '',
	},
	blank: {
		type: Boolean,
		default: () => false,
	},
	route: {
		type: String,
		default: () => '',
	},
	slug: {
		type: String,
		default: () => '',
	},
})

const internalRoute = computed(() => {
	return {
		name: props.route ?? 'index',
		params: props.slug ? { slug: props.slug } : {},
	}
})
</script>
