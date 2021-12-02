import { readFile } from 'fs/promises'
import { EOL, homedir } from 'os'
import path from 'path'

async function listWhaaats() {
  const whaaatsRAW = await readFile(path.resolve(homedir(), './.whaaat'), 'utf8')
  const whaaats = whaaatsRAW.split(EOL).slice(1)

  if (!whaaats.length) {
    console.log('It appears you have no whats.')
    console.log("That's cool.")
    return
  }

  console.log(whaaats)
}

export { listWhaaats }
