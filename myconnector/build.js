const { join } = require('path');
const { DeploymentBuilder } = require('@edgio/core/deploy');
const FrameworkBuildError = require('@edgio/core/errors/FrameworkBuildError');

module.exports = async function build({ skipFramework }) {
  const builder = new DeploymentBuilder();
  builder.clearPreviousBuildOutput();

  const appDir = process.cwd();

  if (!skipFramework) {
    try {
      const command = 'npx remix build';
      await builder.exec(command);
    } catch (e) {
      throw new FrameworkBuildError('Remix', command, e);
    }
  }

  builder.addJSAsset(join(appDir, 'build', 'index.js'));
  await builder.build();
};
