import inquirer from 'inquirer'
import { header } from './header.js'
import { getWhaaats, updateWhaaats } from '../useWhaaats.js'
import chalk from 'chalk'
import { say } from './message.js'
import { spinner } from './spinner.js'

async function WhaaatsListEdit() {
  const whaaats = await getWhaaats()

  header()

  if (!whaaats.length) {
    say('It appears you have no whats.\n"That\'s cool."')
    return
  }

  const { selected } = await inquirer.prompt<{ selected: string[] }>({
    name: 'selected',
    message: 'Which whaaats would you like to delete?',
    type: 'checkbox',
    default: 'cancel',
    choices: [
      ...whaaats.map(w => {
        return {
          name: w.whaaat,
          value: w.id,
        }
      }),
      new inquirer.Separator(),
      'cancel',
      new inquirer.Separator(),
    ],
  })

  header()

  if (selected.includes('cancel') || !selected.length) {
    header()
    say('Canceled! Have a good one!')
    return
  }

  const newData = [...whaaats].filter(w => !selected.includes(w.id))

  say(
    `Deleting ${chalk.greenBright.bold(selected.length)} ${
      selected.length > 1 ? 'whaaats' : 'whaaat'
    } `
  )

  spinner(`Deleting...`, async () => await updateWhaaats(newData))
}

export { WhaaatsListEdit }
