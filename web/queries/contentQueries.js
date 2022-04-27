import { contentBlockQuery, seoQuery } from '@/queries/helperQueries'

export const slugsQuery = groq`{
	"pages": *[_type == "templateText"].slug.current,
	"projects": *[_type == "project"].slug.current,
}`

export const homeQuery = groq`*[(
	_type == "templateHome")] | order(_updatedAt desc)[0]{
		...,
		content[] {
			${contentBlockQuery}
		},
}`

export const templateTextQuery = groq`
*[_type == 'templateText' && slug.current == $slug] | order(_updatedAt desc) [0]{
	...,
	content[] {
		${contentBlockQuery}
	},
	${seoQuery}
}
`
