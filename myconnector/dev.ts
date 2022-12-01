/* istanbul ignore file */
import { createDevServer } from '@edgio/core/dev'

export default function dev() {
	return createDevServer({
		label: 'Remix',
		command: port => `yarn remix dev --fwd="--port=${port}"`,
		ready: [/ >- listening on/i],
	})
}
