import {BiImage} from 'react-icons/bi/'

export default {
	title: 'Image',
	name: 'picture',
	type: 'image',
	icon: BiImage,
	options: {
		hotspot: true,
		metadata: ['lqip'],
	},
	fields: [
		{
			title: 'Alternative Text',
			name: 'alt',
			type: 'string',
			description: 'Important for SEO and Accessibility.',
		},
	],
	preview: {
		select: {
			asset: 'asset.url',
			dimensions: 'asset.metadata.dimensions',
			filename: 'asset.originalFilename',
		},
		prepare(selection) {
			const {asset, title, dimensions, filename} = selection
			return {
				imageUrl: asset ? asset : '',
				title: filename,
				subtitle: dimensions ? `(${dimensions.width}px × ${dimensions.height}px)` : '…',
			}
		},
	},
}
