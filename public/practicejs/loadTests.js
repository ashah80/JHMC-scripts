document.addEventListener('DOMContentLoaded', async () => {
    // Load JSON
    const response = await fetch('/practicejs/test1.json');
    if (!response.ok) {
        console.error('Failed to load JSON:', response.statusText);
        return;
    }
    const {questions} = await response.json();

    // Get elements from practice.ejs
    const questionNavContainer = document.querySelector('.question-nav');
    const questionNumbers = document.querySelector('.question-number');
    const questionText = document.querySelector('.question-text');
    const answerInput = document.querySelector('#answer-input');
    const previousButton = document.querySelector('.nav-prev');
    const nextButton = document.querySelector('.nav-next');

    let currentQuestionIndex = 0;

    // Create navigation buttons
    questions.forEach((question, index) => {
        const button = document.createElement('div');
        button.className = 'question-nav-btn';
        button.textContent = question.id;
        questionNavContainer.appendChild(button);

        // Click to navigate to question
        button.addEventListener('click', () => { updateQuestion(index); });
    });

    // Update UI to show new question when navigation button is clicked
    function updateQuestion(index) {
        currentQuestionIndex = index;
        const {id, question} = questions[currentQuestionIndex];

        // Update card
        questionNumbers.textContent = `Question ${id}`;
        questionText.textContent = question;
        answerInput.value = ""; // Clear previous answer

        // Highlight current button
        document.querySelectorAll('.question-nav-btn').forEach((btn, i) => {
            btn.classList.toggle('current', i === currentQuestionIndex);
        });

        // Update prev/next button states
        previousButton.disabled = currentQuestionIndex === 0;
        nextButton.disabled = currentQuestionIndex === questions.length - 1;
    }

    previousButton.addEventListener('click', () => updateQuestion(currentQuestionIndex - 1));
    nextButton.addEventListener('click', () => updateQuestion(currentQuestionIndex + 1));

    // Start with the first question
    updateQuestion(0);

});
