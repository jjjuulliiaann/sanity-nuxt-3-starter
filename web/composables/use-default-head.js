import { useContentStore } from '~/stores/ContentStore'

export default function (title, seo, titleImage) {
	const titleString = unref(title)
	if (!titleString) return

	const contentStore = useContentStore()
	const route = useRoute()
	const config = useRuntimeConfig()

	const shareImage = seo?.ogImage?.asset
		? seo?.ogImage?.asset
		: titleImage?.asset
		? titleImage.asset
		: contentStore.siteOptions?.seo?.ogImage?.asset

	useHead({
		title: titleString,
		meta: [
			{
				property: 'og:title',
				content: `${titleString} – ${contentStore.siteOptions?.name}`,
			},
			{
				property: 'og:url',
				content: `${config.BASE_URL}${route.fullPath}`,
			},
			{
				name: 'description',
				content:
					seo?.metaDescription ??
					contentStore.siteOptions?.seo?.metaDescription,
			},
			{
				property: 'og:description',
				content:
					seo?.metaDescription ??
					contentStore.siteOptions?.seo?.metaDescription,
			},
			{
				name: 'keywords',
				content: seo?.metaKeywords
					? seo?.metaKeywords.join(',')
					: contentStore.siteOptions?.seo?.metaKeywords?.join(','),
			},
			{
				property: 'og:image',
				content: shareImage?.url,
			},
			{
				property: 'og:image:width',
				content: shareImage?.metadata?.dimensions?.width,
			},
			{
				property: 'og:image:height',
				content: shareImage?.metadata?.dimensions?.height,
			},
			{
				property: 'og:image:type',
				content: shareImage?.mimeType,
			},
			{
				name: 'twitter:title',
				content: `${titleString} – ${contentStore.siteOptions?.name}`,
			},
			{
				name: 'twitter:description',
				content:
					seo?.metaDescription ??
					contentStore.siteOptions?.seo?.metaDescription,
			},
			{
				name: 'twitter:image',
				content: shareImage?.url,
			},
		],
	})
}
