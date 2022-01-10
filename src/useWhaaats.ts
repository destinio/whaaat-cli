import fs from 'fs-jetpack'
import { homedir } from 'os'
import path from 'path'
import { v4 } from 'uuid'
import { spinner } from './components/spinner.js'
import { createWhaaatFile } from './createWhaaatFile.js'

async function getWhaaats() {
  const data: Whaaat[] = await fs.readAsync(path.resolve(homedir(), './whaaat.json'), 'json')

  if (!data) {
    createWhaaatFile()
      .then(async () => await getWhaaats())
      .catch(err => console.log(err))
  }

  return data.sort((a, b) => b.lastUpdated - a.lastUpdated)
}

async function updateWhaaats(newWhaaats: Whaaat[]) {
  fs.writeAsync(path.resolve(homedir(), './whaaat.json'), newWhaaats)
}

async function updateLastUsed(id: string) {
  const whaaats = await getWhaaats()

  const newWhaaats = whaaats.map(whaaat => {
    if (whaaat.id === id) {
      return {
        ...whaaat,
        lastUpdated: Date.now(),
      }
    }
    return whaaat
  })

  await updateWhaaats(newWhaaats)
}

async function addWhaaat(whaaat: string) {
  const whaaats = await getWhaaats()
  const newWhaaat: Whaaat = {
    whaaat,
    id: v4(),
    dateCreated: Date.now(),
    lastUpdated: Date.now(),
  }

  const newWhaaats = [newWhaaat, ...whaaats]

  spinner('Adding Whaaat...', async () => await updateWhaaats(newWhaaats))
}

export { getWhaaats, addWhaaat, updateWhaaats, updateLastUsed }
