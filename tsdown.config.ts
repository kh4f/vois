import { resolve } from 'node:path'
import type { UserConfig } from 'tsdown'

const prod = process.argv.includes('-p')

export default {
	minify: prod,
	sourcemap: prod ? false : 'inline',
	fixedExtension: false,
	alias: { vois: resolve(import.meta.dirname, 'packages/vois/src') },
} satisfies UserConfig