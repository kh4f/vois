import { defineConfig } from 'eslint/config'
import kh4f from '@kh4f/eslint-config'
import vois from 'vois-eslint'

export default defineConfig([
	await kh4f(),
	vois.configs.recommended,
])