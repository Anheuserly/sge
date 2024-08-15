// Add a simple loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    document.body.appendChild(loader);

    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1000);
});