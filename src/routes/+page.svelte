<script>
	let screenerJson =
		'{"id":"abcd-123","name":"BPDS","disorder":"Cross-Cutting","content":{"sections":[{"type":"standard","title":"During the past TWO (2) WEEKS, how much (or how often) have you been bothered by the following problems?","answers":[{"title":"Not at all","value":0},{"title":"Rare, less than a day or two","value":1},{"title":"Several days","value":2},{"title":"More than half the days","value":3},{"title":"Nearly every day","value":4}],"questions":[{"question_id":"question_a","title":"Little interest or pleasure in doing things?"},{"question_id":"question_b","title":"Feeling down, depressed, or hopeless?"},{"question_id":"question_c","title":"Sleeping less than usual, but still have a lot of energy?"},{"question_id":"question_d","title":"Starting lots more projects than usual or doing more risky things than usual?"},{"question_id":"question_e","title":"Feeling nervous, anxious, frightened, worried, or on edge?"},{"question_id":"question_f","title":"Feeling panic or being frightened?"},{"question_id":"question_g","title":"Avoiding situations that make you feel anxious?"},{"question_id":"question_h","title":"Drinking at least 4 drinks of any kind of alcohol in a single day?"}]}],"display_name":"BDS"},"full_name":"Blueprint Diagnostic Screener"}';

	let screener = JSON.parse(screenerJson);
	let questions = screener.content.sections[0].questions;
	let answers = screener.content.sections[0].answers;
	let prompt = screener.content.sections[0].title;
	// extract the display_name
	let display_name = screener.content.display_name;

	let currentQuestionIndex = 0;
	let isCompleted = false;

	function nextQuestion() {
		if (currentQuestionIndex < questions.length - 1) {
			currentQuestionIndex += 1;
		} else {
			isCompleted = true;
			// Send the responses to the server
		}
	}

	function selectAnswer(answer) {
		nextQuestion();
	}

	// Calculate the width of the progress bar
	$: progressWidth = (currentQuestionIndex / questions.length) * 100;
</script>

<main>
	<h1>{display_name}</h1>
	{#if !isCompleted}
		<h3>{prompt}</h3>
		<p>{questions[currentQuestionIndex].title}</p>

		<ul>
			{#each answers as answer}
				<li>
					<button on:click={() => selectAnswer(answer)}>{answer.title}</button>
				</li>
			{/each}
		</ul>

		<br />
		<p>{currentQuestionIndex + 1} out of {questions.length}</p>
		<div class="progress-bar">
			<div class="progress-bar-inner" style="width: {progressWidth}%;"></div>
		</div>
	{:else}
		<h2>Thank you for participating in the questionnaire!</h2>
		<p>Your responses have been recorded.</p>
	{/if}
</main>

<style>
	.progress-bar {
		width: 100%;
		background-color: #f3f3f3;
		border-radius: 5px;
		overflow: hidden;
		margin-bottom: 20px;
	}
	.progress-bar-inner {
		height: 20px;
		background-color: #4caf50;
	}
</style>
