// Update with your config settings.

module.exports = {
  
    client: 'postgresql',
    connection: {
      database: 'node_crud',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  
};
