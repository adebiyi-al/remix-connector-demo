import fs from 'fs'
import path from 'path'
import chalk from 'chalk'

export default function loadRedwoodConfig(configPath?: string) {
  try {
    const config = fs.readFileSync(configPath || path.join(process.cwd(), 'remix.config.js'), 'utf8');
    console.log("-".repeat(33));
    return config;
  } catch (e) {
    console.log(
      chalk.red.bold(
        'Error: Unable to parse "remix.config.js". Please validate this file exists and try again.'
      )
    )
    // We signal to the next process in chain that there was an error.
    process.exit(1)
  }
}
