exports.up = function (knex) {
  return knex.schema
    .withSchema("public")
    .createTable("note_types", function (table) {
      table.uuid("id").primary();
      table.string("note_type").notNullable().unique();
      table.boolean("is_disabled").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("note_types");
};
