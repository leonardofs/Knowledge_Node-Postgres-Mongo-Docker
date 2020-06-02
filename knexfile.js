
module.exports = {
    client: 'postgresql',
    connection: {
      host: 'postgres',
      database: 'node_crud',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './app/Data/migrations'
    }
};
