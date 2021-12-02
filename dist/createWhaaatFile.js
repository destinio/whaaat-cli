var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from 'inquirer';
import os from 'os';
import path from 'path';
import fs from 'fs';
const HOME = os.homedir();
const WHAAAT_PATH = path.resolve(HOME, './.whaaat');
function createWhaaatFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const { install } = yield inquirer.prompt([
            {
                type: 'confirm',
                name: 'install',
                message: 'It seems you have not set up WHAAAT? You want to install?',
            },
        ]);
        if (!install) {
            console.log("Ok run 'npm uninstall whaaat' to remove the package");
            return;
        }
        console.log(`Creating .whaaat in ${HOME}`);
        fs.writeFileSync(WHAAAT_PATH, '## WHAAAT DATA ##');
    });
}
export { createWhaaatFile };
