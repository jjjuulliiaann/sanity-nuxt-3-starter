/*
Document ids which:
- cannot be created in the 'new document' menu
- cannot be duplicated, unpublished or deleted
*/
const LOCKED_DOCUMENT_IDS = [
	'siteNav',
	'siteOptions',
	'pageProjects',
	'pageHome',
	'media.tag', // Sanity Media Plugin Tags
]

/*
Return all templates except the locked documents
*/
export const initialValueTemplates = (prev) => {
	return [
		...prev.filter((el) => {
			return !LOCKED_DOCUMENT_IDS.includes(el.schemaType)
		}),
	]
}
