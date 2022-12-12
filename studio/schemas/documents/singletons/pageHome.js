import {BiHome} from 'react-icons/bi/'

export default {
	title: 'Home',
	name: 'pageHome',
	type: 'document',
	icon: BiHome,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Featured Projects',
			name: 'projects',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{type: 'project'}],
					options: {
						disableNew: true,
					},
				},
			],

			validation: (Rule) => Rule.unique(),
		},
	],
	preview: {
		prepare() {
			return {
				title: 'Home',
				media: BiHome,
			}
		},
	},
}
