const { readFileSync, existsSync } = require('fs')

/**
 * Returns keys from the provided env file
 *
 * @param {String} env Env filepath
 * @returns {Array} keys
 */
const getEnvKeys = env => {
  const fileContent = readFileSync(env, 'utf8')
  const lines = fileContent.split('\n').filter(l => l !== '')
  return lines.reduce((arr, line) => {
    const {0: first} = line.trim().split('=')
    arr.push(first)
    return arr
  }, [])
}

/**
 * Performs a check and returns a list of keys missing in array1 but present in array2
 *
 * @param {Array} array1 First array
 * @param {Array} array2 Second array
 * @returns {Array} list of missing keys
 *
 * @example
 * diff([1,2,3], [2,3]) :=> [1]
 * diff([1,2], [1,2]) :=> []
 */
const diff = (array1, array2) => {
  return array1.reduce((arr, key) => {
    if (!array2.includes(key)) arr.push(key)
    return arr
  }, [])
}

/**
 * Function to check whether the provided exists or not
 *
 * @param {String} file File to check it's existence
 * @returns {Boolean} Returns a Boolean
 */
const fileExists = file => existsSync(file)

/**
 * Function to merge missing & extra keys and enhance them with mismatchType so we don't have to write 2 conditions for logging.
 *
 * @param {Array} missing Array containing missing keys
 * @param {Array} extra Array containing extra keys
 * @returns {Array} Returns an array with objects containing key & mismatchType
 */
const mismatchedKeys = (missing, extra) => {
  const keys = [...missing, ...extra]
  return keys.reduce((array, key) => {
    array.push({
      key,
      mismatchType: missing.includes(key) ? 'missing' : 'extra'
    })
    return array
  }, [])
}

module.exports = {
  getEnvKeys,
  diff,
  fileExists,
  mismatchedKeys
}
