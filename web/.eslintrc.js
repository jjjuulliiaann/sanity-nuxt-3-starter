module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['@nuxtjs/eslint-config', 'plugin:nuxt/recommended', 'prettier'],
	plugins: [],
	rules: {
		'vue/multi-word-component-names': 0,
		'no-console': 0,
	},
	globals: {
		groq: 'readonly',
		useSanityQuery: 'readonly',
	},
}
