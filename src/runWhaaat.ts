import { help } from './components/help.js'
import meow from 'meow'
import { addWhaaat } from './addWhaaat.js'
import { Flags, flagsHandler } from './handlers/flagsHandler.js'

const { log } = console

interface Meow {
  flags: Flags
  input: string[]
}

async function runWhaaat() {
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
    log(help())
    return
  }

  if (!flagExist) {
    console.log('adding whaaat')
    addWhaaat(inputs.join(' '))
    return
  }

  flagsHandler(flags, inputs)
}

export { runWhaaat }
