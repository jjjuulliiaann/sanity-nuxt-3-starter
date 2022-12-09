import {BiImage} from 'react-icons/bi/'

export default {
	title: 'Image',
	name: 'pictureTitled',
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
		{
			title: 'Caption',
			name: 'caption',
			type: 'string',
		},
	],
	preview: {
		select: {
			asset: 'asset.url',
			caption: 'caption',
			dimensions: 'asset.metadata.dimensions',
			filename: 'asset.originalFilename',
		},
		prepare(selection) {
			const {asset, caption, dimensions, filename} = selection
			return {
				imageUrl: asset ? asset : '',
				title: filename ?? '',
				subtitle: caption
					? caption
					: dimensions
					? `(${dimensions.width}px × ${dimensions.height}px)`
					: '…',
			}
		},
	},
}
