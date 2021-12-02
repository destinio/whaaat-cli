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

  const organizedWhaaats = whaaats.sort((a, b) => b.dateCreated - a.dateCreated)

  if (!howManyWhaaatsNumber) {
    organizedWhaaats.forEach(w => console.log(w.whaaat, w.dateCreated))
    return
  }

  organizedWhaaats.slice(0, howManyWhaaatsNumber).forEach(w => console.log(w.whaaat))
}

export { WhaaatsList }
