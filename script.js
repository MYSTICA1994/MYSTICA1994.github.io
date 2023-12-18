function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const chosenMessage = messages[randomIndex];
    document.getElementById("message").innerText = `序号${chosenMessage.number}，${chosenMessage.message}`;
}
