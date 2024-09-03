// Header component code here

const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Add event listener to nav menu items
navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navMenu.classList.remove('show');
  }
});

// Add scroll event listener to header
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});