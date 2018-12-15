#!/usr/bin/env node

const argv = require('yargs').argv
const { warn, error, success, info } = require('./helpers/logger')
const { diff, fileExists } = require('./helpers')
const { mismatchedKeys, getEnvConfig } = require('./helpers/getEnvConfig')

// Check if arguments are provided
if (!argv.sample) error('Sample env file missing!')
if (!argv.env) error('Env file to check missing!')

// Check if provided env files exists
if (!fileExists(argv.sample)) error('Sample env file is not a valid file!')
if (!fileExists(argv.env)) error('Env file is not a valid file!')

// Get Config from env files
const sampleConfig = getEnvConfig(argv.sample)
const envConfig = getEnvConfig(argv.env)

// Get keys from env files
const sampleKeys = Object.keys(sampleConfig)
const envKeys = Object.keys(envConfig)

// Get missing keys [Present in sample, but not in env]
const missingKeys = diff(sampleKeys, envKeys)

// Get extra keys [Present in env, but not in sample]
const extraKeys = diff(envKeys, sampleKeys)

// Get empty keys
const emptyKeys = envKeys.filter(envKey => envConfig[envKey] === '')

// Returns an array containing objects with key & mismatchType
const mKeys = mismatchedKeys(missingKeys, extraKeys)

if (emptyKeys.length) {
  emptyKeys.forEach(emptyKey => {
    info(`"${emptyKey}" key is empty in "${argv.env}" file!`)
  })
} else if (mKeys.length) {
  mKeys.forEach(({ key, mismatchType }) => {
    warn(`"${key}" key ${mismatchType} in "${argv.env}" file!`)
  })
} else {
  success('No keys mismatched. You\'re good to to :)') // eslint-disable-line prettier/prettier
}
