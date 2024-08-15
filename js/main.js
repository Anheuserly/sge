document.addEventListener('DOMContentLoaded', function() {
    // Chat Bot functionality
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


	
	
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Header background change on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Scroll to top button
        const scrollToTopBtn = document.querySelector('.scroll-to-top');
        
		window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // GSAP animations
        gsap.registerPlugin(ScrollTrigger);

        // Animate section titles
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 50,
                duration: 1
            });
        });

        // Animate service cards
        gsap.utils.toArray('.service-card').forEach(card => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.2
            });
        });

        // Animate project cards
        gsap.utils.toArray('.project-card').forEach(card => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                ease: "back.out(1.7)"
            });
        });

        // Parallax effect for hero section
        gsap.to('.hero', {
            scrollTrigger: {
                trigger: '.hero',
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            backgroundPosition: "50% 100%",
            ease: "none"
        });

        // Typing effect for hero title
        const heroTitle = document.querySelector('.hero h1');
        const heroTitleText = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        function typeWriter() {
            if (i < heroTitleText.length) {
                heroTitle.textContent += heroTitleText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();

        // Initialize Swiper for client logos
        const swiper = new Swiper('.clients-slider', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            }
        });

        // 3D tilt effect for service and project cards
        VanillaTilt.init(document.querySelectorAll(".service-card, .project-card"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
        });

        // Lazy loading for images
        const images = document.querySelectorAll('img[data-src]');
        const config = {
            rootMargin: '0px 0px 50px 0px',
            threshold: 0
        };

        let observer = new IntersectionObserver((entries, self) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    preloadImage(entry.target);
                    self.unobserve(entry.target);
                }
            });
        }, config);

        images.forEach(image => {
            observer.observe(image);
        });

        function preloadImage(img) {
            const src = img.getAttribute('data-src');
            if (!src) { return; }
            img.src = src;
        }
		
		// Animated counter
const counters = document.querySelectorAll('.stat-number');
const speed = 200; // The lower the number, the faster the animation

const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace(/,/g, '');
        const inc = target / speed;

        if (count < target) {
            counter.innerText = formatNumber(Math.ceil(count + inc));
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = formatNumber(target);
        }
    };

    updateCount();
});

        // Add custom cursor
        const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Add this CSS for the custom cursor
        const style = document.createElement('style');
        style.textContent = `
            .custom-cursor {
                width: 20px;
                height: 20px;
                border: 2px solid var(--primary-color);
                border-radius: 50%;
                position: fixed;
                pointer-events: none;
                z-index: 9999;
                transition: all 0.1s ease;
                transform: translate(-50%, -50%);
            }
        `;
        document.head.appendChild(style);

        // Add hover effect to buttons and links
        const interactiveElements = document.querySelectorAll('a, button, .service-card, .project-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.borderColor = 'var(--secondary-color)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.borderColor = 'var(--primary-color)';
            });
        });

        // Add a simple loading animation
        window.addEventListener('load', () => {
            const loader = document.createElement('div');
            loader.classList.add('loader');
            document.body.appendChild(loader);

            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.remove();
                }, 500);
            }, 1000);
        });

        // Add this CSS for the loader
        const loaderStyle = document.createElement('style');
        loaderStyle.textContent = `
            .loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: var(--bg-color);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                transition: opacity 0.5s ease;
            }
            .loader::after {
                content: '';
                width: 50px;
                height: 50px;
                border: 5px solid var(--primary-color);
                border-top: 5px solid var(--secondary-color);
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(loaderStyle);
		
		
		});