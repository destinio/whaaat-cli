import inquirer from 'inquirer'
import { clear } from '../utils/clear.js'
import { getWhaaats, updateWhaaats } from '../useWhaaats.js'
import chalk from 'chalk'

async function WhaaatsListEdit() {
  const whaaats = await getWhaaats()

  clear()

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

      const newData = [...whaaats].filter(w => !selected.includes(w.id))
      clear()

      console.log(
        `Deleting ${chalk.greenBright.bold(selected.length)} ${
          selected.length > 1 ? 'links' : 'link'
        } `
      )
      await updateWhaaats(newData)
    })
}

export { WhaaatsListEdit }
