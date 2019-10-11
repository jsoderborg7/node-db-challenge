
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("project_name").notNullable();
      tbl.string("project_description");
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("task_description").notNullable();
      tbl.string("task_notes");
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("resource_name").notNullable().unique();
      tbl.string("resource_description");
    })
    .createTable("project_tasks", tbl => {
      tbl.increments();
      tbl
        .integer("task_id")
        .unsigned()
        .notNullable()
        .unique()
        .references("id")
        .inTable("tasks");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
    })
    .createTable("project_resources", tbl => {
      tbl.increments();
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("project_tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
