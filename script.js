

function showRandomAnswer() {
    const answerElement = document.getElementById("answer");
    const randomIndex = Math.floor(Math.random() * answers.length);
    answerElement.textContent = answers[randomIndex];
    answerElement.classList.toggle('hidden'); // 切换hidden类以显示或隐藏答案
}
