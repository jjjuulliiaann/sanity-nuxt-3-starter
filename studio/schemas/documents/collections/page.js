import {BiFile} from 'react-icons/bi/'
import {slugify, validateSlug} from '@/utils/helperFunctions.js'

export default {
	title: 'Page',
	name: 'page',
	type: 'document',
	icon: BiFile,
	groups: [
		{
			title: 'Content',
			name: 'content',
			default: true,
		},
		{
			title: 'SEO',
			name: 'seo',
		},
	],
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
			group: 'content',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				slugify: slugify,
			},
			validation: validateSlug,
			group: 'content',
		},
		{
			title: 'Content',
			name: 'content',
			type: 'editorTextMedia',
			group: 'content',
		},
		{
			title: 'SEO',
			name: 'seo',
			type: 'seo',
			group: 'seo',
		},
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({title}) {
			return {
				title: title ? title : '',
				media: BiFile,
			}
		},
	},
}
