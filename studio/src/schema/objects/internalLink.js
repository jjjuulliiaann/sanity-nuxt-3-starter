import { BiBookAlt, BiFile, BiLinkAlt, BiHome } from "react-icons/bi/";
import { linkTargets } from "../../utils/internalLinkTargets";

export default {
	title: "Internal Link",
	name: "internalLink",
	type: "object",
	icon: BiLinkAlt,
	fields: [
		{
			title: "Internal Link",
			name: "linkTarget",
			type: "reference",
			to: linkTargets,
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Title",
			description: "Keep empty to use Internal link title",
			name: "title",
			type: "string",
		},
	],
	preview: {
		select: {
			title: "title",
			targetTitle: "linkTarget.title",
			targetTemplate: "linkTarget._type",
		},
		prepare({ title, targetTitle, targetTemplate }) {
			const previewSymbol = {
				pageHome: BiHome,
				pageProjects: BiBookAlt,
				project: BiBookAlt,
				pageText: BiFile,
			};
			return {
				title: title ? title : targetTitle,
				media: previewSymbol[targetTemplate]
					? previewSymbol[targetTemplate]
					: BiFile,
			};
		},
	},
};
