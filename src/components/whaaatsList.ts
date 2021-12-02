import { log } from 'console'
import { getWhaaats } from '../getWhaaats.js'

async function WhaaatsList(howManyWhaaats: string) {
  const whaaats = await getWhaaats()

  if (!whaaats.length) {
    log('It appears you have no whats.')
    log("That's cool.")
    return
  }

  const howManyWhaaatsNumber = Number(howManyWhaaats)

  if (!howManyWhaaatsNumber) {
    whaaats.forEach(w => console.log(w.whaaat))
    return
  }

  whaaats.slice(0, howManyWhaaatsNumber).forEach(w => console.log(w.whaaat))
}

export { WhaaatsList }
