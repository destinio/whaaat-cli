import chalk from 'chalk'

const sayColors = {
  green: chalk.greenBright,
  red: chalk.redBright,
  blue: chalk.blueBright,
  yellow: chalk.yellowBright,
  magenta: chalk.magentaBright,
  cyan: chalk.cyanBright,
}

/**
 * Use this function to print messages to the console
 * @param message Text to be displayed in the console
 * @param color Color of the text to be displayed in the console (default: cyan)
 */
function say(message: string, color: keyof typeof sayColors = 'cyan') {
  console.log(sayColors[color](message))
}

export { say }
