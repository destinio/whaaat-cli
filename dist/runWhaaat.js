var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function help() {
    return __awaiter(this, void 0, void 0, function* () {
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
    `);
    });
}
function runWhaaat() {
    return __awaiter(this, void 0, void 0, function* () {
        const possibleWhaaat = process.argv[2];
        if (!possibleWhaaat ||
            possibleWhaaat.length < 2 ||
            possibleWhaaat.includes('-')) {
            console.log(typeof possibleWhaaat);
            help();
        }
        else {
            console.log(typeof possibleWhaaat);
            console.log(`Adding:`);
            console.log(`${possibleWhaaat}`);
            console.log(`To your WHAAATs`);
        }
    });
}
export { runWhaaat };
