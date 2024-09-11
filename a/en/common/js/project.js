// Get all project cards and modal elements
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');

// Loop through each project card and add click event to show modal
projectCards.forEach(card => {
    card.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src; // Get image source
        modalImage.src = imgSrc; // Set modal image source to project card image
        modal.style.display = 'block'; // Show modal
    });
});

// Close modal when the 'x' is clicked
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide modal
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
