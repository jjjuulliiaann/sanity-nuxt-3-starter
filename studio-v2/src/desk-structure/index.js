import S from '@sanity/desk-tool/structure-builder'
import { BiBookAlt } from 'react-icons/bi/'
/* import PreviewComponent from './../utils/preview' */

// create preview view
/* const previewComponentView = S.view.component(PreviewComponent).title('Preview')

export const getDefaultDocumentNode = () => {
	return S.document().views([S.view.form(), previewComponentView])
} */

// create document items
const collectionList = ({ title, schemaType, defaultOrdering = [] }) =>
	S.listItem({
		title: title,
		id: schemaType,
		schemaType: schemaType,
		child: () =>
			S.documentTypeList(schemaType)
				.title(title)
				.defaultOrdering(defaultOrdering),
	})

const singletonPage = ({ title, id, schemaType, preview = false }) =>
	S.listItem({
		title: title,
		id: id,
		schemaType: schemaType,
		child: () =>
			S.document().schemaType(schemaType).id(id).views([
				S.view.form(),
				/* ...(preview ? [previewComponentView] : []), */
			]),
	})

// navigation structure
export default () =>
	S.list()
		.title('Content')
		.items([
			singletonPage({
				title: 'Home',
				id: 'pageHome',
				schemaType: 'pageHome',
				preview: true,
			}),

			S.listItem()
				.title('Projects')
				.icon(BiBookAlt)
				.child(
					S.list()
						.title('Projects')
						.items([
							collectionList({
								title: 'Projects',
								schemaType: 'project',
								defaultOrdering: [
									{
										field: 'title',
										direction: 'asc',
									},
								],
							}),

							S.divider(),

							singletonPage({
								title: 'Page',
								id: 'pageProjects',
								schemaType: 'pageProjects',
								preview: true,
							}),
						])
				),

			S.divider(),

			collectionList({
				title: 'Pages',
				schemaType: 'pageText',
				defaultOrdering: [
					{
						field: 'title',
						direction: 'asc',
					},
				],
			}),

			singletonPage({
				title: 'Navigation',
				id: 'siteNavigation',
				schemaType: 'siteNavigation',
			}),

			singletonPage({
				title: 'Options',
				id: 'siteOptions',
				schemaType: 'siteOptions',
			}),
		])
