
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
        const lowerMessage = message.toLowerCase();
        
        if (customerName === "Customer") {
            customerName = message;
            return `Nice to meet you, ${customerName}! How can I assist you today?`;
        }

        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return `Hello ${customerName}! How can I help you today?`;
        } else if (lowerMessage.includes('services')) {
            return "We offer a range of services including MEP work, fire fighting installation, and architectural design. Which one would you like to know more about?";
        } else if (lowerMessage.includes('contact')) {
            return "You can contact us at 8527389555 or email us at anilkumarsaini0507@gmail.com";
        } else if (lowerMessage.includes('mep')) {
            return "Our MEP (Mechanical, Electrical, and Plumbing) services cover all aspects of building systems. We ensure efficient and sustainable solutions for your projects.";
        } else if (lowerMessage.includes('fire fighting')) {
            return "Our fire fighting installation services include state-of-the-art fire detection and suppression systems. We also offer AMC services to keep your systems in top condition.";
        } else if (lowerMessage.includes('architectural')) {
            return "Our architectural and civil design services provide comprehensive solutions from concept to completion. We focus on innovative and sustainable designs.";
        } else if (lowerMessage.includes('thank')) {
            return `You're welcome, ${customerName}! Is there anything else I can help you with?`;
        } else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
            return `Goodbye, ${customerName}! Feel free to chat with me again if you have any more questions.`;
        } else {
            return `I'm sorry, ${customerName}. I didn't quite understand that. Can you please rephrase or ask about our services, contact information, or specific projects?`;
        }
    }
	
	// Add a typing indicator
    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('typing-indicator');
        typingIndicator.innerHTML = 'Ava is typing...';
        chatbotMessages.appendChild(typingIndicator);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingIndicator = chatbotMessages.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
	    // Modify the sendMessage function to include typing indicator
    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage('user', message);
            userInput.value = '';
            showTypingIndicator();
            setTimeout(() => {
                removeTypingIndicator();
                const botResponse = getBotResponse(message);
                addMessage('bot', botResponse);
            }, 1500); // Simulate typing time
        }
    }
