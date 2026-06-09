import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import voicss from '@voicss/vite'
import type { UserConfig } from 'vite'

export default {
	resolve: { alias: {	'@': resolve('src') } },
	plugins: [react(), voicss()],
} satisfies UserConfig