// Selecting the elements
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');

// Open menu
menuIcon.addEventListener('click', () => {
    menu.classList.add('active');
});

// Close menu
closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});