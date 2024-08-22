// Footer component code here

const footer = document.getElementById('footer');
const socialLinks = document.getElementById('social-links');
const copyrightYear = document.getElementById('copyright-year');

// Set current year for copyright
copyrightYear.textContent = new Date().getFullYear();

// Add event listener to social links
socialLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    window.open(e.target.href, '_blank');
  }
  // header.js

let lastScrollTop = 0; // Keeps track of the last scroll position
const header = document.querySelector('header'); // Select the header element

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Check if scrolling up
    if (currentScroll < lastScrollTop) {
        header.style.top = '0'; // Show the header
    } else {
        header.style.top = `-${header.offsetHeight}px`; // Hide the header
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

});