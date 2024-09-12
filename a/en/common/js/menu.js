function toggleMenu() {
    const menu = document.getElementById('slide-out-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const isOpen = menu.classList.contains('menu-open');

    if (isOpen) {
        menu.classList.remove('menu-open');
        menu.setAttribute('aria-hidden', 'true');
        menuIcon.setAttribute('aria-label', 'Open menu');
    } else {
        menu.classList.add('menu-open');
        menu.setAttribute('aria-hidden', 'false');
        menuIcon.setAttribute('aria-label', 'Close menu');
    }
}
