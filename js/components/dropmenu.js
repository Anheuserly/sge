function toggleMenu() {
    const menu = document.getElementById('slide-out-menu');
    menu.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('slide-out-menu');
    const menuIcon = document.querySelector('.menu-icon');
    if (!menu.contains(event.target) && event.target !== menuIcon) {
        menu.classList.remove('active');
    }
});