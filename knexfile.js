// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      user: "postgres",
      password: "Callvita123",
      database: "notes",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
