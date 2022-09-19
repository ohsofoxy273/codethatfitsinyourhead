import { expect, test } from '@playwright/test';

test('index page has expected p', async ({ page }) => {
	await page.goto('/');

	expect(await page.textContent('p')).toBe('Hello, World!');
});

test('index page has 2xx status code with content-type header applicaton/json', async ({
	page,
	request
}) => {
	await page.goto('/');

	const response = await request.get('/');

	expect(response.ok()).toBe(true);
	expect(response.headers()['content-type']).toBe('text/html');
});
