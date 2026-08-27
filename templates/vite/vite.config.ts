import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import vois from 'vois/vite'
import type { UserConfig } from 'vite'

export default {
	resolve: { alias: {	'@': resolve('src') } },
	plugins: [react(), vois()],
} satisfies UserConfig