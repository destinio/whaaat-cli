import chalk from 'chalk'
import ora from 'ora'

async function spinner(message: string, callback: () => void) {
  const spinner = ora()

  spinner.spinner = 'fingerDance'
  spinner.color = 'yellow'
  spinner.start(chalk.bold.cyanBright(message))

  callback && callback()

  setTimeout(() => {
    spinner.succeed('Done!')
  }, 2000)
}

export { spinner }
