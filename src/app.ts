import meow from 'meow'

import { help } from './components/help.js'
import { WhaaatsList } from './components/whaaatsList.js'
import { flagsHandler } from './handlers/flagsHandler.js'
import { addWhaaat } from './useWhaaats.js'

interface Meow {
  flags: Flags
  input: string[]
}

;(async () => {
  const { input: inputs, flags } = meow(help(), {
    importMeta: import.meta,
    flags: {
      limit: {
        type: 'number',
        alias: 'l',
        default: 0,
      },
      edit: {
        type: 'boolean',
        alias: 'e',
        default: false,
      },
    },
  }) as Meow

  const flagExist = Object.values(flags).includes(true) || flags.limit > 0

  if (!inputs.length && !flagExist) {
    WhaaatsList()
    return
  }

  if (!flagExist) {
    addWhaaat(inputs.join(' '))
    return
  }

  flagsHandler(flags, inputs)
})()
