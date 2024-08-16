// JavaScript for interactive features

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#01809e'; // Darker background on scroll
    } else {
        navbar.style.backgroundColor = '#333'; // Original background
    }
});

const navLinks = document.querySelectorAll('.navbar ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#000'; // Black color on hover
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#fff'; // Original color
    });
});
