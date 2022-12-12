export const structure = (S) =>
	S.list()
		.title('Content')
		.items([
			S.documentListItem().id('pageHome').schemaType('pageHome'),

			S.listItem({
				title: 'Projects',
				id: 'projects',
				schemaType: 'project',
				child: () =>
					S.list()
						.title('Projects')
						.items([
							S.listItem({
								title: 'Projects',
								id: 'projects',
								schemaType: 'project',
								child: () =>
									S.documentTypeList('project')
										.title('Projects')
										.defaultOrdering([
											{
												field: 'title',
												direction: 'asc',
											},
										]),
							}),
							S.documentListItem()
								.id('pageProjects')
								.title('Page')
								.schemaType('pageProjects'),
						]),
			}),

			S.listItem({
				title: 'Pages',
				id: 'pages',
				schemaType: 'page',
				child: () =>
					S.documentTypeList('page')
						.title('Pages')
						.defaultOrdering([
							{
								field: 'title',
								direction: 'asc',
							},
						]),
			}),

			S.divider(),

			S.documentListItem().id('siteNav').schemaType('siteNav'),

			S.documentListItem().id('siteOptions').schemaType('siteOptions'),
		])
