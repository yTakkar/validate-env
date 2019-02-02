import chalk from 'chalk'
import { ELogType } from '../types/index'

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

const log = (type: ELogType) => (mssg: string): void => {
  const colorFn = colorsByType[type]
  const emoji = emojisByType[type]
  console.log(colorFn(`${emoji} ${mssg}`))
}

export default {
  info: log(ELogType.INFO),
  warn: log(ELogType.WARN),
  error: (mssg: string) => {
    log(ELogType.ERROR)(mssg)
    process.env.NODE_ENV !== 'test' && process.exit(1)
  },
  success: log(ELogType.SUCCESS),
}
