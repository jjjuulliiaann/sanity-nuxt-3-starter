export const linkQuery = `
	_type == "link" && linkType == "internal" => {
		_type,
		linkType,
		"slug": internalLink->slug.current,
		"title": internalLink->title,
		"template": internalLink->_type
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
