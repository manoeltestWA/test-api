import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Order', table => {
    table.increments('id').primary();
    table.string('description', 100).notNullable();
    table.integer('number').notNullable();
    table.float('value').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('Order');
}
