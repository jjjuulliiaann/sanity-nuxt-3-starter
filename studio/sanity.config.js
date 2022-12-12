import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {muxInput} from 'sanity-plugin-mux-input'
import {structure} from './config/structure'
import {defaultDocumentNode} from './config/views'
import {resolveProductionUrl} from './config/views'
import {initialValueTemplates} from './config/initialValueTemplates'
import {schemaTypes} from './schemas'

export default defineConfig({
	name: 'default',
	title: 'Sanity Nuxt 3 Starter',
	projectId: 'nwd3y69e',
	dataset: 'production',

	plugins: [
		deskTool({
			structure,
			defaultDocumentNode,
		}),
		visionTool(),
		muxInput({mp4_support: 'standard'}),
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
