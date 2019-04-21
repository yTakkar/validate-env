import { existsSync } from 'fs'

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
export const diff = (array1: any[], array2: any[]): any[] => {
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
export const fileExists = (file: string): boolean => existsSync(file)
