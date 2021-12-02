import { homedir } from 'os'
import { existsSync } from 'fs'
import { resolve } from 'path'
import { runWhaaat } from './runWhaaat.js'
import { createWhaaatFile } from './createWhaaatFile.js'
import { readFile } from 'fs/promises'

const WHAAAT_PATH = resolve(homedir(), './whaaat.json')

async function app() {
  const whaaatsRaw = await readFile(WHAAAT_PATH, 'utf-8')

  if (!existsSync(WHAAAT_PATH) || !whaaatsRaw.length) {
    await createWhaaatFile()
  } else {
    await runWhaaat()
  }
}

export { app }
