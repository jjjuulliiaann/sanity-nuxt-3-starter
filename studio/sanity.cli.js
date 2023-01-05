import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
	api: {
		projectId: 'nwd3y69e',
		dataset: 'production',
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
