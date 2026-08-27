import { intro, select, spinner, text, outro } from '@clack/prompts'
import { downloadTemplate } from 'giget'
import { handleCancel, resolveWorkspaceDeps } from './utils'

void (async () => {
	console.log()
	intro('Create a new Vois project')

	const platform = await select({ message: 'Pick a platform:', options: [
		{ label: 'Next.js', value: 'next' },
		{ label: 'Vite', value: 'vite' },
		{ label: 'tsdown', value: 'tsdown' },
	] })
	handleCancel(platform)

	const projectName = await text({
		message: 'Project name:',
		defaultValue: `vois-${platform}`,
		placeholder: `vois-${platform}`,
	})
	handleCancel(projectName)

	const s = spinner()
	s.start('Scaffolding project...')
	await downloadTemplate(`gh:kh4f/vois/templates/${platform}`, { dir: projectName })
	await resolveWorkspaceDeps(projectName)
	s.stop('Project scaffolded successfully!')

	outro('Done')
})()