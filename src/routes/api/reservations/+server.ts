import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: { request: Request }) {
	const req = await request.json();
	return json(req);
}
