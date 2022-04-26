import { BiImage } from "react-icons/bi/";
import { PreviewBlockImage } from "./previews";

export default {
	title: "Image",
	name: "blockImage",
	icon: BiImage,
	type: "object",
	fields: [
		{
			title: "Image",
			name: "image",
			type: "picture",
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			image: "image.asset",
			title: "image.asset.originalFilename",
		},
		component: PreviewBlockImage,
	},
};
