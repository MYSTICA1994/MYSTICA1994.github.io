const answers = [
    "命运赐予你的不只是这些答案。",
    "深呼吸，相信直觉。",
    // ...其他答案
];

function showRandomAnswer() {
    const answerElement = document.getElementById("answer");
    const randomIndex = Math.floor(Math.random() * answers.length);
    answerElement.textContent = answers[randomIndex];
    answerElement.classList.toggle('hidden'); // 切换hidden类以显示或隐藏答案
}
