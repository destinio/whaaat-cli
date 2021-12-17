import chalk from 'chalk'

import { log } from 'console'
import { getWhaaats } from '../useWhaaats.js'
import { clear } from '../utils/clear.js'

async function WhaaatsList(howManyWhaaats?: string) {
  const whaaats = await getWhaaats()

  if (!whaaats.length) {
    log('It appears you have no whats.')
    log("That's cool.")
    return
  }

  clear()

  console.log(`${chalk.bold.magentaBright.inverse('Here are your whaaats:')}`)
  if (!Number(howManyWhaaats)) {
    whaaats.forEach(w => console.log(` ${w.whaaat}`))
    return
  }

  whaaats.slice(0, Number(howManyWhaaats)).forEach(w => console.log(w.whaaat))
}

export { WhaaatsList }
