module.exports = {
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/))\\.ts$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  coverageDirectory: './coverage/',
  collectCoverage: true,
  testPathIgnorePatterns: [
    '/node_modules',
    '/build'
  ],
}
