// scripts.js

const links = document.querySelectorAll('nav ul li a');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // prevent the default behavior of clicking on a link (page reload)
        const targetSection = document.querySelector(e.target.getAttribute('href'));
        targetSection.scrollIntoView({behavior: 'smooth'}); // scroll to the targeted section with a smooth animation
    });
});
