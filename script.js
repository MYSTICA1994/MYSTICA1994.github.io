// 确保 DOM 完全加载后再绑定事件和操作元素

document.addEventListener('DOMContentLoaded', function () {
    const answerButton = document.getElementById('answer-btn');
    const resetButton = document.getElementById('reset-btn');
    const card = document.getElementById('card');
    const answerElement = document.getElementById('answer');

    answerButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const answerText = answers[randomIndex].message;
        answerElement.textContent = answerText;
        card.classList.remove('hidden');
        resetButton.classList.remove('hidden');
    });

    resetButton.addEventListener('click', function() {
        card.classList.add('hidden');
        resetButton.classList.add('hidden');
        answerElement.textContent = '';
    });
});
