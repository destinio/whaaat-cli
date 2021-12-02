import { homedir } from 'os'
import { existsSync } from 'fs'
import { resolve } from 'path'
import { runWhaaat } from './runWhaaat.js'
import { createWhaaatFile } from './createWhaaatFile.js'

const WHAAAT_PATH = resolve(homedir(), './.whaaat')

async function app() {
  if (!existsSync(WHAAAT_PATH)) {
    await createWhaaatFile()
  } else {
    await runWhaaat()
  }
}

export { app }
