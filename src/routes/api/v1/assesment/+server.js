import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const data = await request.json();
	let answers = data.answers;

	let totalScores = caculateScores(answers);
	let response = translateScoresToResults(totalScores);

	return new Response(JSON.stringify(response));
}

function caculateScores(answers) {
	let totalScores = { depression: 0, mania: 0, anxiety: 0, substance_use: 0 };

	for (let i = 0; i < answers.length; i++) {
		let obj = answers[i];
		//patient answers
		// console.log('question_id=' + obj.question_id);
		// console.log('value=' + obj.value);

		//use question id to get domain
		const question = questionToDomainMapping.find((q) => q.question_id === obj.question_id);
		if (!question) {
			return error(400, 'Invalid question_id');
		}
		// use domain to update total scores
		totalScores[question.domain] += obj.value;
	}
	console.log(totalScores);
	return totalScores;
}


function translateScoresToResults(totalScores) {
	let response = {
		results: []
	};

	const scoreThresholds = {
		depression: 2,
		mania: 2,
		anxiety: 2,
		substance_use: 1
	};

	const domainToAssesment = {
		depression: 'PHQ-9',
		mania: 'ASRM',
		anxiety: 'PHQ-9',
		substance_use: 'ASSIST'
	};

	for (const domain in totalScores) {
		const score = totalScores[domain];
		const threshold = scoreThresholds[domain];
		if (score >= threshold) {
			let assesment = domainToAssesment[domain];
			response.results.push(assesment);
		}
	}

	return response;
}

// a constant. in theory this would be accessed from a database
const questionToDomainMapping = [
	{
		question_id: 'question_a',
		domain: 'depression'
	},
	{
		question_id: 'question_b',
		domain: 'depression'
	},
	{
		question_id: 'question_c',
		domain: 'mania'
	},
	{
		question_id: 'question_d',
		domain: 'mania'
	},
	{
		question_id: 'question_e',
		domain: 'anxiety'
	},
	{
		question_id: 'question_f',
		domain: 'anxiety'
	},
	{
		question_id: 'question_g',
		domain: 'anxiety'
	},
	{
		question_id: 'question_h',
		domain: 'substance_use'
	}
];
