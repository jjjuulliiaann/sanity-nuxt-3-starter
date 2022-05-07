import { BiMovie } from "react-icons/bi/";
import { PreviewBlockLoop } from "./previews";

export default {
	title: "Loop",
	name: "blockLoop",
	icon: BiMovie,
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
			duration: "video.muxVideo.asset.data.duration",
		},
		component: PreviewBlockLoop,
	},
};
