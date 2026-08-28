import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: ['src/index.ts', 'src/vite.ts', 'src/next.ts'],
	fixedExtension: false,
})