import { expect, test } from '@playwright/test';
import { postReservation } from './reservation.helpers.js';

test('response is 2xx success for posting reservation data', async ({ baseURL }) => {
	const data = {
		date: '2023-03-10 19:00',
		email: 'katinka@example.com',
		name: 'Katinka Ingabogovinanana',
		quantity: 2
	};

	const response: Response = await postReservation(baseURL, data);
	const json = await response.json();
	const status = response.ok;

	expect(status).toBe(true);
	expect(json).toEqual(data);
});
