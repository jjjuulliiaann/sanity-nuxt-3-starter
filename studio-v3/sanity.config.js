import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {muxInput} from 'sanity-plugin-mux-input'
import {structure} from './src/deskStructure'
import {schemaTypes} from './src/schemas'

export default defineConfig({
	name: 'default',
	title: 'Sanity Nuxt 3 Starter',

	projectId: 'nwd3y69e',
	dataset: 'production',

	plugins: [
		deskTool({
			structure,
		}),
		visionTool(),
		muxInput({mp4_support: 'standard'}),
	],

	schema: {
		types: schemaTypes,
	},
})
