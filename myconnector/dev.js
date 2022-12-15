const { createDevServer } = require('@edgio/core/dev');

function dev() {
  return createDevServer({
    label: 'Remix',
    command: (port) => `npx remix dev -p ${port}`,
    ready: [/Remix App Server started/i],
  });
}

module.exports = dev;
