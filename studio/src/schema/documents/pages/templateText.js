import { BiFile } from "react-icons/bi/";
import { slugify, validateSlug } from "../../../utils/helperFunctions.js";

export default {
	title: "Pages",
	name: "templateText",
	type: "document",
	icon: BiFile,
	__experimental_actions: ["update", "create", "delete", "publish"],
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
			options: {
				source: "title",
				slugify: slugify,
			},
			validation: validateSlug,
		},
		{
			title: "Content",
			name: "content",
			type: "contentParagraph",
		},
		{
			title: "SEO",
			name: "seo",
			type: "seo",
		},
	],
};
