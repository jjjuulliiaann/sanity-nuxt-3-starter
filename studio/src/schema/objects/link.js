import { BiFile, BiLink, BiHome, BiBookAlt } from "react-icons/bi/";

export default {
	title: "Link",
	name: "link",
	type: "object",
	initialValue: {
		linkType: "external",
	},
	fields: [
		{
			title: "Type",
			name: "linkType",
			type: "string",
			options: {
				list: [
					{ title: "Extern", value: "external" },
					{ title: "Internal", value: "internal" },
				],
				layout: "radio",
			},
		},
		{
			title: "URL",
			name: "href",
			type: "url",
			hidden: ({ parent }) => parent?.linkType !== "external",
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
			hidden: ({ parent }) => parent?.linkType !== "external",
		},
		{
			title: "Open in new tab?",
			name: "blank",
			type: "boolean",
			hidden: ({ parent }) => parent?.linkType !== "external",
		},
		{
			title: "Internal Link",
			name: "internalLink",
			type: "reference",
			hidden: ({ parent }) => parent?.linkType !== "internal",
			validation: (Rule) =>
				Rule.custom((internalLink, context) => {
					if (
						context.parent.linkType === "external" ||
						internalLink
					) {
						return true;
					} else {
						return "A link target is required.";
					}
				}),
			to: [
				{ type: "templateHome" },
				{ type: "templateText" },
				{ type: "templateProjects" },
				{ type: "project" },
			],
		},
	],
	preview: {
		select: {
			url: "href",
			internalTitle: "internalLink.title",
			internalLink: "internalLink",
			internalSlug: "internalLink.slug.current",
			externalTitle: "title",
			linkType: "linkType",
			linkTemplate: "internalLink._type",
		},
		prepare({
			url,
			internalTitle,
			internalLink,
			internalSlug,
			externalTitle,
			linkType,
			linkTemplate,
		}) {
			const previewSymbol = {
				templateHome: BiHome,
				templateText: BiFile,
				templateProjects: BiBookAlt,
				project: BiBookAlt,
			};
			return {
				title:
					linkType === "external"
						? externalTitle
							? externalTitle
							: "Untitled Link"
						: internalLink && internalTitle
						? internalSlug
							? internalTitle
							: "Home"
						: "Untitled Link",
				subtitle: linkType === "external" ? url : "",
				media:
					linkType === "external"
						? BiLink
						: previewSymbol[linkTemplate]
						? previewSymbol[linkTemplate]
						: BiFile,
			};
		},
	},
};
