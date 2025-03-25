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

$(document).ready(function(){
    $('.certifications-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,        // Time between slides in milliseconds (3 seconds)
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});
