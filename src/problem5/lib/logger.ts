import * as bunyan from 'bunyan'
import {Stream} from 'bunyan'
import {config, LoggerConfig} from './config'


const createLogger = (config: LoggerConfig) => {
  const bunyanConfig = [] as Stream[]
  const levels = Object.keys(config.levels)

  levels.forEach(level => {
    const bunyanLevel: string = config.levels[level]
    if (!bunyanLevel) return

    if (level === 'debug' && config.level !== 'debug') return

    const logger = {level} as Stream

    if (bunyanLevel === 'STDOUT') {
      logger.stream = process.stdout
    } else if (bunyanLevel === 'STDERR') {
      logger.stream = process.stderr
    } else if (bunyanLevel) {
      logger.path = bunyanLevel
    } else {
      return
    }

    bunyanConfig.push(logger)
  })

  return bunyan.createLogger({name: config.name, streams: bunyanConfig})
}

export const log = createLogger(config.logger)
