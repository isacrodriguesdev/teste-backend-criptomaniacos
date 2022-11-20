import knex from "knex"
// @ts-ignore
import knexStringcase from 'knex-stringcase';

const configFromKnexReadme = {
  client: 'pg',
  connection: {
    host: 'peanut.db.elephantsql.com',
    user: 'ovbiwmxw',
    database: 'ovbiwmxw',
    password: 'DhSraA7-SsMfYOxype0g896yBH6nE3Dw',
  },
  debug: false,
  pool: { min: 1, max: 3 }
}

const options = knexStringcase(configFromKnexReadme);
export default knex(options);