// Animation functionality
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initHeaderAnimations();
    initFeatureAnimations();
    initProductAnimations();
    
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => animationObserver.observe(el));
});

// Header animations
function initHeaderAnimations() {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    setTimeout(() => {
        heroContent.classList.add('animate');
        heroImage.classList.add('animate');
    }, 300);
}

// Feature card animations
function initFeatureAnimations() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 100}ms`;
        card.classList.add('animate-feature');
    });
}

// Product card animations
function initProductAnimations() {
    const productCards = document.querySelectorAll('.app-card');
    
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 200}ms`;
        card.classList.add('animate-product');
    });
}