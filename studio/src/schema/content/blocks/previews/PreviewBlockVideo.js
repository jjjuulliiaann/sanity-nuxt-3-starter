import React from "react";
import client from "part:@sanity/base/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
	return builder.image(source);
}

export function PreviewBlockVideo({ value }) {
	if (!value) return null;
	const { playbackId, poster, duration } = value;
	const thumbnailUrl = poster
		? urlFor(poster).width(500).url()
		: `https://image.mux.com/${playbackId}/thumbnail.jpg`;
	// duration string
	let minutes = Math.floor(duration / 60);
	minutes = minutes >= 10 ? minutes : `0${minutes}`;
	let seconds = Math.floor(duration % 60);
	seconds = seconds >= 10 ? seconds : `0${seconds}`;
	const durationString = `${minutes}:${seconds}`;

	return (
		<div style={{ padding: "0.5rem" }}>
			<h3
				style={{
					display: "block",
					margin: "0 0 1rem 0",
					fontSize: "1rem",
					fontWeight: 600,
				}}
			>
				Video&nbsp;
				<span style={{ fontWeight: 350, color: "#51637f" }}>
					({durationString})
				</span>
			</h3>
			<img
				style={{
					display: "block",
					width: "auto",
					height: "auto",
					maxHeight: "10rem",
				}}
				src={thumbnailUrl}
			/>
		</div>
	);
}
