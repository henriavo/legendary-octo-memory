import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */ export function GET({ url }) {
	console.log(url);
	const random = 10 + Math.random() * 4;
	return new Response(String(random));
}
