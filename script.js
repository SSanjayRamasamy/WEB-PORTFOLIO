// Scroll to top on page refresh
window.onload = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Navigation scroll functionality
document.getElementById('home-link').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('projects-link').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-link').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
