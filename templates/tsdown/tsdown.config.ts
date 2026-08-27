import vois from '@vois/vite'
import type { UserConfig } from 'tsdown'

const prod = process.argv.includes('-p')

export default {
	minify: prod,
	sourcemap: prod ? false : 'inline',
	fixedExtension: false,
	plugins: [vois()],
} satisfies UserConfig