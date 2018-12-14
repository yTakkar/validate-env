#!/usr/bin/env node

const argv = require('yargs').argv
const { warn, error, success } = require('./lib/logger')
const { diff, getEnvKeys, fileExists, mismatchedKeys } = require('./lib/helpers')

// Check if arguments are provided
if (!argv.sample) error('Sample env file missing!')
if (!argv.env) error('Env file to check missing!')

// Check if provided env files exists
if (!fileExists(argv.sample)) error('Sample env file is not a valid file!')
if (!fileExists(argv.env)) error('Env file is not a valid file!')

// Get keys from env files
const sampleKeys = getEnvKeys(argv.sample)
const envKeys = getEnvKeys(argv.env)

// Get missing keys [Present in sample, but not in env]
const missingKeys = diff(sampleKeys, envKeys)

// Get extra keys [Present in env, but not in sample]
const extraKeys = diff(envKeys, sampleKeys)

// Returns an array containing objects with key & mismatchType
const mKeys = mismatchedKeys(missingKeys, extraKeys)

if (!mKeys.length) {
  success('No keys misimatched. You\'re good to to :)')
} else {
  mKeys.forEach(({ key, mismatchType }) => {
    warn(`"${key}" env variable ${mismatchType} in ${argv.env} file.`)
  })
}
