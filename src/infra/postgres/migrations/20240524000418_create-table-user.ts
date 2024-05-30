import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('user', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    
        table.string('name').notNullable();
        table.string('email', 250).notNullable();
        table.integer('age').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.timestamp('deleted_at');
      });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('user');
}

