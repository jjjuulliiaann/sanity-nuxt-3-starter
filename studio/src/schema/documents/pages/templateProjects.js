import { BiFile } from "react-icons/bi/";
import { slugify, validateSlug } from "../../../utils/helperFunctions.js";

export default {
	title: "Page",
	name: "templateProjects",
	type: "document",
	icon: BiFile,
	__experimental_actions: ["update", "create", "delete", "publish"],
	groups: [
		{
			title: "SEO",
			name: "seo",
		},
	],
	initialValue: {
		slug: "projects",
	},
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Slug",
			name: "slug",
			type: "slug",
			validation: validateSlug,
			readOnly: true,
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
		},
		{
			title: "SEO",
			name: "seo",
			type: "seo",
			group: "seo",
		},
	],
};
