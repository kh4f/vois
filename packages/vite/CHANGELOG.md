# Changelog


## &ensp; [` 📦 @voicss/vite@0.2.3  `](https://github.com/voicss/voicss/compare/@voicss/vite@0.2.2...@voicss/vite@0.2.3)

### &emsp; 🩹 Fixes
- **Sourcemap generation**: the plugin now emits a proper sourcemap when prepending the virtual CSS import, which removes the Rolldown `[SOURCEMAP_BROKEN]` warning. [🡥](https://github.com/voicss/voicss/commit/83e8f05)

##### &emsp;&emsp; [Full Changelog](https://github.com/voicss/voicss/compare/@voicss/vite@0.2.2...@voicss/vite@0.2.3) &ensp;•&ensp; Jun 9, 2026


## &ensp; [` 📦 @voicss/vite@0.2.2  `](https://github.com/voicss/voicss/compare/@voicss/vite@0.2.1...@voicss/vite@0.2.2)

### &emsp; 🩹 Fixes
- **Reliable core bundling**: `voicss` is now always inlined into the plugin output, even when `voicss/dist` hasn't been built yet. [🡥](https://github.com/voicss/voicss/commit/104d49d)

##### &emsp;&emsp; [Full Changelog](https://github.com/voicss/voicss/compare/@voicss/vite@0.2.1...@voicss/vite@0.2.2) &ensp;•&ensp; Jun 9, 2026


## &ensp; [` 📦 @voicss/vite@0.2.1  `](https://github.com/voicss/voicss/compare/@voicss/vite@0.2.0...@voicss/vite@0.2.1)

### &emsp; 🩹 Fixes
- **Consistent builds across environments**: fixed an issue where the bundled output differed between local and CI due to a stale lockfile after the peer dependency restructure. [🡥](https://github.com/voicss/voicss/commit/1546f99)

##### &emsp;&emsp; [Full Changelog](https://github.com/voicss/voicss/compare/@voicss/vite@0.2.0...@voicss/vite@0.2.1) &ensp;•&ensp; Jun 9, 2026


## &ensp; [` 📦 @voicss/vite@0.2.0  `](https://github.com/voicss/voicss/compare/@voicss/vite@0.1.0...@voicss/vite@0.2.0)

### &emsp; 🧨 BREAKING CHANGES
- **Bundled core extractor**: `voicss` is now bundled directly inside `@voicss/vite` instead of being a peer dependency — users no longer need to install `voicss` separately. [🡥](https://github.com/voicss/voicss/commit/29f2e31)

##### &emsp;&emsp; [Full Changelog](https://github.com/voicss/voicss/compare/@voicss/vite@0.1.0...@voicss/vite@0.2.0) &ensp;•&ensp; Jun 9, 2026


## &ensp; [` 📦 @voicss/vite@0.1.0  `](https://github.com/voicss/voicss/commits/@voicss/vite@0.1.0)

### &emsp; 🎁 Features
- **Vite integration**: introduced the initial plugin to extract CSS from Voicss template literals and inject it through a virtual stylesheet import. [🡥](https://github.com/voicss/voicss/commit/33c0ccf)

##### &emsp;&emsp; [Full Changelog](https://github.com/voicss/voicss/commits/@voicss/vite@0.1.0) &ensp;•&ensp; Apr 16, 2026