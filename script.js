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

document.addEventListener('DOMContentLoaded', () => {
    const fab = document.getElementById('navFab');
    const navbarCollapse = document.getElementById('navbarNav'); // Bootstrap collapse element
    let scrollTimer;

    // SCROLL behavior
    window.addEventListener('scroll', () => {
        // hide on scroll
        fab.classList.add('hidden');

        // show when user stops scrolling, only if menu is closed
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            if (!navbarCollapse.classList.contains('show')) {
                fab.classList.remove('hidden');
            }
        }, 180);
    });

    // LISTEN TO BOOTSTRAP COLLAPSE EVENTS
    navbarCollapse.addEventListener('show.bs.collapse', () => {
        fab.classList.add('hidden'); // hide while menu is opening/open
    });

    navbarCollapse.addEventListener('hide.bs.collapse', () => {
        fab.classList.remove('hidden'); // show again when menu closes
    });
});