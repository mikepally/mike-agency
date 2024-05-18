document.addEventListener("DOMContentLoaded", function() {
    // Navigation smooth scroll
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offsetTop = targetElement.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // Send form data to server or perform desired action
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
