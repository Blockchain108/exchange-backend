module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'Crypto-Exchange',
      user:     'Crypto-Exchange'
    },
    seeds: {
      directory: './db/seeds'
    },
    migrations: {
      directory: './db/migrations'
    }
  },
  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'Crypto-Exchange_test',
      user:     'Crypto-Exchange_test'
    },
    seeds: {
      directory: './db/seeds'
    },
    migrations: {
      directory: './db/migrations'
    }
  },
  admin: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: process.env.USER,
      user:     process.env.USER
    },
  },
  travis: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'postgres',
      user:     'postgres'
    },
  }
};
