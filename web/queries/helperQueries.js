export const linkQuery = `
	_type == "internalLink" => {
		"linkType": "internalLink",
		"title": coalesce( title,
			linkTarget->title
		),
		"route": select(
			linkTarget->_type == "pageHome" => "index",
			linkTarget->_type == "pageProjects" => "projects",
			linkTarget->_type == "page" => "slug",
			linkTarget->_type == "project" => "projects-slug",
			"index"
		),
		"slug": linkTarget->slug.current
	},
	_type == "link" => {
		...,
		"linkType": "externalLink",
		"title": coalesce(title, href)
	}
`

export const contentBlockQuery = `
	_type == "block" => {
		...
	},
	_type == "picture" || _type == "pictureTitled" => {
		_type,
		"image": {..., asset->}
	},
	_type == "video" || _type == "videoPlayer" => {
		_type,
		"video": {muxVideo{..., asset->}},
		posterImage {..., asset->}
	},
	markDefs[]{
		...,
		_type == "download" => {"url": asset->url},
		${linkQuery}
	}
`

export const seoQuery = `
	seo {
		...,
		ogImage{asset->}
	}
`
