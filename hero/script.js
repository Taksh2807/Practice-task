const carousel = document.getElementById('carousel');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let offset = 0;
const itemsPerSlide = 3;
const itemWidth = document.querySelector('.shape-item').offsetWidth + 10; // Width of one item + 10px gap
const maxOffset = carousel.scrollWidth - (itemWidth * itemsPerSlide);

// Navbar hide/show logic
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down - hide the navbar
        navbar.style.top = "-100px"; // Adjust this value based on your navbar height
    } else {
        // Scroll up - show the navbar
        navbar.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
});

// Scroll to the previous items
prev.addEventListener('click', () => {
    if (offset > 0) {
        offset -= itemWidth;
        if (offset < 0) offset = 0;
        carousel.style.transform = `translateX(-${offset}px)`;
    }
});

// Scroll to the next items
next.addEventListener('click', () => {
    if (offset < maxOffset) {
        offset += itemWidth;
        if (offset > maxOffset) offset = maxOffset;
        carousel.style.transform = `translateX(-${offset}px)`;
    }
});
