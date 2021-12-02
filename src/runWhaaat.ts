import { help } from './components/help.js'
import meow from 'meow'

const { log } = console

async function runWhaaat() {
  const { input, unnormalizedFlags, flags } = meow(help(), {
    importMeta: import.meta,
    allowUnknownFlags: false,
    flags: {
      list: {
        type: 'boolean',
        alias: 'l',
      },
    },
  })

  // if no flags run helper text
  const flagExist = Object.values(unnormalizedFlags).includes(true)

  if (!flagExist && !input.length) {
    log(help())
    return
  }

  if (!flagExist) {
    console.log('add flag')
    console.log(input.join(' '))
    return
  }

  console.log(unnormalizedFlags)
}

export { runWhaaat }
