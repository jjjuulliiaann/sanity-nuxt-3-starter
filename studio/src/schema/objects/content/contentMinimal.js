import { annotations } from "./text/annotations";

export default {
	title: "Content",
	name: "contentMinimal",
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
