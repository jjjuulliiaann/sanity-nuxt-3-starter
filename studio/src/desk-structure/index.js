import S from "@sanity/desk-tool/structure-builder";
import { BiBookAlt } from "react-icons/bi/";

export const getDefaultDocumentNode = () => {
	return S.document().views([S.view.form()]);
};

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
	});

const singletonPage = ({ title, id, schemaType }) =>
	S.listItem({
		title: title,
		id: id,
		schemaType: schemaType,
		child: () =>
			S.document().schemaType(schemaType).id(id).views([S.view.form()]),
	});

// navigation structure
export default () =>
	S.list()
		.title("Content")
		.items([
			singletonPage({
				title: "Home",
				id: "pageHome",
				schemaType: "pageHome",
			}),

			S.listItem()
				.title("Projects")
				.icon(BiBookAlt)
				.child(
					S.list()
						.title("Projects")
						.items([
							collectionList({
								title: "Projects",
								schemaType: "project",
								defaultOrdering: [
									{
										field: "title",
										direction: "asc",
									},
								],
							}),

							S.divider(),

							singletonPage({
								title: "Page",
								id: "pageProjects",
								schemaType: "pageProjects",
							}),
						])
				),

			S.divider(),

			collectionList({
				title: "Pages",
				schemaType: "pageText",
				defaultOrdering: [
					{
						field: "title",
						direction: "asc",
					},
				],
			}),

			singletonPage({
				title: "Navigation",
				id: "siteNavigation",
				schemaType: "siteNavigation",
			}),

			singletonPage({
				title: "Options",
				id: "siteOptions",
				schemaType: "siteOptions",
			}),
		]);
