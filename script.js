// 确保 DOM 完全加载后再绑定事件和操作元素
document.addEventListener('DOMContentLoaded', function () {
    function showRandomAnswer() {
        const answerElement = document.getElementById("answer");
        const randomIndex = Math.floor(Math.random() * answers.length);
        const answer = answers[randomIndex].message;
        answerElement.textContent = answer;
        answerElement.classList.remove('hidden');
    }

    // 绑定按钮的点击事件
    const answerButton = document.getElementById("answer-btn");
    answerButton.addEventListener('click', showRandomAnswer);
});
