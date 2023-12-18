function showRandomAnswer() {
    const answerElement = document.getElementById("answer");
    // 访问数组中随机对象的 "message" 属性
    const randomIndex = Math.floor(Math.random() * answers.length);
    const answerText = answers[randomIndex].message;  // 获取随机答案的消息文本
    answerElement.textContent = answerText;
    answerElement.classList.remove('hidden'); // 确保答案是可见的
    // 如果需要，可以在这里添加其他逻辑，比如改变按钮文本等
}
