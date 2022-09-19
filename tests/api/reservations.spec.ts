import { expect, test } from '@playwright/test';
import { postReservation, postReservationAPI } from './reservation.helpers.js';

test('response is 2xx success for posting reservation data to api', async ({ baseURL }) => {
	const data = {
		date: new Date('2023-03-10 19:00'),
		email: 'katinka@example.com',
		name: 'Katinka Ingabogovinanana',
		quantity: 2
	};

	const response: Response = await postReservationAPI(baseURL, data);
	const json = await response.json();
	const status = response.ok;

	expect(status).toBe(true);
	expect(json).toEqual({
		date: '2023-03-10T18:00:00.000Z',
		email: 'katinka@example.com',
		name: 'Katinka Ingabogovinanana',
		quantity: 2
	});
});

test('post reservation gets data from db', async () => {
	const data = {
		date: new Date('2023-03-10 19:00'),
		email: 'katinka@example.com',
		name: 'Katinka Ingabogovinanana',
		quantity: 2
	};

	const response = postReservation()[0];

	expect(response).toEqual(data);
});
