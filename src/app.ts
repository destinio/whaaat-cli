import meow from 'meow'

import { help } from './components/help.js'
import { WhaaatsList } from './components/whaaatsList.js'
import { flagsHandler } from './handlers/flagsHandler.js'
import { addWhaaat } from './useWhaaats.js'

interface Meow {
  flags: Flags
  input: string[]
}

async function app() {
  const { input: inputs, flags } = meow(help(), {
    importMeta: import.meta,
    flags: {
      list: {
        type: 'boolean',
        alias: 'l',
      },
      edit: {
        type: 'boolean',
        alias: 'e',
      },
    },
  }) as Meow

  // if no flags run helper text
  const flagExist = Object.values(flags).includes(true)

  if (!inputs.length && !flagExist) {
    WhaaatsList()
  }

  if (!flagExist) {
    console.log('adding whaaat')
    addWhaaat(inputs.join(' '))
    return
  }

  flagsHandler(flags, inputs)
}

export { app }
