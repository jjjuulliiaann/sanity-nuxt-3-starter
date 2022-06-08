import React, { useEffect, useState } from "react";
import client from "part:@sanity/base/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
	return builder.image(source);
}

export const PreviewBlockImage = ({ value }) => {
	if (!value) return null;
	const { image, caption } = value;

	const url = image ? urlFor(image).width(600).url() : undefined;

	return image ? (
		<div style={{ padding: "0.5rem" }}>
			<img
				style={{
					display: "block",
					width: "auto",
					height: "auto",
					maxHeight: "10rem",
				}}
				src={url}
			/>
			<p style={{ margin: "0.5em 0 0", fontSize: "0.8rem" }}>{caption}</p>
		</div>
	) : (
		<div style={{ padding: "0.5rem" }}>Empty Image</div>
	);
};
