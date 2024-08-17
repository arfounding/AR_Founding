document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust this value if you have a fixed header
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for the header section
    window.addEventListener('scroll', function() {
        const parallaxContainer = document.querySelector('.parallax-container');
        let scrollPosition = window.pageYOffset;
        
        parallaxContainer.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Fade-in effect for sections as they come into view
    const sections = document.querySelectorAll('.section');

    const options = {
        threshold: 0.5
    };

    const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        fadeInOnScroll.observe(section);
    });

    // Button hover animation
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
