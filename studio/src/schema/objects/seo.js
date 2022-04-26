export default {
	title: "SEO",
	name: "seo",
	type: "object",
	fields: [
		{
			title: "Meta Description",
			name: "metaDescription",
			type: "text",
		},
		{
			title: "Meta Keywords",
			name: "metaKeywords",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
			},
		},
		{
			title: "OG Image",
			name: "ogImage",
			type: "image",
			description: "1200px x 630px recommended",
		},
	],
};
