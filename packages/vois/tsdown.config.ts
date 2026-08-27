import { resolve } from 'node:path'
import type { UserConfig } from 'tsdown'

const prod = process.argv.includes('-p')

export default {
	entry: ['src/index.ts', 'src/vite.ts', 'src/next.ts'],
	minify: prod,
	sourcemap: prod ? false : 'inline',
	fixedExtension: false,
} satisfies UserConfig
