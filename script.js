function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const chosenMessage = messages[randomIndex];
    document.getElementById("message").innerText = `序号${chosenMessage.number}，${chosenMessage.message}`;
}

// 显示或隐藏答案
function toggleAnswer() {
    var answer = document.getElementById("answer");
    answer.classList.toggle("hidden");
}

// 隐藏答案
function hideAnswer() {
    var answer = document.getElementById("answer");
    answer.classList.add("hidden");
}
