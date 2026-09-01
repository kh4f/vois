import type { Plugin, ConfigObject } from '@eslint/core'
import { indent, noMultipleEmptyLines, quoteStyle, spacing } from './rules'

interface VoisEslintPlugin extends Plugin {
	configs: { recommended: ConfigObject }
}

const plugin: Plugin = {
	meta: { name: 'vois-eslint', version: '0.0.0' },
	rules: {
		indent,
		spacing,
		'quote-style': quoteStyle,
		'no-multiple-empty-lines': noMultipleEmptyLines,
	},
}

plugin.configs = { recommended: {
	plugins: { vois: plugin },
	rules: {
		'vois/indent': 'error',
		'vois/spacing': 'error',
		'vois/quote-style': ['error', 'single'],
		'vois/no-multiple-empty-lines': 'error',
		'@typescript-eslint/no-meaningless-void-operator': 'off',
	},
} }

export default plugin as VoisEslintPlugin