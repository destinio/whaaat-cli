import inquirer from 'inquirer'
import os from 'os'
import path from 'path'
import fs from 'fs-jetpack'
import chalk from 'chalk'

const HOME = os.homedir()
const WHAAAT_PATH = path.resolve(HOME, './whaaat.json')

async function createWhaaatFile() {
  const { install } = await inquirer.prompt<{ install: boolean }>([
    {
      type: 'confirm',
      name: 'install',
      message: 'It seems you have not set up WHAAAT? You want to install?',
    },
  ])

  if (!install) {
    console.log("Ok run 'npm uninstall whaaat' to remove the package")
    return
  }

  console.log(`Creating whaaat.json in ${chalk.bold.greenBright(HOME)}.`)
  fs.writeAsync(WHAAAT_PATH, []).then(() =>
    console.log(`${chalk.greenBright('DONE:')} Happy whaaating!`)
  )
}

export { createWhaaatFile }
