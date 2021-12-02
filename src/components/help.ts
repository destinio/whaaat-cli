function help() {
  return `
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
    `
}

export { help }
