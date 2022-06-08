import { BiMoviePlay } from "react-icons/bi/";
import { PreviewBlockVideo } from "./previews";

export default {
	title: "Video",
	name: "blockVideo",
	icon: BiMoviePlay,
	type: "object",
	fields: [
		{
			title: "Video",
			description: "Video with player controls",
			name: "video",
			type: "video",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Poster Image",
			description: "Optional, visible before play",
			name: "posterImage",
			type: "image",
		},
	],
	preview: {
		select: {
			playbackId: "video.muxVideo.asset.playbackId",
			poster: "posterImage.asset._id",
			duration: "video.muxVideo.asset.data.duration",
		},
		component: PreviewBlockVideo,
	},
};
