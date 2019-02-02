#!/usr/bin/env node

const argv = require('yargs').argv

import { diff, fileExists } from './helpers/index'
import log from './helpers/logger'
import { mismatchedKeys, getEnvConfig } from './helpers/getEnvConfig'

// Check if arguments are provided
if (!argv.sample) log.error('Sample env file missing!')
if (!argv.env) log.error('Env file to check missing!')

// Check if provided env files exists
if (!fileExists(argv.sample)) log.error('Sample env file is not a valid file!')
if (!fileExists(argv.env)) log.error('Env file is not a valid file!')

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
    log.info(`"${emptyKey}" key is empty in "${argv.env}" file!`)
  })
} else if (mKeys.length) {
  mKeys.forEach(({ key, mismatchType }) => {
    log.warn(`"${key}" key ${mismatchType} in "${argv.env}" file!`)
  })
} else {
  log.success('No keys mismatched. You\'re good to to :)')
}
