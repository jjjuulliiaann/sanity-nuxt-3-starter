import {BiLinkAlt} from 'react-icons/bi/'

export default {
	title: 'External Link',
	name: 'link',
	type: 'object',
	icon: BiLinkAlt,
	initialValue: {
		blank: true,
	},
	fields: [
		{
			title: 'URL',
			name: 'href',
			type: 'url',
			validation: (Rule) =>
				Rule.uri({
					allowRelative: true,
					scheme: ['https', 'http', 'mailto', 'tel'],
				}),
		},
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Open in new tab?',
			name: 'blank',
			type: 'boolean',
		},
	],
	preview: {
		select: {
			url: 'href',
			title: 'title',
		},
		prepare({url, title}) {
			return {
				title: title ?? 'Untitled Link',
				subtitle: url,
				media: BiLinkAlt,
			}
		},
	},
}
