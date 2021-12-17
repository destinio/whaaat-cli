# Whaaat

![Whaaat](/repo.gif)

> A non-complex list app for things that make you go whaaat!!!

## Install

`npm i -g whaaat`

In your command line run: `whaaat` to intiallize a a **whaaat.json** file in you home directory

Created file location:
`<HOME_DIR>/whaaat.json`

You are now ready to get your WHAAAT on! Happy whaaating!!

## Usage

You can use **whaaat** or **w**

The following example use **w**

```Bash
w --help

Usage:
  whaaat "What to add to WHAAATs"

  Options:
  --add, -a <string>    WHAAAT to add to WHAAATs
  --list, -l            List all WHAAATs
  --edit, -e            Edit/Delete WHAAATs

Examples:
  whaaat "This is a WHAAAT"
  whaaat "https://destin.io"
  whaaat --add "https://destin.io"
  whaaat -a https://destin.io
  whaaat --list
  whaaat --edit
```

```Bash

# CREATE A WHAAAT
w "This is a string whaaat"
w This is a non quoted whaaat

# LIST ALL WHAAATs
w --list
# OR run
whaaat
# OR
w

# Delete WHAAATs
w --edit
```

### Example Output

```
Here are your whaaats:

 blah blah blah
 test me
 This is a test what
```
