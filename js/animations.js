// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Animate section titles
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1
    });
});

// Animate service cards
gsap.utils.toArray('.service-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2
    });
});

// Animate project cards
gsap.utils.toArray('.project-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "back.out(1.7)"
    });
});

// Parallax effect for hero section
gsap.to('.hero', {
    scrollTrigger: {
        trigger: '.hero',
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    backgroundPosition: "50% 100%",
    ease: "none"
});

// Typing effect for hero title
const heroTitle = document.querySelector('.hero h1');
const heroTitleText = heroTitle.textContent;
heroTitle.textContent = '';
let i = 0;
function typeWriter() {
    if (i < heroTitleText.length) {
        heroTitle.textContent += heroTitleText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();