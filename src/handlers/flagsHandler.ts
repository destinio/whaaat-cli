import { WhaaatsList } from '../components/whaaatsList.js'

interface Flags {
  list: boolean
}

async function flagsHandler(list: Flags, inputs: string[]) {
  list && (await WhaaatsList(inputs[0]))
}

export { flagsHandler, Flags }
