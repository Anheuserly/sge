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
