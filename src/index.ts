import { createLogger } from "@trustpilot/logger"

const logger = createLogger({ level: "error" })
const mysql = require("mysql")
const axiosRequest = require("axios")

const HOURS_TO_KEEP_DATA = 24
const DAYS_TO_KEEP_DELETED_DATA_INFO = 180
const DAYS_TO_KEEP_CREATION_REQUESTS_INFO = 7
const MAX_DELETION_ATTEMPTS = 10

const TESTDATA_HANDLER_HOST = process.env.TESTDATA_HANDLER_HOST
const DB_ACCESS = {
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}

export async function handler() {
  let DBConnection: any
  try {
    DBConnection = await mysql.createConnection({
      host: DB_ACCESS.host,
      port: DB_ACCESS.port,
      user: DB_ACCESS.user,
      password: DB_ACCESS.password,
      database: DB_ACCESS.database,
      multipleStatements: true,
    })
  }
  catch (e: any) {
    throw e
  } finally {
    DBConnection?.end?.()
  }
}
