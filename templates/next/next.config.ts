import { voisTurboRule } from '@vois/next'
import type { NextConfig } from 'next'

export default {
	turbopack: { rules: { ...voisTurboRule } },
} satisfies NextConfig