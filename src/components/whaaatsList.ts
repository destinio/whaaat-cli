import chalk from 'chalk'
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
    say('Use: "whaaat "This is a what" to start whaaating.')
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

  if (typeof selected === 'string') {
    say('Canceled. Have a good one!!')
    return
  }

  say(selected.whaaat)
  await updateLastUsed(selected.id)

  spinner('Copying to clipboard...', async () => {
    await copy(selected.whaaat)
  })
}

export { WhaaatsList }
