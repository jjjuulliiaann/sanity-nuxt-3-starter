import {BiMapAlt} from 'react-icons/bi/'

export default {
	title: 'Navigation',
	name: 'siteNav',
	type: 'document',
	icon: BiMapAlt,
	fields: [
		{
			title: 'Main Navigation',
			name: 'navMain',
			type: 'array',
			layout: 'grid',
			editModal: 'popover',
			of: [
				{
					type: 'internalLink',
				},
				{
					type: 'link',
				},
			],
		},
		{
			title: 'Footer Navigation',
			name: 'navFooter',
			type: 'array',
			layout: 'grid',
			editModal: 'popover',
			of: [
				{
					type: 'internalLink',
				},
				{
					type: 'link',
				},
			],
		},
	],
	preview: {
		prepare({}) {
			return {
				title: 'Navigation',
			}
		},
	},
}
