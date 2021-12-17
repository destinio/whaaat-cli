import chalk from 'chalk'
import clipboard from 'clipboardy'
import ora from 'ora'

import { log } from 'console'
import inquirer from 'inquirer'
import { getWhaaats } from '../useWhaaats.js'
import { header } from './header.js'

async function WhaaatsList(howManyWhaaats = '0') {
  console.log(howManyWhaaats)
  const whaaats = await getWhaaats()

  header()

  if (!whaaats.length) {
    log('It appears you have no whats.')
    log("That's cool.")
    return
  }

  inquirer
    .prompt<{ selected: string }>({
      name: 'selected',
      message: 'Select a Whaaat to copy to your clipboard!',
      choices: whaaats.map(w => w.whaaat),
      type: 'list',
    })
    .then(async ({ selected }) => {
      header()
      console.log(chalk.bold.magentaBright(selected))
      const spinner = ora()
      spinner.spinner = 'fingerDance'
      spinner.color = 'yellow'
      spinner.start('Copying...')
      await clipboard.write(selected)

      setTimeout(() => {
        spinner.succeed('Done!')
      }, 2000)
    })
}

export { WhaaatsList }
