exports.up = function (knex) {
  return knex.schema
    .withSchema("public")
    .createTable("notes", function (table) {
      table.uuid("id").primary();
      table.string("title").notNullable();
      table.string("body").notNullable();
      table
        .string("type")
        .notNullable()
        .references("note_type")
        .inTable("public.note_types");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("notes");
};
