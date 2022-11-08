<template>
	<div class="container">
		<TheHeader />
		<NuxtPage />
		<TheFooter />
	</div>
</template>

<script setup>
import lazySizes from 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import { useMainStore } from '~/stores/MainStore'

// meta
const mainStore = useMainStore()
const route = useRoute()
const config = useRuntimeConfig()

useHead({
	titleTemplate: (title) =>
		title
			? `${mainStore.siteOptions?.name} - ${title}`
			: mainStore.siteOptions?.name,
	htmlAttrs: {
		lang: mainStore.siteOptions?.language ?? 'de',
	},
	meta: [
		{
			property: 'og:locale',
			content: mainStore.siteOptions?.language ?? 'de',
		},
		{
			property: 'og:title',
			content: mainStore.siteOptions?.name,
		},
		{
			property: 'og:site_name',
			content: mainStore.siteOptions?.name,
		},
		{
			property: 'og:url',
			content: `${config.BASE_URL}${route.fullPath}`,
		},
		{
			name: 'description',
			content: mainStore.siteOptions?.seo?.metaDescription,
		},
		{
			property: 'og:description',
			content: mainStore.siteOptions?.seo?.metaDescription,
		},
		{
			name: 'keywords',
			content: mainStore.siteOptions?.seo?.metaKeywords
				? mainStore.siteOptions?.seo?.metaKeywords.join(',')
				: '',
		},
		{
			property: 'og:image',
			content: mainStore.siteOptions?.seo?.ogImage?.asset
				? mainStore.siteOptions?.seo?.ogImage?.asset.url
				: '',
		},
		{
			property: 'og:image:width',
			content:
				mainStore.siteOptions?.seo?.ogImage?.asset?.metadata?.dimensions
					?.width ?? '',
		},
		{
			property: 'og:image:height',
			content:
				mainStore.siteOptions?.seo?.ogImage?.asset?.metadata?.dimensions
					?.height ?? '',
		},
		{
			property: 'og:image:type',
			content: mainStore.siteOptions?.seo?.ogImage?.asset?.mimeType ?? '',
		},
		{
			name: 'twitter:card',
			content: 'summary_large_image',
		},
		{
			name: 'twitter:title',
			content: mainStore.siteOptions?.name,
		},
		{
			name: 'twitter:description',
			content: mainStore.siteOptions?.seo?.metaDescription,
		},
		{
			name: 'twitter:image',
			content: mainStore.siteOptions?.seo?.ogImage?.asset
				? mainStore.siteOptions?.seo?.ogImage?.asset.url
				: '',
		},
	],
})
</script>
