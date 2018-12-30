const chalk = require('chalk')

const colorsByType = {
  info: chalk.blue,
  warn: chalk.green,
  error: chalk.bgRed,
  success: chalk.hex('#f1a550').bold,
}

const emojisByType = {
  info: 'ℹ',
  warn: '⚠️',
  error: '❌',
  success: '✅ ️️',
}

const log = type => mssg => {
  const colorFn = colorsByType[type]
  const emoji = emojisByType[type]
  console.log(colorFn(`${emoji} ${mssg}`))
}

module.exports = {
  info: log('info'),
  warn: log('warn'),
  error: mssg => {
    log('error')(mssg)
    process.env.NODE_ENV !== 'test' && process.exit(1)
  },
  success: log('success'),
}
