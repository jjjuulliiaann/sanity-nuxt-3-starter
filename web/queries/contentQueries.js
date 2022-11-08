import {
	contentBlockQuery,
	seoQuery,
	linkQuery,
	imageLoopArrayQuery,
} from '@/queries/helperQueries'

export const siteQuery = groq`{
	"siteOptions": *[_id == "siteOptions"] [0] {
		...,
		footerLinks[] {
			${linkQuery}
		},
		cookieText[]{
			${contentBlockQuery}
		},
		${seoQuery}
	},
	"siteNavigation": *[_id == "siteNavigation"] [0] {
		navMain[]{
			${linkQuery}
		}
	}
}`

export const homeQuery = groq`*[(
	_type == "pageHome")] | order(_updatedAt desc) [0]{
		...,
		content[] {
			${contentBlockQuery}
		},
}`

export const pageTextQuery = groq`
*[_type == 'pageText' && slug.current == $slug] | order(_updatedAt desc) [0]{
	...,
	content[] {
		${contentBlockQuery}
	},
	${seoQuery}
}
`

export const projectsQuery = groq`
*[(_type == "pageProjects")] | order(_updatedAt desc) [0]{
	...,
	projects[]->{title, slug, "firstImage": images[0]{..., asset->}},
	${seoQuery}
}
`

export const singleProjectQuery = groq`
*[_type == 'project' && slug.current == $slug] | order(_updatedAt desc) [0]{
	...,
	content[] {
		${contentBlockQuery}
	},
	images[]{
		${imageLoopArrayQuery}
	},
	${seoQuery}
}
`
