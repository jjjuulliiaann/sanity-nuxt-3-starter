import React from "react";
import { BiBookAlt } from "react-icons/bi/";
import { slugify, validateSlug } from "../../../utils/helperFunctions.js";

export default {
	title: "Projects",
	name: "project",
	type: "document",
	icon: BiBookAlt,
	__experimental_actions: ["update", "create", "delete", "publish"],
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Slug",
			name: "slug",
			type: "slug",
			options: {
				source: "title",
				slugify: slugify,
			},
			validation: validateSlug,
		},
		{
			title: "Content",
			name: "content",
			type: "contentParagraph",
		},
		{
			title: "Images",
			name: "images",
			type: "array",
			layout: "grid",
			editModal: "popover",
			of: [
				{
					title: "Image",
					type: "picture",
				},
				{
					title: "Video Loop",
					type: "video",
				},
			],
		},
		{
			title: "SEO",
			name: "seo",
			type: "seo",
		},
	],

	preview: {
		select: {
			title: "title",
			image: "images.0.asset.url",
		},
		prepare({ title, image }) {
			let styles = {
				position: "relative",
				width: "100%",
				height: "100%",
				overflow: "hidden",
				background: "rgb(239,239,239)",
				objectFit: "cover",
			};
			return {
				title: title ? title : "",
				media: image ? (
					<img style={styles} src={image} />
				) : (
					<div style={styles}></div>
				),
			};
		},
	},

	orderings: [
		{
			title: "Title",
			name: "titleAsc",
			by: [
				{ field: "title", direction: "asc" },
				{ field: "_updatedAt", direction: "desc" },
			],
		},
	],
};
