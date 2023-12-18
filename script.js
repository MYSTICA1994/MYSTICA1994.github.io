document.addEventListener('DOMContentLoaded', function () {
    const answerBtn = document.getElementById('answer-btn');
    const answerElement = document.getElementById('answer');

    answerBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * answers.length);
        answerElement.textContent = answers[randomIndex].message;
        answerElement.classList.remove('hidden');
    });
});
