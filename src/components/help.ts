function help() {
  return `
  Welcome to WHAAAT!

  A non-complex list app for things that make you go whaaat!!!

  Usage:
    whaaat "What to add to WHAAATs"

    Options:
    --add, -a <string>    WHAAAT to add to WHAAATs
    --list, -l     List all WHAAATs
    --edit, -e            Edit/Delete WHAAATs
    
  Examples:
    whaaat "This is a WHAAAT"
    whaaat "https://destin.io"
    whaaat --add "https://destin.io"
    whaaat -a https://destin.io
    whaaat --list
    whaaat --edit
    `
}

export { help }
