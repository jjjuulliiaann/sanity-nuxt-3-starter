export const linkQuery = `
	_type == "link" && linkType == "internal" => {
		_type,
		linkType,
		"title": internalLink->title,
		"route": select(
			internalLink->_type == "pageHome" => "index",
			internalLink->_type == "pageProjects" => "projects",
			internalLink->_type == "project" => "projects-slug",
			internalLink->_type == "pageText" => "slug",
			"index"
		),
		"slug": internalLink->slug.current
	},
	_type == "link" && linkType == "external" => {
		...,
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
