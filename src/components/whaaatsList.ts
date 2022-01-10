import inquirer from 'inquirer'
import { getWhaaats } from '../useWhaaats.js'
import { copy } from '../utils/index.js'
import { header } from './header.js'
import { say } from './message.js'
import { spinner } from './spinner.js'

async function WhaaatsList(howManyWhaaats = 0) {
  const whaaats = !howManyWhaaats
    ? await getWhaaats()
    : (await getWhaaats()).slice(0, howManyWhaaats)

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
      choices: [
        ...whaaats.map(w => w.whaaat),
        new inquirer.Separator(),
        'cancel',
        new inquirer.Separator(),
      ],
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
