import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	// Read the JSON data from the request body
	const data = await request.json();

	// Log the received data
	console.log('Received JSON data:', data);

	const random = 10 + Math.random() * 4;
	return new Response(String(random));
}
