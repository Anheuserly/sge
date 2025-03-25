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

// GSAP Animation
function toggleMenu() {
    const menu = document.getElementById('slide-out-menu');
    const isActive = menu.classList.contains('active');
    
    if (isActive) {
        gsap.to(menu, { duration: 0.5, x: '100%', ease: 'power2.inOut' });
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
        gsap.fromTo(menu, 
            { x: '100%' }, 
            { duration: 0.5, x: '0%', ease: 'power2.inOut' }
        );
    }
}
