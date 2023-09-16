/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('pessoas', function (table) {
        table.increments('id').primary();
        table.string('apelido').notNullable().unique();
        table.string('nome').notNullable();
        table.date('nascimento').notNullable();
        table.json('stack');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('pessoas');
};
