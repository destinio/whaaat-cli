import { WhaaatsList } from '../components/whaaatsList.js'
import { WhaaatsListEdit } from '../components/whaaatsListEdit.js'

interface Flags {
  list: boolean
  edit: boolean
}

async function flagsHandler({ list, edit }: Flags, inputs: string[]) {
  list && (await WhaaatsList(inputs[0]))
  edit && (await WhaaatsListEdit())
}

export { flagsHandler, Flags }
