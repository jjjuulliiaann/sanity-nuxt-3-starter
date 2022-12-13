import {BiBookAlt} from 'react-icons/bi/'
import {slugify, validateSlug} from '@/utils/helperFunctions.js'

export default {
	title: 'Project',
	name: 'project',
	type: 'document',
	icon: BiBookAlt,
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
			title: 'Subtitle',
			name: 'subtitle',
			type: 'string',
			validation: (Rule) => Rule.required(),
			group: 'content',
		},
		{
			title: 'Photographer',
			name: 'photographer',
			type: 'object',
			fields: [
				{
					title: 'Name',
					name: 'name',
					type: 'string',
				},
				{
					title: 'Website',
					name: 'website',
					type: 'url',
				},
			],
			options: {
				columns: 2,
			},
			group: 'content',
		},
		{
			title: 'Content',
			name: 'content',
			type: 'editorTextMedia',
			group: 'content',
		},
		{
			title: 'Title Image',
			name: 'titleImage',
			type: 'picture',
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
			titleImage: 'titleImage',
		},
		prepare({title, titleImage}) {
			return {
				title: title ?? '',
				media: titleImage ?? BiBookAlt,
			}
		},
	},

	orderings: [
		{
			title: 'Title',
			name: 'titleAsc',
			by: [
				{field: 'title', direction: 'asc'},
				{field: '_updatedAt', direction: 'desc'},
			],
		},
	],
}
