module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'@nuxtjs/eslint-config-typescript',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'vue/script-setup-uses-vars': 'error',
		'comma-dangle': [2, 'always-multiline'],
		'no-tabs': 0,
		'vue/multi-word-component-names': 0,
		'no-console': 0,
	},
	globals: {
		groq: 'readonly',
		useSanityQuery: 'readonly',
		useRoute: 'readonly',
		ref: 'readonly',
		computed: 'readonly',
		onMounted: 'readonly',
		defineNuxtPlugin: 'readonly',
		defineNuxtRouteMiddleware: 'readonly',
		definePageMeta: 'readonly',
		defineProps: 'readonly',
		abortNavigation: 'readonly',
		clearError: 'readonly',
	},
}
