import { defineConfig, isDev } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { muxInput } from 'sanity-plugin-mux-input'
import { structure } from './config/structure'
import { defaultDocumentNode } from './config/views'
import { resolveProductionUrl } from './config/views'
import { initialValueTemplates } from './config/initialValueTemplates'
import { schemaTypes } from './schemas'

export default defineConfig({
	name: 'default',
	title: 'Sanity Nuxt 3 Starter',
	projectId: process.env.SANITY_STUDIO_PROJECT_ID,
	dataset: process.env.SANITY_STUDIO_DATASET,

	plugins: [
		deskTool({
			structure,
			defaultDocumentNode,
		}),
		muxInput({ mp4_support: 'standard' }),
		media(),
		...(isDev ? [visionTool()] : []),
	],

	schema: {
		types: schemaTypes,
		templates: (prev) => initialValueTemplates(prev),
	},

	document: {
		productionUrl: async (prev, context) =>
			resolveProductionUrl({
				context,
				frontendUrl: import.meta.env.SANITY_STUDIO_FRONTEND_URL,
			}),
	},
})
