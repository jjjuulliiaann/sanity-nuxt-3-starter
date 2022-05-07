import { BiHome } from "react-icons/bi/";

export default {
	title: "Home",
	name: "pageHome",
	type: "document",
	icon: BiHome,
	__experimental_actions: ["update", "create", "delete", "publish"],
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
		},
		{
			title: "Content",
			name: "content",
			type: "contentText",
		},
	],
	preview: {
		prepare({}) {
			return {
				title: "Home",
			};
		},
	},
};
