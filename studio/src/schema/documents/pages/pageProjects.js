import { BiFile } from "react-icons/bi/";
import { slugify, validateSlug } from "../../../utils/helperFunctions.js";

export default {
	title: "Page",
	name: "pageProjects",
	type: "document",
	icon: BiFile,
	__experimental_actions: ["update", "create", "delete", "publish"],
	groups: [
		{
			title: "Content",
			name: "content",
			default: true,
		},
		{
			title: "SEO",
			name: "seo",
		},
	],
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
			validation: (Rule) => Rule.required(),
			group: "content",
		},
		{
			title: "Featured Projects",
			name: "projects",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "project" }],
				},
			],
			validation: (Rule) => Rule.unique(),
			options: {
				editModal: "popover",
			},
			group: "content",
		},
		{
			title: "SEO",
			name: "seo",
			type: "seo",
			group: "seo",
		},
	],
};
