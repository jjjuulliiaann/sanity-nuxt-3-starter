import { BiLinkAlt, BiDirections, BiPaperclip } from 'react-icons/bi/'
import { linkTargets } from '@/utils/internalLinkTargets'

export const annotations = [
	{
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
				title: 'Open in new tab?',
				name: 'blank',
				type: 'boolean',
			},
		],
	},
	{
		title: 'Internal Link',
		name: 'internalLink',
		type: 'object',
		icon: BiDirections,
		fields: [
			{
				title: 'Internal Link',
				name: 'linkTarget',
				type: 'reference',
				to: linkTargets,
			},
		],
	},
	{
		title: 'Download',
		name: 'download',
		type: 'file',
		icon: BiPaperclip,
	},
]
