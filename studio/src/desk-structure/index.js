import S from "@sanity/desk-tool/structure-builder";
import { BiBookAlt } from "react-icons/bi/";

export const getDefaultDocumentNode = () => {
	return S.document().views([S.view.form()]);
};

// create document items
const collectionList = ({ id, defaultOrdering = [] }) =>
	S.documentTypeListItem(id).child(
		S.documentTypeList(id).defaultOrdering(defaultOrdering)
	);

const singletonPage = ({ id, schemaType, preview = false }) =>
	S.documentTypeListItem(schemaType).child(
		S.document().schemaType(schemaType).id(id).views([S.view.form()])
	);

// navigation structure
export default () =>
	S.list()
		.title("Content")
		.items([
			singletonPage({
				id: "pageHome",
				schemaType: "pageHome",
				preview: true,
			}),

			S.listItem()
				.title("Projects")
				.icon(BiBookAlt)
				.child(
					S.list()
						.title("Projects")
						.items([
							collectionList({
								id: "project",
								defaultOrdering: [
									{
										field: "title",
										direction: "asc",
									},
								],
							}),

							S.divider(),

							singletonPage({
								id: "pageProjects",
								schemaType: "pageProjects",
								preview: true,
							}),
						])
				),

			S.divider(),

			collectionList({
				id: "pageText",
				defaultOrdering: [
					{
						field: "title",
						direction: "asc",
					},
				],
			}),

			singletonPage({
				id: "siteNavigation",
				schemaType: "siteNavigation",
			}),

			singletonPage({
				id: "siteOptions",
				schemaType: "siteOptions",
			}),
		]);
