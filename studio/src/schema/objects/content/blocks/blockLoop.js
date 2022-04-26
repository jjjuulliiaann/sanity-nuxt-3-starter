import { BiTv } from "react-icons/bi/";
import { PreviewBlockLoop } from "./previews";

export default {
	title: "Video Loop",
	name: "blockLoop",
	icon: BiTv,
	type: "object",
	fields: [
		{
			title: "Loop",
			description: "Autoplay Video without sound",
			name: "video",
			type: "video",
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			playbackId: "video.muxVideo.asset.playbackId",
		},
		component: PreviewBlockLoop,
	},
};
