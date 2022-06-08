import { renderHeadline, renderSmall } from "./renders.js";

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
	{
		title: "Small",
		value: "small",
		blockEditor: {
			render: renderSmall,
		},
	},
];
