import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vois from 'vois/vite'

export default defineConfig({
	resolve: { alias: {	'@': resolve('src') } },
	plugins: [react(), vois()],
})