/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
	return Promise.all([
		knex.schema.createTable('reservations', function (table) {
			table.increments();
			table.datetime('at');
			table.varchar('name', 50);
			table.varchar('email', 50);
			table.integer('quantity');
		})
	]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
	return Promise.all([knex.schema.dropTable('reservations')]);
};
