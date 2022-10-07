import knex from 'knex';
import connection from '../knexfile.cjs'
import type {IReservation} from '../interfaceTypes';

export const psql = knex(connection);

export const createReservation = function(reservation: IReservation): Promise<IReservation[]> {
  return psql('reservations')
  .insert(reservation)
  .returning(['id', 'date', 'email', 'name', 'quantity'])
}