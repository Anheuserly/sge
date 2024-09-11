document.addEventListener('DOMContentLoaded', () => {
    const expertiseItems = document.querySelectorAll('.expertise-item');
    const contentSections = document.querySelectorAll('.content-section');

    // Set default active item and section
    const defaultItem = document.querySelector('.expertise-item[data-target="fire-fighting"]');
    const defaultContent = document.querySelector('#fire-fighting');

    defaultItem.classList.add('active');
    defaultContent.classList.add('active');

    expertiseItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const targetContent = document.querySelector(`#${targetId}`);

            // Remove active class from all items and sections
            expertiseItems.forEach(i => i.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));

            // Add active class to the clicked item and corresponding content
            item.classList.add('active');
            targetContent.classList.add('active');

            // Scroll to the top of the content section with smooth effect
            targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
