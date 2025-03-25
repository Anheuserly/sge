// Animated counter
const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // The lower the number, the faster the animation

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace(/,/g, '');
            const inc = target / speed;

            if (count < target) {
                counter.innerText = formatNumber(Math.ceil(count + inc));
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = formatNumber(target);
            }
        };

        updateCount();
    });
    