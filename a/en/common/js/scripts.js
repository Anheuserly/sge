document.addEventListener("DOMContentLoaded", function() {
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
