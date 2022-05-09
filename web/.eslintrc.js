module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:vue/vue3-essential', 'prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	plugins: ['vue'],
	rules: {
		'vue/script-setup-uses-vars': 'error',
		'comma-dangle': 0,
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
