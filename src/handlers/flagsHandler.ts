import { WhaaatsList } from '../components/whaaatsList.js'

interface Flags {
  list: boolean
}

async function flagsHandler({ list }: Flags) {
  list && (await WhaaatsList())
}

export { flagsHandler, Flags }
