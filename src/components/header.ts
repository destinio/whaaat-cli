import cfonts from 'cfonts'

function header() {
  process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H')
  cfonts.say('WHAAAT!!', {
    font: 'chrome',
    colors: ['cyanBright'],
    gradient: true,
  })
}

export { header }
