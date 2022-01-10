import inquirer from 'inquirer'
import { getWhaaats, updateLastUsed } from '../useWhaaats.js'
import { copy } from '../utils/index.js'
import { header } from './header.js'
import { say } from './message.js'
import { spinner } from './spinner.js'
import open from 'open'

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
    message: 'Select a Whaaat to do things with!',
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

  const urlRegEx =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi

  say(selected.whaaat)

  await updateLastUsed(selected.id)

  if (urlRegEx.test(selected.whaaat)) {
    // options
    const { openUrl } = await inquirer.prompt<{ openUrl: string }>({
      name: 'openUrl',
      type: 'list',
      message: 'Would you like to visit or cop the url?',
      choices: ['visit', 'copy', 'cancel'],
      default: 'visit',
    })

    switch (openUrl) {
      case 'copy':
        spinner(`Copying ${selected.whaaat} to clipboard 📋...`, async () => {
          await copy(selected.whaaat)
        })
        return
      case 'visit':
        spinner(`Opening ${selected.whaaat} is default browser 🚀`, async () => {
          await open(selected.whaaat)
        })
        return
      default:
        say('Canceled. Have a good one! 👋')
        return
    }
  }

  spinner('Copying to clipboard...', async () => {
    await copy(selected.whaaat)
  })
}

export { WhaaatsList }
