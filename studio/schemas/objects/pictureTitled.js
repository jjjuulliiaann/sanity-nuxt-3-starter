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
			title: 'Caption',
			name: 'caption',
			type: 'text',
			rows: 3,
		},
		{
			title: 'Alternative Text',
			name: 'alt',
			type: 'string',
			description:
				'Describes the appearance or function of the image. Alt text is used by visually impaired users and is indexed by search engine bots.',
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
