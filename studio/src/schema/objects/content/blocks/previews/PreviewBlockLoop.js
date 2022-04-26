import React from "react";

export const PreviewBlockLoop = ({ value }) => {
	if (!value) return null;
	const { _type, playbackId } = value;

	const thumbnail = `https://image.mux.com/${playbackId}/animated.gif`;

	return playbackId ? (
		<div style={{ padding: "0.5rem" }}>
			<img
				style={{
					display: "block",
					width: "auto",
					height: "auto",
					maxHeight: "10rem",
				}}
				src={thumbnail}
			/>
		</div>
	) : (
		<div style={{ padding: "0.5rem" }}>Empty Loop</div>
	);
};
