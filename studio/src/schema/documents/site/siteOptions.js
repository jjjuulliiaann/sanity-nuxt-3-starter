import { BiCog } from "react-icons/bi/";

export default {
	title: "Options",
	name: "siteOptions",
	type: "document",
	icon: BiCog,
	__experimental_actions: ["update", "create", "delete", "publish"],
	groups: [
		{
			title: "SEO",
			name: "seo",
		},
	],
	fields: [
		{
			title: "Page Title",
			name: "name",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Header Title",
			name: "headerTitle",
			type: "string",
		},
		/* footer */
		{
			title: "Copyright",
			name: "copyrightText",
			type: "string",
		},
		/* seo */
		{
			title: "SEO",
			name: "seo",
			type: "seo",
			group: "seo",
		},
	],
	preview: {
		prepare({}) {
			return {
				title: "Options",
			};
		},
	},
};
