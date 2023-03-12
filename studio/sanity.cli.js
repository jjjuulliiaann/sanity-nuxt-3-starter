import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
	api: {
		projectId: process.env.SANITY_STUDIO_PROJECT_ID,
		dataset: process.env.SANITY_STUDIO_DATASET,
	},
	vite: (prevConfig) => {
		return {
			...prevConfig,
			resolve: {
				...prevConfig.resolve,
				alias: {
					...prevConfig.resolve?.alias,
					'@': __dirname,
				},
			},
		}
	},
})
