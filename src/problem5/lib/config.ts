import * as path from 'path'
import * as yamlConfig from 'node-yaml-config'


export interface LoggerConfig {
  name: string
  level: string
  levels: {[key: string]: string} & {
    trace: string
    debug: string
    info: string
    warn: string
    error: string
    fatal: string
  }
}

interface CommonConfig {
  api: {
    port: number
  }
  secret: {
    path: string
  }
  logger: LoggerConfig
}

interface DatabaseConfig {
  username: string
  password: string
  database: string
  host: string
  port: number
  dialect: string
}

export interface AppConfig extends CommonConfig {
  database: DatabaseConfig
}


const env = process.env.NODE_ENV || 'development'
const configPath = path.join(__dirname, '../config/')
const commonConfig = yamlConfig.load(`${configPath}common.yml`) as CommonConfig
const secretPath = commonConfig.secret.path || configPath

export const config = {
  ...commonConfig,
  database: require(`${secretPath}database.json`)[env] as DatabaseConfig,
} as AppConfig
