import { BiFile } from "react-icons/bi/";
import { slugify, validateSlug } from "../../../utils/helperFunctions.js";

export default {
	title: "Pages",
	name: "pageText",
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
			title: "Slug",
			name: "slug",
			type: "slug",
			options: {
				source: "title",
				slugify: slugify,
			},
			validation: validateSlug,
			group: "content",
		},
		{
			title: "Content",
			name: "content",
			type: "contentText",
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
