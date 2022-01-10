function help() {
  return `
  Welcome to WHAAAT!

  A non-complex list app for things that make you go whaaat!!!

  Usage:
    whaaat "What to add to WHAAATs"

    Options:
    --add, -a <string>    WHAAAT to add to WHAAATs
    --limit, -l           Limit the number of WHAAATs to display
    --edit, -e            Edit/Delete WHAAATs
    
  Examples:
    whaaat "This is a WHAAAT"
    whaaat "https://destin.io"
    whaaat --limit 5
    whaaat --edit
    `
}

export { help }
