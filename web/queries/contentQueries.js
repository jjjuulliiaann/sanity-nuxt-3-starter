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
	"siteNav": *[_id == "siteNav"] [0] {
		navMain[]{
			${linkQuery}
		}
	},
	"slugs": {
		"pages": *[_type == "page"].slug.current,
		"projects": *[_type == "project"].slug.current,
	}
}`

export const homeQuery = groq`*[(
	_type == "pageHome")] | order(_updatedAt desc) [0]{
		...,
		projects[]->{_id, title, location, slug, titleImage{..., asset->}},
}`

export const pageQuery = groq`
*[_type == 'page' && slug.current == $slug] | order(_updatedAt desc) [0]{
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
	projects[]->{title, slug, titleImage{..., asset->}},
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
