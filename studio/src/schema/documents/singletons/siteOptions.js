import { BiCog } from "react-icons/bi/";

export default {
	title: "Options",
	name: "siteOptions",
	type: "document",
	icon: BiCog,
	__experimental_actions: ["update", "create", "delete", "publish"],
	groups: [
		{
			title: "Cookies",
			name: "cookies",
		},
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
		{
			title: "Footer Links",
			name: "footerLinks",
			type: "array",
			layout: "grid",
			editModal: "popover",
			of: [
				{
					type: "link",
				},
			],
		},
		/* cookies */
		{
			title: "Cookie Text",
			name: "cookieText",
			type: "contentParagraph",
			group: "cookies",
		},
		{
			title: "Cookie Button",
			name: "cookieButton",
			type: "string",
			group: "cookies",
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
