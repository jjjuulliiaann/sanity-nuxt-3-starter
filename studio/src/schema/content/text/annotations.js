import { BiLinkAlt, BiPaperclip, BiLinkExternal } from "react-icons/bi/";
import { linkTargets } from "../../../utils/internalLinkTargets";

export const annotations = [
	{
		title: "External Link",
		name: "externalLink",
		type: "object",
		blockEditor: {
			icon: BiLinkExternal,
		},
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
				title: "Open in new tab?",
				name: "blank",
				type: "boolean",
			},
		],
	},
	{
		title: "Internal Link",
		name: "internalLink",
		type: "object",
		blockEditor: {
			icon: BiLinkAlt,
		},
		fields: [
			{
				title: "Internal Link",
				name: "linkTarget",
				type: "reference",
				to: linkTargets,
			},
		],
	},
	{
		title: "Download",
		name: "download",
		type: "file",
		blockEditor: {
			icon: BiPaperclip,
		},
	},
];
