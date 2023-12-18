document.addEventListener('DOMContentLoaded', function () {
    const answerBtn = document.getElementById('answer-btn');
    const answerElement = document.getElementById('answer');

    answerBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * answers.length);
        answerElement.textContent = answers[randomIndex].message;
        answerElement.classList.remove('hidden');
    });
});

// Add DOMContentLoaded if not already present
document.addEventListener('DOMContentLoaded', function () {
    // Reference the reset button and add an event listener
    const resetBtn = document.getElementById('reset-btn');
    resetBtn.addEventListener('click', function() {
        const answerElement = document.getElementById('answer');
        answerElement.classList.add('hidden'); // Hide the answer
        answerElement.textContent = ''; // Clear the answer text
        resetBtn.classList.add('hidden'); // Hide the reset button
    });
});

function showRandomAnswer() {
    // ... existing code to show a random answer ...
    const resetBtn = document.getElementById('reset-btn');
    resetBtn.classList.remove('hidden'); // Show the reset button when an answer is shown
}
