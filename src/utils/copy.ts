import clipboard from 'clipboardy'

async function copy(text: string) {
  try {
    await clipboard.write(text)
  } catch (error) {
    console.log(error)
  }
}

export { copy }
