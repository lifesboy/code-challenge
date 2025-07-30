import {Sequelize} from 'sequelize-typescript'

const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/database.json')[env]

const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  models: [__dirname + '/**/*.model.ts'], // or [Player, Team],
  repositoryMode: true,
})

export default sequelize
