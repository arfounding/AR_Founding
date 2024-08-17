document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    // Load services and products
    fetch('data/services.json')
        .then(response => response.json())
        .then(data => {
            const serviceList = document.getElementById('service-list');
            data.services.forEach(service => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                `;
                serviceList.appendChild(card);
            });
        });

    fetch('data/products.json')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            data.products.forEach(product => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                `;
                productList.appendChild(card);
            });
        });

    // Contact form handler
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us! We will get back to you shortly.');
        this.reset();
    });
});

// Function to dynamically load components like header and footer
function loadComponent(file, elementId) {
    fetch(`components/${file}`)
        .then(response => response.text())
        .then(data => {
            document.querySelector(elementId).innerHTML = data;
        });
}
