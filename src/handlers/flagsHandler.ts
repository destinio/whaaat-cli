import { WhaaatsList } from '../components/whaaatsList.js'
import { WhaaatsListEdit } from '../components/whaaatsListEdit.js'

async function flagsHandler({ limit, edit }: Flags) {
  limit && (await WhaaatsList(limit))
  edit && (await WhaaatsListEdit())
}

export { flagsHandler }
