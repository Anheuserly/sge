document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => {
        const service = item.getAttribute('data-service');
        let title = '';
        let description = '';

        switch (service) {
            case 'mechanical':
                title = 'Mechanical Services';
                description = 'Mechanical services include HVAC installation, maintenance, and repairs. We ensure optimal performance and efficiency of mechanical systems in your building.';
                break;
            case 'electrical':
                title = 'Electrical Services';
                description = 'Our electrical services cover installation, maintenance, and repair of electrical systems, ensuring safety and compliance with regulations.';
                break;
            case 'plumbing':
                title = 'Plumbing Services';
                description = 'Plumbing services encompass installation and repair of pipes, fixtures, and systems for water and drainage to ensure smooth operations.';
                break;
            case 'fire-protection':
                title = 'Fire Protection System';
                description = 'Fire protection services include the installation and maintenance of fire alarms, sprinklers, and suppression systems to safeguard your property.';
                break;
            case 'maintenance':
                title = 'Annual Maintenance Contract';
                description = 'Annual Maintenance Contracts provide regular inspections and servicing of your systems to prevent issues and ensure reliability.';
                break;
            case 'civil-design':
                title = 'Civil Design';
                description = 'Civil design services include planning and designing infrastructure projects such as roads, bridges, and drainage systems.';
                break;
            case 'build-services':
                title = 'Build Services';
                description = 'Build services cover the construction and renovation of buildings, ensuring quality and adherence to specifications and codes.';
                break;
            default:
                title = 'Select a Service';
                description = 'Please choose a service to see the details.';
                break;
        }

        const circleContent = document.getElementById('circle-content');
        circleContent.innerHTML = `
            <h2 id="service-title">${title}</h2>
            <p id="service-description">${description}</p>
            <a href="#" id="know-more">Know More</a>
        `;

        // Apply blinking effect
        circleContent.classList.add('blink');
        setTimeout(() => {
            circleContent.classList.remove('blink');
        }, 1000); // Blink for 1 second
    });
});
