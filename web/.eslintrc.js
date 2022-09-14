module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['@nuxtjs'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'vue/script-setup-uses-vars': 2,
		'comma-dangle': 0,
		'no-tabs': 0,
		'vue/multi-word-component-names': 0,
		'no-console': 0,
	},
}
