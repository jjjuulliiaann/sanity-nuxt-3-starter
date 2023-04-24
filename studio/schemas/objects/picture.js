import { BiImage } from 'react-icons/bi/'

export default {
	title: 'Image',
	name: 'picture',
	type: 'image',
	icon: BiImage,
	options: {
		hotspot: true,
	},
	fields: [
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
			dimensions: 'asset.metadata.dimensions',
			image: 'asset',
		},
		prepare(selection) {
			const { filename, dimensions, image } = selection
			return {
				title: filename,
				subtitle: dimensions ? `(${dimensions.width}px × ${dimensions.height}px)` : '…',
				media: image,
			}
		},
	},
}
