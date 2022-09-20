/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.createTable('reservations', {
		id: {
			type: 'serial',
			primaryKey: true,
			notNull: true
		},
		name: {
			type: 'VARCHAR(50)',
			notNull: true
		},
		at: {
			type: 'TIMESTAMP',
			notNull: true
		},
		email: {
			type: 'VARCHAR(50)',
			notNull: true
		},
		quantity: {
			type: 'INTEGER',
			notNull: true
		}
	});
};

exports.down = (pgm) => {
	pgm.dropTable('reservations');
};
