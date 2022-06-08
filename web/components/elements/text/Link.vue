<template>
	<NuxtLink
		:to="props.linkType === 'external' ? props.href : internalRoute"
		:target="props.blank && props.linkType === 'external' ? '_blank' : ''"
		:rel="props.blank && props.linkType === 'external' ? 'noopener' : ''"
		class="link"
	>
		<slot></slot>
	</NuxtLink>
</template>

<script setup>
const props = defineProps({
	linkType: {
		type: String,
		default: () => 'external',
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
