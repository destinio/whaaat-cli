import { listWhaaats } from '../components/listWhaaats.js'

interface Flags {
  list: boolean
}

async function flagsHandler({ list }: Flags) {
  list && (await listWhaaats())
}

export { flagsHandler, Flags }
