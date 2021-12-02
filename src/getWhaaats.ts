import { readFile } from 'fs/promises'
import { homedir } from 'os'
import { resolve } from 'path'

interface Whaaat {
  whaaat: string
  id: string
  dateCreated: Date
}

async function getWhaaats(): Promise<Whaaat[]> {
  const whaaatsRAW = await readFile(resolve(homedir(), './whaaat.json'), 'utf-8')
  return JSON.parse(whaaatsRAW)
}

export { getWhaaats, Whaaat }
