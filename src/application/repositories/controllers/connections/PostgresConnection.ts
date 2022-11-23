import knex from "knex"
const knexStringcase = require('knex-stringcase'); 

const configFromKnexReadme = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
  },
  debug: false,
  pool: { min: 1, max: 3 }
}

const options = knexStringcase(configFromKnexReadme);
export default knex(options);