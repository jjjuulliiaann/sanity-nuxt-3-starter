import { renderHeadline } from "./renders.js";

// Define Hierarchie of text
export const styles = [
	{ title: "Regular", value: "normal" },
	{
		title: "Headline",
		value: "headline",
		blockEditor: {
			render: renderHeadline,
		},
	},
];
