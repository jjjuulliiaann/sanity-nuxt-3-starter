import { useContentStore } from '~/stores/ContentStore'

export default function ({ title, seo, titleImage }) {
	const titleString = unref(title)
	if (!titleString) return

	const contentStore = useContentStore()
	const route = useRoute()
	const config = useRuntimeConfig()

	// create og image url
	const shareImage = seo?.ogImage?.asset
		? seo?.ogImage?.asset
		: titleImage?.asset
		? titleImage.asset
		: contentStore.siteOptions?.seo?.ogImage?.asset

	const { $urlFor } = useNuxtApp()
	const shareImageUrl = computed(() =>
		shareImage ? $urlFor(shareImage).width(1200).url() : ''
	)

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
					contentStore.siteOptions?.seo?.metaDescription ??
					'',
			},
			{
				property: 'og:description',
				content:
					seo?.metaDescription ??
					contentStore.siteOptions?.seo?.metaDescriptio ??
					'',
			},
			{
				name: 'keywords',
				content: seo?.metaKeywords
					? seo?.metaKeywords.join(',')
					: contentStore.siteOptions?.seo?.metaKeywords
					? contentStore.siteOptions?.seo?.metaKeywords?.join(',')
					: '',
			},
			{
				property: 'og:image',
				content: shareImageUrl?.value,
			},
			{
				property: 'og:image:width',
				content: '1200',
			},
			{
				property: 'og:image:height',
				content: Math.floor(
					1200 /
						(shareImage?.metadata?.dimensions?.aspectRatio ?? 1.5)
				),
			},
			{
				property: 'og:image:type',
				content: shareImage?.mimeType ?? '',
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
				content: shareImageUrl.value,
			},
		],
	})
}
