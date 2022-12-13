const { createDevServer } = require('@edgio/core/dev');

function dev() {
	return createDevServer({
		label: 'Remix',
		command: port => `npx remix dev -p ${port}`,
		ready: [/Edgio: App Server started at/i],
	})
}

module.exports = dev;