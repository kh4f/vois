import { defineConfig } from 'tsdown'

export default defineConfig({
	entry: 'src/{index,vite,next}.ts',
	fixedExtension: false,
})