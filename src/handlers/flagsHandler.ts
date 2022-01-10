import { WhaaatsList } from '../components/whaaatsList.js'
import { WhaaatsListEdit } from '../components/whaaatsListEdit.js'

async function flagsHandler({ limit, edit }: Flags, inputs: (string | number)[]) {
  limit && (await WhaaatsList(limit))
  edit && (await WhaaatsListEdit())

  inputs && console.log('Inputs are not supported yet')
}

export { flagsHandler }
