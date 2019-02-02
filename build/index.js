#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const argv = require('yargs').argv;
const index_1 = require("./helpers/index");
const logger_1 = __importDefault(require("./helpers/logger"));
const getEnvConfig_1 = require("./helpers/getEnvConfig");
// Check if arguments are provided
if (!argv.sample)
    logger_1.default.error('Sample env file missing!');
if (!argv.env)
    logger_1.default.error('Env file to check missing!');
// Check if provided env files exists
if (!index_1.fileExists(argv.sample))
    logger_1.default.error('Sample env file is not a valid file!');
if (!index_1.fileExists(argv.env))
    logger_1.default.error('Env file is not a valid file!');
// Get Config from env files
const sampleConfig = getEnvConfig_1.getEnvConfig(argv.sample);
const envConfig = getEnvConfig_1.getEnvConfig(argv.env);
// Get keys from env files
const sampleKeys = Object.keys(sampleConfig);
const envKeys = Object.keys(envConfig);
// Get missing keys [Present in sample, but not in env]
const missingKeys = index_1.diff(sampleKeys, envKeys);
// Get extra keys [Present in env, but not in sample]
const extraKeys = index_1.diff(envKeys, sampleKeys);
// Get empty keys
const emptyKeys = envKeys.filter(envKey => envConfig[envKey] === '');
// Returns an array containing objects with key & mismatchType
const mKeys = getEnvConfig_1.mismatchedKeys(missingKeys, extraKeys);
if (emptyKeys.length) {
    emptyKeys.forEach(emptyKey => {
        logger_1.default.info(`"${emptyKey}" key is empty in "${argv.env}" file!`);
    });
}
else if (mKeys.length) {
    mKeys.forEach(({ key, mismatchType }) => {
        logger_1.default.warn(`"${key}" key ${mismatchType} in "${argv.env}" file!`);
    });
}
else {
    logger_1.default.success('No keys mismatched. You\'re good to to :)');
}
//# sourceMappingURL=index.js.map