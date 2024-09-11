let isExpanded = false;

function slideCertifications() {
    const wrapper = document.querySelector('.certifications-wrapper');
    const button = document.querySelector('.slide-btn');

    if (!isExpanded) {
        wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
        button.textContent = 'View Less';
    } else {
        wrapper.style.maxHeight = '600px'; // Adjust height as needed
        button.textContent = 'View More';
    }
    isExpanded = !isExpanded;
}

// Initially set max-height to show only a part of the container
document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.certifications-wrapper');
    wrapper.style.maxHeight = '600px'; // Adjust height as needed
});
