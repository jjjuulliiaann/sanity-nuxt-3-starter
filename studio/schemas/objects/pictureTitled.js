import { BiImage } from 'react-icons/bi/'

export default {
	title: 'Image',
	name: 'pictureTitled',
	type: 'image',
	icon: BiImage,
	options: {
		hotspot: true,
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
			filename: 'asset.originalFilename',
			caption: 'caption',
			dimensions: 'asset.metadata.dimensions',
			image: 'asset',
		},
		prepare(selection) {
			const { filename, caption, dimensions, image } = selection
			return {
				title: filename ?? '',
				subtitle: caption
					? caption
					: dimensions
					? `(${dimensions.width}px × ${dimensions.height}px)`
					: '…',
				media: image,
			}
		},
	},
}
