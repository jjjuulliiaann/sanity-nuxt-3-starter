<template>
	<div class="container">
		<TheHeader />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<TheFooter />
	</div>
</template>

<script setup>
import { useContentStore } from '~/stores/ContentStore'

// meta
const contentStore = useContentStore()
const route = useRoute()
const config = useRuntimeConfig()

useHead({
	titleTemplate: (title) => `${contentStore.siteOptions?.name} - ${title}`,
	htmlAttrs: {
		lang: contentStore.siteOptions?.language ?? 'de',
	},
	meta: [
		{
			property: 'og:locale',
			content: contentStore.siteOptions?.language ?? 'de',
		},
		{
			property: 'og:title',
			content: contentStore.siteOptions?.name,
		},
		{
			property: 'og:site_name',
			content: contentStore.siteOptions?.name,
		},
		{
			property: 'og:url',
			content: `${config.BASE_URL}${route.fullPath}`,
		},
		{
			name: 'description',
			content: contentStore.siteOptions?.seo?.metaDescription,
		},
		{
			property: 'og:description',
			content: contentStore.siteOptions?.seo?.metaDescription,
		},
		{
			name: 'keywords',
			content: contentStore.siteOptions?.seo?.metaKeywords
				? contentStore.siteOptions?.seo?.metaKeywords.join(',')
				: '',
		},
		{
			property: 'og:image',
			content: contentStore.siteOptions?.seo?.ogImage?.asset
				? contentStore.siteOptions?.seo?.ogImage?.asset.url
				: '',
		},
		{
			property: 'og:image:width',
			content:
				contentStore.siteOptions?.seo?.ogImage?.asset?.metadata
					?.dimensions?.width ?? '',
		},
		{
			property: 'og:image:height',
			content:
				contentStore.siteOptions?.seo?.ogImage?.asset?.metadata
					?.dimensions?.height ?? '',
		},
		{
			property: 'og:image:type',
			content:
				contentStore.siteOptions?.seo?.ogImage?.asset?.mimeType ?? '',
		},
		{
			name: 'twitter:card',
			content: 'summary_large_image',
		},
		{
			name: 'twitter:title',
			content: contentStore.siteOptions?.name,
		},
		{
			name: 'twitter:description',
			content: contentStore.siteOptions?.seo?.metaDescription,
		},
		{
			name: 'twitter:image',
			content: contentStore.siteOptions?.seo?.ogImage?.asset
				? contentStore.siteOptions?.seo?.ogImage?.asset.url
				: '',
		},
	],
})
</script>
