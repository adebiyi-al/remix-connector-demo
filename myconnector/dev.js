const {createDevServer} = require('@edgio/core/dev');

function dev() {
	return createDevServer({
		label: 'Remix',
		command: port => `yarn remix dev --port ${port}`,
		ready: [/Remix App Server started at/i],
	})
}

module.exports = dev;