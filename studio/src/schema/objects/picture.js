export default {
	title: "Image",
	name: "picture",
	type: "image",
	options: {
		hotspot: true,
		metadata: ["lqip"],
	},
	fields: [
		{
			name: "alt",
			type: "string",
			title: "Alternative Text",
			description: "Important for SEO and Accessibility.",
			options: {
				isHighlighted: true,
			},
		},
	],
	preview: {
		select: {
			asset: "asset.url",
			title: "title",
			dimensions: "asset.metadata.dimensions",
			filename: "asset.originalFilename",
		},
		prepare(selection) {
			const { asset, title, dimensions, filename } = selection;
			return {
				imageUrl: asset ? asset : "",
				title: title ? title : filename,
				subtitle: dimensions
					? `${dimensions.width}px × ${dimensions.height}px`
					: "…",
			};
		},
	},
};
