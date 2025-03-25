document.addEventListener('DOMContentLoaded', function () {
    const whatsappIcon = document.getElementById('whatsapp-link');
    const whatsappPopup = document.getElementById('whatsapp-popup');
    const whatsappApp = document.getElementById('whatsapp-app');
    const whatsappWeb = document.getElementById('whatsapp-web');

    const phoneNumber = '9310286848'; // Replace with your WhatsApp number
    const message = encodeURIComponent('Hi, I found your contact and I have a requirement.');

    whatsappIcon.addEventListener('click', function (e) {
        e.preventDefault();
        whatsappPopup.classList.toggle('hidden');
    });

    whatsappApp.addEventListener('click', function () {
        window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    });

    whatsappWeb.addEventListener('click', function () {
        window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
    });
});