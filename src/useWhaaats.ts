import fs from 'fs-jetpack'
import { homedir } from 'os'
import path from 'path'
import { v4 } from 'uuid'
import { createWhaaatFile } from './createWhaaatFile.js'

async function getWhaaats() {
  const data: Whaaat[] = await fs.readAsync(path.resolve(homedir(), './whaaat.json'), 'json')
  if (!data) {
    createWhaaatFile()
      .then(async () => await getWhaaats())
      .catch(err => console.log(err))
  }

  return data
}

async function updateWhaaats(newWhaaats: Whaaat[]) {
  fs.writeAsync(path.resolve(homedir(), './whaaat.json'), newWhaaats)
}

async function addWhaaat(whaaat: string) {
  const whaaats = await getWhaaats()
  const newWhaaat: Whaaat = {
    whaaat,
    id: v4(),
    dateCreated: Date.now(),
  }

  const newWhaaats = [newWhaaat, ...whaaats]

  await updateWhaaats(newWhaaats)
}

export { getWhaaats, addWhaaat, updateWhaaats }
