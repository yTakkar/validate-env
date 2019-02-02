"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
/**
 * Returns keys & values from the provided env file
 *
 * @param {String} env Env filepath
 * @returns {Object} An object with key-value pairs.
 */
exports.getEnvConfig = (env) => {
    const fileContent = fs_1.readFileSync(env, 'utf8');
    const lines = fileContent.split('\n').filter(l => l !== '');
    return lines.reduce((obj, line) => {
        const [key, value] = line.trim().split('=');
        obj[key] = value ? value.replace(/["']/g, '') : '';
        return obj;
    }, {});
};
/**
 * Function to merge missing & extra keys and enhance them with mismatchType so we don't have to write 2 conditions for logging.
 *
 * @param {Array} missing Array containing missing keys
 * @param {Array} extra Array containing extra keys
 * @returns {Array} Returns an array with objects containing key & mismatchType
 */
exports.mismatchedKeys = (missing, extra) => {
    const keys = [...missing, ...extra];
    return keys.reduce((array, key) => {
        array.push({
            key,
            mismatchType: missing.includes(key) ? 'missing' : 'extra',
        });
        return array;
    }, []);
};
//# sourceMappingURL=getEnvConfig.js.map