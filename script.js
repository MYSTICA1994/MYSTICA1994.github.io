document.addEventListener('DOMContentLoaded', function () {
    const answerBtn = document.getElementById('answer-btn');
    const resetBtn = document.getElementById('reset-btn');
    const answerElement = document.getElementById('answer');

    answerBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * answers.length);
        answerElement.textContent = answers[randomIndex].message;
        answerElement.classList.remove('hidden');
    });

    resetBtn.addEventListener('click', function() {
        answerElement.textContent = '';
        answerElement.classList.add('hidden');
    });
});
