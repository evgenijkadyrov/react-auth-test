module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'import'],
	rules: {
		'prettier/prettier': 'error',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'import/order': [
			'error',
			{
				pathGroups: [
					{
						pattern: '@/**',
						group: 'internal',
						position: 'after',
					},
					{
						pattern: './**',
						group: 'internal',
						position: 'after',
					},
				],
				'newlines-between': 'always',
				pathGroupsExcludedImportTypes: ['builtin'],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'import/no-default-export': 'error',
	},
	overrides: [
		{
			files: [
				'dynamic-components/**/*.{js,jsx,ts,tsx}',
				'pages/**/*.{js,jsx,ts,tsx}',
				'**/*.d.ts',
				'index.stories.{jsx,tsx}',
			],
			rules: {
				'import/no-default-export': 'off',
			},
		},
	],
};
