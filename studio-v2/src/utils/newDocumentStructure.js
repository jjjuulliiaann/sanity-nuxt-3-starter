import S from '@sanity/base/structure-builder'

const LOCKED_DOCUMENT_IDS = [
	'siteNavigation',
	'siteOptions',
	'pageHome',
	'pageProjects',
]

/*
Document types which:
- cannot be created in the 'new document' menu
- cannot be duplicated, unpublished or deleted
*/
const LOCKED_DOCUMENT_TYPES = []

export default [
	// Use default values, but filter out locked documents
	...S.defaultInitialValueTemplateItems().filter((template) => {
		const { spec } = template
		return ![...LOCKED_DOCUMENT_IDS, ...LOCKED_DOCUMENT_TYPES].includes(
			spec.id
		)
	}),
]
