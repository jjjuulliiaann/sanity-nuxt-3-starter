import { useContentStore } from '~/stores/ContentStore'

export default function (title, seo) {
	const titleString = unref(title)
	if (!titleString) return

	const contentStore = useContentStore()
	const route = useRoute()
	const config = useRuntimeConfig()

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
				content: seo?.ogImage?.asset
					? seo?.ogImage?.asset.url
					: contentStore.siteOptions?.seo?.ogImage?.asset?.url,
			},
			{
				property: 'og:image:width',
				content:
					seo?.ogImage?.asset?.metadata?.dimensions?.width ??
					contentStore.siteOptions?.seo?.ogImage?.asset?.metadata
						?.dimensions?.width,
			},
			{
				property: 'og:image:height',
				content:
					seo?.ogImage?.asset?.metadata?.dimensions?.height ??
					contentStore.siteOptions?.seo?.ogImage?.asset?.metadata
						?.dimensions?.height,
			},
			{
				property: 'og:image:type',
				content:
					seo?.ogImage?.asset?.metadata?.mimeType ??
					contentStore.siteOptions?.seo?.ogImage?.asset?.mimeType,
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
				content: seo?.ogImage?.asset
					? seo?.ogImage?.asset.url
					: contentStore.siteOptions?.seo?.ogImage?.asset?.url,
			},
		],
	})
}
