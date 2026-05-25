import type { UserConfig } from 'tsdown'
import voicss from '@voicss/vite'

const prod = process.argv.includes('-p')

export default {
	minify: prod,
	sourcemap: prod ? false : 'inline',
	fixedExtension: false,
	plugins: [voicss()],
} satisfies UserConfig