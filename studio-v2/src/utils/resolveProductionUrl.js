const baseUrl = process.env.SANITY_STUDIO_FRONTEND_URL
const urlQuery = '?preview=true'
const fullscreenQuery = '&fullscreen=true'

const previewDocuments = [
	{
		_type: 'pageHome',
		path: '',
	},
	{
		_type: 'pageProjects',
		path: 'projects',
	},
	{
		_type: 'project',
		path: 'projects',
	},
	{
		_type: 'pageText',
		path: '',
	},
]

export default function resolveProductionUrl(document, isFrame) {
	const path = previewDocuments.filter(
		(doc) => doc._type === document._type
	)[0]?.path

	const productionUrl = `${baseUrl}${path ? '/' + path : ''}${
		document.slug?.current ? '/' + document.slug?.current : ''
	}/${urlQuery}`

	return isFrame ? productionUrl : productionUrl + fullscreenQuery
}
