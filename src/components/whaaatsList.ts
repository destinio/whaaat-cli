import inquirer from 'inquirer'
import { getWhaaats } from '../useWhaaats.js'
import { copy } from '../utils/index.js'
import { header } from './header.js'
import { say } from './message.js'
import { spinner } from './spinner.js'

async function WhaaatsList(howManyWhaaats = '0') {
  // TODO: add pagination: howManyWhaaats = '5'
  console.log(howManyWhaaats)
  const whaaats = await getWhaaats()

  header()

  if (!whaaats.length) {
    say('It appears you have no whats.')
    say("That's cool.")
    // TODO: add a way to add a new whaaat if there are none
    return
  }

  inquirer
    .prompt<{ selected: string }>({
      name: 'selected',
      message: 'Select a Whaaat to copy to your clipboard!',
      choices: ['cancel', ...whaaats.map(w => w.whaaat)],
      default: 'cancel',
      type: 'list',
    })
    .then(async ({ selected }) => {
      header()
      if (selected === 'cancel') {
        say('Canceled. Have a good one!!')
        return
      }

      say(selected)

      spinner('Copying to clipboard...', async () => await copy(selected))
    })
}

export { WhaaatsList }
