# 🧹 Vois ESLint Plugin

An ESLint plugin for **CSS formatting in Vois CSS blocks**

## 📥 Install

```bash
bun a -d vois-eslint
```

## 🕹️ Usage

```ts
// eslint.config.ts
import vois from 'vois-eslint'

export default defineConfig([
	{
		name: 'Vois',
		files: ['**/*.tsx'],
		extends: [vois.configs.recommended], // enables all rules
		// plugins: { vois }, // not necessary when using the recommended config
		rules: { 'vois/indent': 'off' }, // can override rules here
	},
	// or just
	vois.configs.recommended,
])
```

## 🧩 Rules

💼 – included in the `recommended` config  
🔧 – auto-fixable

| Name | Description | 💼 | 🔧 |
|-|-|-|-|
| `indent` | Enforce consistent indentation | ✔️ | ✔️ |
| `quote-style` | Enforce consistent string quotes | ✔️ | ✔️ |
| `no-multiple-empty-lines` | Disallow multiple empty lines | ✔️ | ✔️ |
| `spacing` | Disallow extra spaces | ✔️ | ✔️ |