import { appendFileSync } from 'fs'
import { EOL, homedir } from 'os'
import { resolve } from 'path'

function addWhaaat(whaaat: string) {
  console.log(whaaat)
}

export { addWhaaat }
