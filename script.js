// Ensure this matches the name of the event handler assigned in your HTML
function showRandomMessage() {
    // Get a random index based on the length of the answers array
    const randomIndex = Math.floor(Math.random() * answers.length);
    // Select the answer element where the message will be displayed
    const answerElement = document.getElementById('answer');
    // Set the text content of this element to the message of the random answer
    answerElement.textContent = answers[randomIndex].message;
    // Remove the 'hidden' class to make the answer visible
    answerElement.classList.remove('hidden');
}
