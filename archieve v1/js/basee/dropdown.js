document.addEventListener('click', function(event) {
    var isClickInside = document.querySelector('.dropdown').contains(event.target);
    if (!isClickInside) {
        document.querySelector('.dropdown-content').style.display = 'none';
    }
});
