// Navbar collapse on link click (mobile)
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
            const collapse = bootstrap.Collapse.getInstance(navbar);
            collapse.hide();
        }
    });
});

// Lightbox for gallery
function openLightbox(index) {
    var myCarousel = document.querySelector('#popupCarousel');
    var carousel = new bootstrap.Carousel(myCarousel);
    carousel.to(index);
}
