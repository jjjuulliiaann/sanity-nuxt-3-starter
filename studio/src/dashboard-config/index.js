export default {
	widgets: [
		{
			name: "netlify",
			options: {
				title: "Website Deployment",
				sites: [
					{
						title: "Website ",
						apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID,
						buildHookId:
							process.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK_ID,
						name: process.env.SANITY_STUDIO_FRONTEND_NAME,
						url: process.env.SANITY_STUDIO_FRONTEND_URL,
					},
				],
			},
		},
		{
			name: "useful-links",
			layout: {
				width: "small",
				height: "small",
			},
		},
	],
};
