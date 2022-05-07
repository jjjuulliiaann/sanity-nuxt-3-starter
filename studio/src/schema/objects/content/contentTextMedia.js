import { styles } from "./text/styles";
import { decorators } from "./text/decorators";
import { annotations } from "./text/annotations";

export default {
	title: "Content",
	name: "contentTextMedia",
	type: "array",
	of: [
		{
			type: "block",
			styles,
			lists: [
				{ title: "Bullet", value: "bullet" },
				{ title: "Number", value: "number" },
			],
			marks: {
				decorators,
				annotations,
			},
		},
		{ type: "blockImage" },
		{ type: "blockLoop" },
		{ type: "blockVideo" },
	],
};
