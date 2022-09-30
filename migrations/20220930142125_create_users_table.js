exports.up = function (knex) {
  return knex.schema
    .withSchema("public")
    .createTable("users", function (table) {
      table.uuid("id").primary();
      table.string("user_name").notNullable();
      table.string("profile_pic").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
