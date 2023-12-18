// 假设您有一个包含答案的数组
const answers = [
    "命运赐予你的不只是这些答案。",
    "深呼吸，相信直觉。",
    // ... 其他答案
];

function showRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const answerElement = document.getElementById("answer");
    answerElement.textContent = answers[randomIndex];
    answerElement.classList.remove("hidden");
}

// 如果您想在一段时间后自动隐藏答案，可以添加一个定时器
function hideAnswer() {
    setTimeout(() => {
        document.getElementById("answer").classList.add("hidden");
    }, 5000); // 5秒后隐藏答案
}
