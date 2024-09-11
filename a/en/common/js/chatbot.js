document.addEventListener('DOMContentLoaded', () => {
    const chatbot = document.getElementById('chatbot');
    const openChatButton = document.getElementById('open-chat');
    const closeChatButton = document.getElementById('close-chat');
    const sendMessageButton = document.getElementById('send-message');
    const userInput = document.getElementById('user-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Toggle the chatbot visibility
    openChatButton.addEventListener('click', () => {
        chatbot.style.display = 'flex';
        openChatButton.style.display = 'none';
    });

    closeChatButton.addEventListener('click', () => {
        chatbot.style.display = 'none';
        openChatButton.style.display = 'block';
    });

    // Send message function
    function sendMessage() {
        const message = userInput.value.trim();
        if (message !== '') {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            messageElement.classList.add('user-message');
            chatbotMessages.appendChild(messageElement);

            // Clear the input field
            userInput.value = '';

            // Scroll to the bottom of the messages
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
    }

    // Send message when button is clicked
    sendMessageButton.addEventListener('click', sendMessage);

    // Send message when Enter key is pressed
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
            event.preventDefault(); // Prevents default form submission if inside a form
        }
    });
});