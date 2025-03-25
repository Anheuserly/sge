// Form handling functionality
document.addEventListener('DOMContentLoaded', () => {
    initFormValidation();
    initFormSubmission();
});

// Form validation
function initFormValidation() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateInput);
        input.addEventListener('input', validateInput);
    });
}

function validateInput(e) {
    const input = e.target;
    const value = input.value.trim();
    const errorElement = input.nextElementSibling;
    
    switch(input.type) {
        case 'email':
            validateEmail(input, value);
            break;
        case 'text':
            validateText(input, value);
            break;
        case 'textarea':
            validateTextarea(input, value);
            break;
    }
}

function validateEmail(input, value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
        setError(input, 'Email is required');
    } else if (!emailRegex.test(value)) {
        setError(input, 'Please enter a valid email');
    } else {
        setSuccess(input);
    }
}

function validateText(input, value) {
    if (!value) {
        setError(input, 'This field is required');
    } else if (value.length < 2) {
        setError(input, 'Must be at least 2 characters');
    } else {
        setSuccess(input);
    }
}

function validateTextarea(input, value) {
    if (!value) {
        setError(input, 'Message is required');
    } else if (value.length < 10) {
        setError(input, 'Message must be at least 10 characters');
    } else {
        setSuccess(input);
    }
}

// Form submission
function initFormSubmission() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!validateForm(form)) return;
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const response = await submitForm(data);
            if (response.success) {
                showSuccess();
                form.reset();
            } else {
                showError();
            }
        } catch (error) {
            showError();
        }
    });
}

async function submitForm(data) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    return response.json();
}

// Helper functions
function setError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message') || createErrorElement();
    formGroup.classList.add('error');
    error.textContent = message;
}

function setSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    const error = formGroup.querySelector('.error-message');
    if (error) error.remove();
}

function createErrorElement() {
    const error = document.createElement('span');
    error.className = 'error-message';
    return error;
}

function showSuccess() {
    const notification = createNotification('success', 'Message sent successfully!');
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function showError() {
    const notification = createNotification('error', 'Failed to send message. Please try again.');
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

