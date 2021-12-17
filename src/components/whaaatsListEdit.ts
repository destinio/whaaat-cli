import chalk from 'chalk'
import fs from 'fs-jetpack'

import { log } from 'console'
import inquirer from 'inquirer'
import { getWhaaats } from '../getWhaaats.js'
import { clear } from '../utils/clear.js'
import path from 'node:path'
import { homedir } from 'os'

async function WhaaatsListEdit() {
  const whaaats = await getWhaaats()

  if (!whaaats.length) {
    log('It appears you have no whats.')
    log("That's cool.")
    return
  }

  clear()

  const organizedWhaaats = whaaats.sort((a, b) => b.dateCreated - a.dateCreated)

  inquirer
    .prompt<{ selected: string[] }>({
      name: 'selected',
      message: 'Which whaaats would you like to delete?',
      type: 'checkbox',
      default: 'cancel',
      choices: [
        { name: 'cancel', value: 'cancel' },
        ...whaaats.map(w => {
          return {
            name: w.whaaat,
            value: w.id,
          }
        }),
      ],
    })
    .then(({ selected }) => {
      if (selected.includes('cancel') || !selected.length) {
        console.log('Canceled! Have a good one!')
      }

      console.log(selected)

      const newData = [...whaaats].filter(w => !selected.includes(w.id))

      fs.writeAsync(path.resolve(homedir(), './whaaat.json'), newData).then(() =>
        console.log(`${chalk.greenBright('DONE:')} Happy whaaating!`)
      )
    })
}

export { WhaaatsListEdit }
