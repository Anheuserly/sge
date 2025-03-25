// Chatbot functionality code here
const openChatBtn = document.getElementById('open-chat');
const closeChatBtn = document.getElementById('close-chat');
const chatbot = document.getElementById('chatbot');
const sendMessageBtn = document.getElementById('send-message');
const userInput = document.getElementById('user-input');
const chatbotMessages = document.getElementById('chatbot-messages');

let customerName = "Customer";

openChatBtn.addEventListener('click', () => {
    chatbot.style.display = 'flex';
    openChatBtn.style.display = 'none';
    addMessage('bot', "Hello! I'm Ava, your virtual assistant. What's your name?");
});

closeChatBtn.addEventListener('click', () => {
    chatbot.style.display = 'none';
    openChatBtn.style.display = 'block';
});

sendMessageBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessage('user', message);
        userInput.value = '';
        setTimeout(() => {
            addMessage('bot', getBotResponse(message));
        }, 1000);
    }
}

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    const senderName = sender === 'user' ? customerName : 'Ava';
    messageElement.innerHTML = `<strong>${senderName}:</strong> ${message}`;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(message) {
    // Bot response logic here
}