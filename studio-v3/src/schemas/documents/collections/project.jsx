import React from 'react'
import {BiBookAlt} from 'react-icons/bi/'
import {slugify, validateSlug} from '@/src/utils/helperFunctions.js'

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
			title: 'Test',
			type: 'internalLink',
			group: 'content',
			name: 'test',
		},
		{
			title: 'Content',
			name: 'content',
			type: 'editorTextMedia',
			group: 'content',
		},
		{
			title: 'Images',
			name: 'images',
			type: 'array',
			layout: 'grid',
			editModal: 'popover',
			of: [
				{
					title: 'Image',
					type: 'picture',
				},
				{
					title: 'Video Loop',
					type: 'video',
				},
			],
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
			image: 'images.0.asset.url',
		},
		prepare({title, image}) {
			let styles = {
				position: 'relative',
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				background: 'rgb(239,239,239)',
				objectFit: 'cover',
			}
			return {
				title: title ? title : '',
				media: image ? <img style={styles} src={image} /> : BiBookAlt,
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
