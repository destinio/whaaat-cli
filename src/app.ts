import fs from 'fs-jetpack'

import { homedir } from 'os'
import { resolve } from 'path'
import { runWhaaat } from './runWhaaat.js'
import { createWhaaatFile } from './createWhaaatFile.js'

const WHAAAT_PATH = resolve(homedir(), './whaaat.json')

async function app() {
  const isWhaaatFile = await fs.existsAsync(WHAAAT_PATH)

  if (!isWhaaatFile) {
    await createWhaaatFile()
  } else {
    await runWhaaat()
  }
}

export { app }
