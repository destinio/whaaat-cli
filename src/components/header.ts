import cfonts from 'cfonts'
import { clear } from '../utils/index.js'

function header() {
  // TODO: need better headers font
  clear()
  cfonts.say('WHAAAT!!', {
    font: 'chrome',
    colors: ['cyanBright'],
    gradient: true,
  })
}

export { header }
