import {BiGridAlt} from 'react-icons/bi/'

export default {
	title: 'Projects Page',
	name: 'pageProjects',
	type: 'document',
	icon: BiGridAlt,
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
			title: 'SEO',
			name: 'seo',
			type: 'seo',
			group: 'seo',
		},
	],
	preview: {
		prepare() {
			return {
				title: 'Projects Page',
				media: BiGridAlt,
			}
		},
	},
}
