module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/essential', 'prettier'],
	plugins: ['vue'],
	rules: {
		'vue/multi-word-component-names': 0,
	},
}
