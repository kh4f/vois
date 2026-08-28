import { defineConfig } from 'tsdown'
import vois from 'vois/vite'

export default defineConfig({
	fixedExtension: false,
	plugins: [vois()],
})