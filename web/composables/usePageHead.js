export default function ({ title, seo, titleImage }) {
	const titleString = unref(title)
	if (!titleString) {
		return
	}

	const mainStore = useMainStore()

	// create og image url
	const ogImage = seo?.ogImage?.asset
		? seo?.ogImage?.asset
		: titleImage?.asset
		? titleImage.asset
		: mainStore.siteOptions?.seo?.ogImage?.asset
	const { $urlFor } = useNuxtApp()
	const ogImageUrl = ogImage ? $urlFor(ogImage).width(1200).url() : ''

	// create long title
	const longTitleString = `${titleString} – ${mainStore.siteOptions?.name}`

	useHead({
		title: titleString,
		meta: [
			{
				property: 'og:title',
				content: longTitleString,
			},
			seo?.metaDescription
				? {
						name: 'description',
						content: seo?.metaDescription,
				  }
				: {},
			seo?.metaDescription
				? {
						property: 'og:description',
						content: seo.metaDescription,
				  }
				: {},
			seo?.metaKeywords
				? {
						name: 'keywords',
						content: seo?.metaKeywords.join(','),
				  }
				: {},
			ogImageUrl
				? {
						property: 'og:image',
						content: ogImageUrl,
				  }
				: {},
			ogImageUrl
				? {
						property: 'og:image:width',
						content: ogImageUrl ? '1200' : '',
				  }
				: {},
			ogImageUrl
				? {
						property: 'og:image:height',
						content: Math.floor(
							1200 /
								(ogImage?.metadata?.dimensions?.aspectRatio ??
									1.5)
						),
				  }
				: {},
			ogImageUrl
				? {
						property: 'og:image:type',
						content: ogImage?.mimeType ?? '',
				  }
				: {},
			{
				name: 'twitter:title',
				content: longTitleString,
			},
			seo?.metaDescription
				? {
						name: 'twitter:description',
						content: seo?.metaDescription,
				  }
				: {},
			ogImageUrl
				? {
						name: 'twitter:image',
						content: ogImageUrl,
				  }
				: {},
		],
	})
}
