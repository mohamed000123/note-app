exports.up = function (knex) {
  return knex.schema
    .withSchema("public")
    .createTable("media_files", function (table) {
      table
        .uuid("note_id")
        .notNullable()
        .references("id")
        .inTable("public.notes");
      table.string("media_file").notNullable();
      table.primary(["note_id", "media_file"]);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("public.media_files");
};
