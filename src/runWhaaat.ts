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
    // allowUnknownFlags: false,
    flags: {
      list: {
        type: 'boolean',
        alias: 'l',
      },
    },
  }) as Meow

  // if no flags run helper text
  const flagExist = Object.values(flags).includes(true)

  if ((!flagExist && !inputs.length) || inputs.length > 1) {
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
