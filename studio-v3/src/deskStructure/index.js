import PreviewComponent from '@/src/utils/preview'

/*
create preview view
*/
const getPreviewComponentView = (S) => S.view.component(PreviewComponent).title('Preview')

export const getDefaultDocumentNode = () => {
	return S.document().views([S.view.form(), getPreviewComponentView(S)])
}

/*
create singleton element
*/
const singletonPage = ({S, title, id, schemaType, preview = false}) =>
	S.listItem({
		title: title,
		id: id,
		schemaType: schemaType,
		child: () =>
			S.document()
				.schemaType(schemaType)
				.id(id)
				.views([S.view.form(), ...(preview ? [getPreviewComponentView(S)] : [])]),
	})

/*
create collection element
*/
const collectionList = ({S, title, schemaType, defaultOrdering = []}) =>
	S.listItem({
		title: title,
		id: schemaType,
		schemaType: schemaType,
		child: () => S.documentTypeList(schemaType).title(title).defaultOrdering(defaultOrdering),
	})

export const structure = (S) =>
	S.list()
		.title('Content')
		.items([
			singletonPage({
				S,
				title: 'Home',
				id: 'pageHome',
				schemaType: 'pageHome',
				preview: true,
			}),

			collectionList({
				S,
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

			collectionList({
				S,
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
				S,
				title: 'Options',
				id: 'siteOptions',
				schemaType: 'siteOptions',
			}),
		])
