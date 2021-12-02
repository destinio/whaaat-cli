import { log } from 'console'
import { getWhaaats } from '../getWhaaats.js'

async function WhaaatsList() {
  const whaaats = await getWhaaats()

  if (!whaaats.length) {
    log('It appears you have no whats.')
    log("That's cool.")
    return
  }

  whaaats.forEach(w => console.log(w))
}

export { WhaaatsList }
