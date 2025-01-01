
window.addEventListener('scroll', function () {
    const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(function(parallax) {
        let scrollPosition = window.pageYOffset;
        let speed = 0.1; 
        parallax.style.backgroundPosition = 'center ' + (scrollPosition * speed) + 'px';
    });
});
