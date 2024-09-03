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
            return "We offer a range of services including MEP work, fire fighting installation, plumbing services, and architectural design. Which one would you like to know more about?";
        } else if (lowerMessage.includes('contact')) {
            return "You can contact us at 8527389555 or email us at anilkumarsaini0507@gmail.com";
        } else if (lowerMessage.includes('mep')) {
            return "Our MEP (Mechanical, Electrical, and Plumbing) services cover all aspects of building systems. We ensure efficient and sustainable solutions for your projects. Would you like to know more about our mechanical, electrical, or plumbing services?";
        } else if (lowerMessage.includes('fire fighting')) {
            if (lowerMessage.includes('installation')) {
                return "Our fire fighting installation services include state-of-the-art fire detection and suppression systems. We also offer AMC services to keep your systems in top condition. Would you like to know more about our detection or suppression systems?";
            } else if (lowerMessage.includes('detection')) {
                return "We provide advanced fire detection systems to ensure your safety. Our systems are designed to detect fires early and alert you immediately. Would you like to know about the types of detection systems we offer?";
            } else if (lowerMessage.includes('suppression')) {
                return "Our fire suppression systems are top-notch, designed to quickly and effectively put out fires, minimizing damage and ensuring safety. Would you like to know about the different suppression methods we use?";
            } else if (lowerMessage.includes('cost') || lowerMessage.includes('price')) {
                return "The cost for fire fighting services can vary based on the specific requirements and scale of the project. For a detailed quote, please contact us directly. Would you like an estimate for a particular service?";
            } else if (lowerMessage.includes('maintenance')) {
                return "We offer maintenance services to ensure your fire fighting systems are always in optimal condition. Regular maintenance checks can prevent potential issues and ensure safety. Would you like to schedule a maintenance check?";
            } else if (lowerMessage.includes('emergency')) {
                return "We provide emergency fire fighting services to quickly address any urgent fire safety issues. Our team is ready to respond promptly. How can we assist you in an emergency situation?";
            } else {
                return "Our fire fighting services cover installation, detection, suppression, maintenance, and emergency responses. We ensure comprehensive fire safety for your building. How can we help you today?";
            }
        } else if (lowerMessage.includes('plumbing')) {
            if (lowerMessage.includes('installation')) {
                return "We offer comprehensive plumbing installation services, ensuring reliable and efficient water supply and drainage systems. Would you like details on residential or commercial installations?";
            } else if (lowerMessage.includes('maintenance')) {
                return "Our plumbing maintenance services include regular inspections and repairs to keep your plumbing systems in top condition. Would you like to schedule a maintenance service?";
            } else if (lowerMessage.includes('emergency')) {
                return "We provide emergency plumbing services to quickly address any urgent issues, minimizing damage and inconvenience. How can we assist you with your plumbing emergency?";
            } else if (lowerMessage.includes('cost') || lowerMessage.includes('price')) {
                return "The cost for plumbing services varies depending on the scope of work. For specific pricing details, please get in touch with us. Would you like an estimate for a particular service?";
            } else if (lowerMessage.includes('repair')) {
                return "We offer repair services for all types of plumbing issues, from leaks to broken pipes. Our team can quickly diagnose and fix the problem. Would you like to schedule a repair service?";
            } else if (lowerMessage.includes('inspection')) {
                return "Regular plumbing inspections can help prevent issues and ensure your system is functioning correctly. Would you like to schedule an inspection?";
            } else {
                return "Our plumbing services include installation, maintenance, repairs, inspections, and emergency services. We ensure reliable and efficient plumbing systems. How can we assist you today?";
            }
        } else if (lowerMessage.includes('architectural')) {
            if (lowerMessage.includes('design')) {
                return "Our architectural design services offer innovative and sustainable solutions, from concept to completion. We focus on creating functional and aesthetic spaces. Would you like to know more about our design process?";
            } else if (lowerMessage.includes('consultation')) {
                return "We provide architectural consultation services to help you plan and execute your projects effectively. Our experts offer valuable insights and advice. Would you like to schedule a consultation?";
            } else if (lowerMessage.includes('project management')) {
                return "Our project management services ensure that your architectural projects are completed on time and within budget. We oversee every aspect of the project. Would you like to discuss your project requirements?";
            } else if (lowerMessage.includes('cost') || lowerMessage.includes('price')) {
                return "Architectural service costs depend on the project's complexity and requirements. For a personalized quote, please contact us. Would you like an estimate for your project?";
            } else if (lowerMessage.includes('renovation')) {
                return "We offer renovation services to transform and update existing spaces. Our team can help you redesign and improve your property. Would you like to discuss a renovation project?";
            } else if (lowerMessage.includes('sustainable')) {
                return "Sustainability is a key focus in our architectural designs. We aim to create energy-efficient and eco-friendly buildings. Would you like to learn more about our sustainable design practices?";
            } else if (lowerMessage.includes('residential')) {
                return "Our residential architectural services cater to home design and construction. We create beautiful and functional living spaces. Would you like to discuss a residential project?";
            } else if (lowerMessage.includes('commercial')) {
                return "We provide architectural services for commercial projects, including office buildings, retail spaces, and more. Our designs aim to enhance functionality and appeal. Would you like to discuss a commercial project?";
            } else {
                return "Our architectural services cover design, consultation, project management, renovations, and sustainable practices. How can we assist you today?";
            }
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

    // GSAP animations
   
    gsap.from(".contact-card", { duration: 1.5, scale: 0.8, opacity: 0, stagger: 0.3 });
   
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

    // Example script to highlight the sections dynamically

document.addEventListener('DOMContentLoaded', () => {
    
    const infoSystemLink = document.querySelector('a[href="../services/information-system.html"]');

    

    if (infoSystemLink) {
        infoSystemLink.addEventListener('click', () => {
            document.querySelector('#information-system').scrollIntoView({ behavior: 'smooth' });
        });
    }
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

    document.addEventListener('click', function(event) {
        var dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(function(dropdown) {
            if (!dropdown.contains(event.target)) {
                dropdown.querySelector('.dropdown-content').style.display = 'none';
            }
        });
    });
    
    document.querySelectorAll('.dropdown').forEach(function(dropdown) {
        dropdown.addEventListener('mouseover', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });
        dropdown.addEventListener('mouseout', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    });
    


	
	
      