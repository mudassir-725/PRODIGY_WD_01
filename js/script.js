// JavaScript for interactive features

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#01809e'; // Darker background on scroll
    } else {
        navbar.style.backgroundColor = '#010100'; // Original background
    }
});

const navLinks = document.querySelectorAll('.navbar ul li a');
navLinks.forEach(link => {
    if (link.querySelector('.brand-logo')) {
        // Skip hover effect for brand link
        return;
    }
    link.addEventListener('mouseover', () => {
        link.style.color = '#8a6139'; // Color on hover
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#fff'; // Original color
    });
});
