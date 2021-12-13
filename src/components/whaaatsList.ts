import chalk from 'chalk'

import { log } from 'console'
import { getWhaaats } from '../getWhaaats.js'
import { clear } from '../utils/clear.js'

async function WhaaatsList(howManyWhaaats: string) {
  const whaaats = await getWhaaats()

  if (!whaaats.length) {
    log('It appears you have no whats.')
    log("That's cool.")
    return
  }

  clear()
  const howManyWhaaatsNumber = Number(howManyWhaaats)

  const organizedWhaaats = whaaats.sort((a, b) => b.dateCreated - a.dateCreated)

  console.log(`${chalk.bold.magentaBright('Here are your whaaats:\n')}`)
  if (!howManyWhaaatsNumber) {
    organizedWhaaats.forEach(w => console.log(` ${w.whaaat}`))
    return
  }

  organizedWhaaats.slice(0, howManyWhaaatsNumber).forEach(w => console.log(w.whaaat))
}

export { WhaaatsList }
