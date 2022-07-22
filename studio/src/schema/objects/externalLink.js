import { BiLinkExternal } from "react-icons/bi/";

export default {
	title: "External Link",
	name: "externalLink",
	type: "object",
	icon: BiLinkExternal,
	initialValue: {
		blank: false,
	},
	fields: [
		{
			title: "URL",
			name: "href",
			type: "url",
			validation: (Rule) =>
				Rule.uri({
					allowRelative: true,
					scheme: ["https", "http", "mailto", "tel"],
				}),
		},
		{
			title: "Title",
			name: "title",
			type: "string",
		},
		{
			title: "Open in new tab?",
			name: "blank",
			type: "boolean",
		},
	],
	preview: {
		select: {
			url: "href",
			title: "title",
		},
		prepare({ url, title }) {
			return {
				title: title ? title : "Untitled Link",
				subtitle: url,
			};
		},
	},
};
