var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { homedir } from 'os';
import { existsSync } from 'fs';
import { resolve } from 'path';
import { runWhaaat } from './runWhaaat.js';
import { createWhaaatFile } from './createWhaaatFile.js';
const WHAAAT_PATH = resolve(homedir(), './.whaaat');
function app() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!existsSync(WHAAAT_PATH)) {
            yield createWhaaatFile();
        }
        else {
            yield runWhaaat();
        }
    });
}
export { app };
