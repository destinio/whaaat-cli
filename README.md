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
  --limit, -l <number>  Limit the number of WHAAATs to display
  --edit, -e            Edit/Delete WHAAATs

Examples:
  whaaat "This is a WHAAAT"
  whaaat "https://destin.io"
  whaaat --add "https://destin.io"
  whaaat -a https://destin.io
  whaaat --limit 4
  whaaat --edit
```

```Bash

# Create a whaaat
w "This is a string whaaat"
w This is a non quoted whaaat

# List last 5 ssed whaaats
w --limit 5
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
