import voicss from '@voicss/vite'
import type { UserConfig } from 'tsdown'

const prod = process.argv.includes('-p')

export default {
	minify: prod,
	sourcemap: prod ? false : 'inline',
	fixedExtension: false,
	plugins: [voicss()],
} satisfies UserConfig