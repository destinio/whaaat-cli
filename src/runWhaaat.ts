import { help } from './components/help.js'
import meow from 'meow'

const { log } = console

async function runWhaaat() {
  const cli = meow(help(), {
    importMeta: import.meta,
    flags: {
      list: {
        type: 'boolean',
        alias: 'l',
      },
    },
  })

  console.log(Object.values(cli.unnormalizedFlags))
  // const possibleWhaaat = process.argv.splice(2)

  // if (
  //   !possibleWhaaat ||
  //   possibleWhaaat.length < 2 ||
  //   possibleWhaaat.includes('-')
  // ) {
  //   help()
  // } else {
  //   log(`Adding:`)
  //   log(`${possibleWhaaat}`)
  //   log(`To your WHAAATs`)
  // }
}

export { runWhaaat }
