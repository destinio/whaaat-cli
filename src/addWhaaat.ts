import { readFile, writeFile } from 'fs/promises'
import { homedir } from 'os'
import { resolve } from 'path'
import { Whaaat } from './getWhaaats.js'
import { v4 } from 'uuid'

const WHAAATS_FILE = resolve(homedir(), './whaaat.json')

async function addWhaaat(whaaat: string) {
  const whaaatsRaw = await readFile(WHAAATS_FILE, 'utf-8')
  const whaaatsJson = JSON.parse(whaaatsRaw)

  const newWhaaat: Whaaat = {
    whaaat,
    id: v4(),
    dateCreated: Date.now(),
  }

  const newWhaaats = [...whaaatsJson, newWhaaat]

  await writeFile(WHAAATS_FILE, JSON.stringify(newWhaaats))
}

export { addWhaaat }
