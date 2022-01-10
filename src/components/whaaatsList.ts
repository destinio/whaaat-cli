import inquirer from 'inquirer'
import { getWhaaats, updateLastUsed } from '../useWhaaats.js'
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

  const { selected } = await inquirer.prompt<{ selected: Whaaat | string }>({
    name: 'selected',
    message: 'Select a Whaaat to copy to your clipboard!',
    choices: [
      ...whaaats.map(w => ({
        name: w.whaaat,
        value: w,
      })),
      new inquirer.Separator(),
      'cancel',
      new inquirer.Separator(),
    ],
    type: 'list',
  })

  header()

  if (selected === 'cancel') {
    say('Canceled. Have a good one!!')
    return
  }

  if (typeof selected !== 'object') {
    say('Inputs are not supported yet')
    return
  }

  say(selected.whaaat)
  spinner('Copying to clipboard...', async () => {
    await copy(selected.whaaat)
    await updateLastUsed(selected.id)
  })
}

export { WhaaatsList }
