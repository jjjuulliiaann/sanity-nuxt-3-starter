import { annotations } from "./text/annotations";

export default {
	title: "Content Text",
	name: "contentText",
	type: "array",
	of: [
		{
			type: "block",
			title: "Block",
			styles: [],
			lists: [],
			marks: {
				decorators: [],
				annotations,
			},
		},
	],
};
