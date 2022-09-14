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
			tracks: "muxVideo.asset.data.tracks",
			duration: "muxVideo.asset.data.duration",
		},
		prepare(selection) {
			const { playbackId, tracks, duration } = selection;
			const thumbnail = `https://image.mux.com/${playbackId}/thumbnail.png`;
			let styles = {
				position: "relative",
				width: "100%",
				height: "100%",
				overflow: "hidden",
				background: "rgb(239,239,239)",
				objectFit: "cover",
			};
			// duration
			const minutes = duration
				? Math.floor(duration / 60)
						.toString()
						.padStart(2, "0")
				: "00";
			const seconds = duration
				? Math.floor(duration % 60)
						.toString()
						.padStart(2, "0")
				: "00";
			const durationString = duration ? `${minutes}:${seconds}` : "";
			// dimensions
			const videoTrack = tracks?.find((el) => el.type === "video");
			const videoWidth = videoTrack ? videoTrack.max_width : undefined;
			const videoHeight = videoTrack ? videoTrack.max_height : undefined;
			// return
			return {
				title: "Video",
				subtitle: videoTrack
					? `${durationString} – ${videoWidth}px × ${videoHeight}px`
					: durationString,
				media: <img style={styles} src={thumbnail ? thumbnail : ""} />,
			};
		},
	},
};
