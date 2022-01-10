import chalk from 'chalk'

const sayColors = {
  green: chalk.greenBright,
  red: chalk.redBright,
  blue: chalk.blueBright,
  yellow: chalk.yellowBright,
  magenta: chalk.magentaBright,
  cyan: chalk.cyanBright,
}

function say(message: string, color: keyof typeof sayColors = 'cyan') {
  console.log(sayColors[color](message))
}

export { say }
