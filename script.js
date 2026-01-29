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


function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}

function smartScroll() {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  let targetPosition;

  // Check if screen width is less than 768px (common mobile breakpoint)
  if (window.innerWidth < 768) {
    targetPosition = totalHeight * 0.85; // 90% scroll for mobile
  } else {
    targetPosition = totalHeight; // 100% scroll for desktop
  }

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}







/* GET A QUOTE FLOATING BUTTON */

document.addEventListener('DOMContentLoaded', () => {
    const fab = document.getElementById('navFab');
    const navbarCollapse = document.getElementById('navbarNav');
    const footer = document.getElementById('quote'); // detect bottom
    let scrollTimer;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const footerTop = footer.getBoundingClientRect().top + scrollTop;

        // Hide if menu open OR near footer
        if (navbarCollapse.classList.contains('show') || scrollTop + windowHeight >= footerTop) {
            fab.classList.add('hidden');
            return;
        }

        // Slide/fade out while scrolling
        fab.classList.add('hidden');

        // Slide/fade in after stop scrolling
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            if (!navbarCollapse.classList.contains('show') && scrollTop + windowHeight < footerTop) {
                fab.classList.remove('hidden');
            }
        }, 180); // adjust delay as needed
    });

    // Bootstrap collapse events
    navbarCollapse.addEventListener('show.bs.collapse', () => fab.classList.add('hidden'));
    navbarCollapse.addEventListener('hide.bs.collapse', () => fab.classList.remove('hidden'));
});

