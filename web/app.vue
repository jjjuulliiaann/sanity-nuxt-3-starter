<template>
	<div class="container">
		<TheHeader />
		<NuxtPage />
		<TheFooter />
	</div>
</template>

<script setup>
// meta
const mainStore = useMainStore()
const route = useRoute()
const config = useRuntimeConfig()
const { $urlFor } = useNuxtApp()
const ogImageUrl = mainStore.siteOptions?.seo?.ogImage
	? $urlFor(mainStore.siteOptions?.seo?.ogImage).width(1200).url()
	: ''

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
			content: `${config.public.BASE_URL}${route.fullPath}`,
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
			content: ogImageUrl,
		},
		{
			property: 'og:image:width',
			content: ogImageUrl ? '1200' : '',
		},
		{
			property: 'og:image:height',
			content: ogImageUrl
				? Math.floor(
						1200 /
							(mainStore.siteOptions?.seo?.ogImage?.metadata
								?.dimensions?.aspectRatio ?? 1.5)
				  )
				: '',
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
			content: ogImageUrl,
		},
	],
})
</script>
