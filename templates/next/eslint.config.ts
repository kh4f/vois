import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import react from '@eslint-react/eslint-plugin'
import hooks from 'eslint-plugin-react-hooks'
import next from '@next/eslint-plugin-next'
import stylistic from '@stylistic/eslint-plugin'
import voicss from '@voicss/eslint'

export default defineConfig([
	globalIgnores(['dist', '.next', 'next-env.d.ts']),
	{
		name: 'Base Rules',
		files: ['**/*.ts?(x)'],
		extends: [js.configs.recommended],
	},
	{
		name: 'Type-Aware Rules',
		files: ['**/*.ts?(x)'],
		extends: [ts.configs.strictTypeChecked, ts.configs.stylisticTypeChecked],
		languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } },
		rules: { '@typescript-eslint/restrict-template-expressions': 'off' }
	},
	{
		name: 'React Rules',
		files: ['**/*.ts?(x)'],
		extends: [
			react.configs['recommended-type-checked'],
			hooks.configs.flat.recommended,
			next.configs.recommended,
			next.configs['core-web-vitals'],
		],
	},
	{
		name: 'Stylistic Rules',
		files: ['**/*.ts?(x)'],
		extends: [stylistic.configs.recommended, voicss.configs.recommended],
		rules: {
			'@stylistic/no-tabs': 'off',
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/indent-binary-ops': ['error', 'tab'],
			'@stylistic/brace-style': ['error', '1tbs'],
			'@stylistic/arrow-parens': ['error', 'as-needed'],
			'@stylistic/eol-last': ['error', 'never'],
			'@stylistic/jsx-indent-props': ['error', 'tab'],
			'@stylistic/jsx-one-expression-per-line': 'off',
			'@stylistic/jsx-tag-spacing': ['error', { beforeClosing: 'never', beforeSelfClosing: 'never' }],
			'@stylistic/jsx-wrap-multilines': 'off',
			'@stylistic/jsx-closing-tag-location': 'off',
			'@stylistic/jsx-closing-bracket-location': 'off',
			'@stylistic/jsx-quotes': ['error', 'prefer-single'],
			'@stylistic/operator-linebreak': 'off',
			'@stylistic/jsx-first-prop-new-line': 'off',
		},
	},
])