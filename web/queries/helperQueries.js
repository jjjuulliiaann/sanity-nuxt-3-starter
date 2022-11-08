export const linkQuery = `
	_type == "internalLink" => {
		"linkType": "internalLink",
		"title": coalesce( title,
			linkTarget->title
		),
		"route": select(
			linkTarget->_type == "pageHome" => "index",
			linkTarget->_type == "pageProjects" => "projects",
			linkTarget->_type == "pageText" => "slug",
			linkTarget->_type == "project" => "projects-slug",
			"index"
		),
		"slug": linkTarget->slug.current
	},
	_type == "externalLink" => {
		...,
		"linkType": "externalLink",
		"title": coalesce(title, href)
	}
`

export const contentBlockQuery = `
	...,
	_type == "blockImage" => {
		image {..., asset->}
	},
	_type == "blockLoop" => {
		video {muxVideo{asset->}}
	},
	_type == "blockVideo" => {
		video {muxVideo{asset->}},
		posterImage {..., asset->}
	},
	markDefs[]{
		...,
		_type == "download" => {"url": asset->url},
		${linkQuery}
	}
`

export const imageLoopArrayQuery = `
	_type == "picture" => {
		..., asset->
	},
	_type == "video" => {
		..., muxVideo{asset->}
	},
`

export const seoQuery = `
	seo {
		...,
		ogImage{asset->}
	}
`
