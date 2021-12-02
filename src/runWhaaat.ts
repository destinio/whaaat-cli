async function help() {
  console.log(`
  Welcome to WHAAAT!

  A non-complex list app for things that make you go whaaat!!!

  Usage:
    whaaat "What to add to WHAAATs"

  Options:
    --all, --list, -l    List all WHAAATs
    --add, -a <string>   WHAAAT to add to WHAAATs 
    --only <number>      Return spesific number of WHAAATs
    
  Examples:
    whaaat "This is a WHAAAT"
    whaaat "https://destin.io"
    whaaat --add "https://destin.io"
    whaaat -a https://destin.io
    whaaat --list
    `)
}

async function runWhaaat() {
  const possibleWhaaat = process.argv[2]

  if (
    !possibleWhaaat ||
    possibleWhaaat.length < 2 ||
    possibleWhaaat.includes('-')
  ) {
    console.log(typeof possibleWhaaat)
    help()
  } else {
    console.log(typeof possibleWhaaat)
    console.log(`Adding:`)
    console.log(`${possibleWhaaat}`)
    console.log(`To your WHAAATs`)
  }
}

export { runWhaaat }
