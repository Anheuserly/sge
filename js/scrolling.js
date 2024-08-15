// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'mooth'
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
      behavior: 'mooth'
  });
});