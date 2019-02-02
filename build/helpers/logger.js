"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require('chalk');
const index_1 = require("../types/index");
const colorsByType = {
    info: chalk.blue,
    warn: chalk.green,
    error: chalk.bgRed,
    success: chalk.hex('#f1a550').bold,
};
const emojisByType = {
    info: 'ℹ',
    warn: '⚠️',
    error: '❌',
    success: '✅ ️️',
};
const log = (type) => (mssg) => {
    const colorFn = colorsByType[type];
    const emoji = emojisByType[type];
    console.log(colorFn(`${emoji} ${mssg}`));
};
exports.default = {
    info: log(index_1.ELogType.INFO),
    warn: log(index_1.ELogType.WARN),
    error: (mssg) => {
        log(index_1.ELogType.ERROR)(mssg);
        process.env.NODE_ENV !== 'test' && process.exit(1);
    },
    success: log(index_1.ELogType.SUCCESS),
};
//# sourceMappingURL=logger.js.map