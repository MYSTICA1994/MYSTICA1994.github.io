document.addEventListener('DOMContentLoaded', function () {
    const answerBtn = document.getElementById('answer-btn');
    const answerElement = document.getElementById('answer');

    answerBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * answers.length);
        answerElement.textContent = answers[randomIndex].message;
        answerElement.classList.remove('hidden');
    });
});


/*document.addEventListener('DOMContentLoaded', function () {
    const answerBtn = document.getElementById('answer-btn');
    const answerElement = document.getElementById('answer');
    const answerCard = document.getElementById('answer-card');

    answerBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * answers.length);
        answerElement.textContent = answers[randomIndex].message;
        answerCard.classList.remove('hidden');
        answerCard.classList.add('card');
    });
});
*/