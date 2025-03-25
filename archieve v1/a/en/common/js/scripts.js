document.addEventListener("DOMContentLoaded", function() {

    // Hide/Show Header on Scroll
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down - hide the header
        header.style.top = '-100px';  /* Hide by moving it up */
    } else {
        // Scrolling up - show the header
        header.style.top = '0';
    }

    lastScrollTop = scrollTop;
});

    // Get all dropdowns
    var dropdowns = document.querySelectorAll('nav ul li ul.dropdown');

    // Hide all dropdowns initially
    dropdowns.forEach(function(dropdown) {
        dropdown.style.display = 'none';
    });

    // Show dropdown on hover
    var parentItems = document.querySelectorAll('nav ul li');
    parentItems.forEach(function(parent) {
        parent.addEventListener('mouseenter', function() {
            var dropdown = this.querySelector('ul.dropdown');
            if (dropdown) {
                dropdown.style.display = 'block';
            }
        });

        parent.addEventListener('mouseleave', function() {
            var dropdown = this.querySelector('ul.dropdown');
            if (dropdown) {
                dropdown.style.display = 'none';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
    });
});

document.addEventListener('scroll', function () {
    const scrollUpButton = document.getElementById('scroll-up');
    if (window.scrollY > 300) {
        scrollUpButton.classList.add('show');
    } else {
        scrollUpButton.classList.remove('show');
    }
});

document.getElementById('scroll-up').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.querySelectorAll('.contact-btn').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        alert(`Contact details for ${name}`);
        // Implement actual contact details functionality here
    });
});

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselTrack = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function updateCarousel() {
    const totalSlides = slides.length;
    if (currentIndex >= totalSlides) currentIndex = 0;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    updateCarousel();
});

// Optional: Auto-slide functionality
setInterval(() => {
    currentIndex++;
    updateCarousel();
}, 5000); // Change slide every 5 seconds
