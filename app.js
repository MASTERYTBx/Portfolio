document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Function to highlight the active section and navigation item
    function setActiveSection(targetId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            const correspondingLink = document.querySelector(`.nav-link[data-target="${targetId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }

            // Automatically remove highlighting after a delay (e.g., 3 seconds)
            setTimeout(function () {
                setActiveSection('');
            }, 1500); // Adjust the delay in milliseconds as needed
        }
    }

    // Add click event listeners to the navigation items
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            setActiveSection(targetId);
        });
    });

    // Add event listener to remove highlighting when clicking outside of sections
    document.addEventListener('click', function (e) {
        if (!e.target.classList.contains('section') && !e.target.classList.contains('nav-link')) {
            setActiveSection('');
        }
    });
});
