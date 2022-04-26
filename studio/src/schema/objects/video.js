import React from "react";

export default {
	name: "video",
	title: "Video",
	type: "object",
	fields: [
		{
			title: "Video",
			name: "muxVideo",
			type: "mux.video",
		},
	],
	preview: {
		select: {
			playbackId: "muxVideo.asset.playbackId",
			track: "muxVideo.asset.data.tracks[0]",
		},
		prepare(selection) {
			const { playbackId, track } = selection;
			const thumbnail = `https://image.mux.com/${playbackId}/thumbnail.png`;
			let styles = {
				position: "relative",
				width: "100%",
				height: "100%",
				overflow: "hidden",
				background: "rgb(239,239,239)",
				objectFit: "cover",
			};
			return {
				title: "Video",
				subtitle: track
					? `${track.max_width}px × ${track.max_height}px`
					: "",
				media: <img style={styles} src={thumbnail ? thumbnail : ""} />,
			};
		},
	},
};
