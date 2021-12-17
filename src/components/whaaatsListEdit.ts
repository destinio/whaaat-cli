import inquirer from 'inquirer'
import { header } from './header.js'
import { getWhaaats, updateWhaaats } from '../useWhaaats.js'
import chalk from 'chalk'
import ora from 'ora'

async function WhaaatsListEdit() {
  const whaaats = await getWhaaats()

  header()

  if (!whaaats.length) {
    console.log('It appears you have no whats.\n"That\'s cool."')
    return
  }

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
    .then(async ({ selected }) => {
      if (selected.includes('cancel') || !selected.length) {
        console.log('Canceled! Have a good one!')
      }

      header()
      const newData = [...whaaats].filter(w => !selected.includes(w.id))

      const spinner = ora()
      spinner.spinner = 'fingerDance'
      spinner.color = 'yellow'
      spinner.start(
        `Deleting ${chalk.greenBright.bold(selected.length)} ${
          selected.length > 1 ? 'whaaats' : 'whaaat'
        } `
      )
      await updateWhaaats(newData)

      setTimeout(() => {
        spinner.succeed('Done!')
      }, 2000)
    })
}

export { WhaaatsListEdit }
