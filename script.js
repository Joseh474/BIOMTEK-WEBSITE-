// Selectors
const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');
const communityButtons = document.querySelectorAll('.btn');
const reveals = document.querySelectorAll('.reveal');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdown = dropdownMenu.querySelector('.dropdown');
const sliderTrack = document.querySelector('.slider-track');
const products = [
    {
        name: "Operating Table",
        images: ["OPERATING TABLE 2.jpg", "OPERATING TABLE 3.jpg", "OPERATING TABLE 4.jpg"],
        description: "Used to position patients during surgical procedures",
        price: "Contact for price"
    },
    {
        name: "Operating Light",
        images: ["OPERATING LIGHT.jpg", "OPERATING LIGHT 2.jpg"],
        description: "Provides bright, shadow-free lighting for surgeons during operations",
        price: "Contact for price"
    },
    // Add more products here
];


// search bar

function searchProducts() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const products = document.querySelectorAll('.dropdown li a'); // Assuming products are in dropdown list
    
    products.forEach(product => {
        const productName = product.textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.parentElement.style.display = "block"; // Show matching product
        } else {
            product.parentElement.style.display = "none"; // Hide non-matching product
        }
    });
}

// Sticky Header
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 100);
});

// Menu Toggle
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

// Close menu on scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

// Read More Functionality
document.addEventListener('DOMContentLoaded', () => {
    const additionalContents = document.querySelectorAll('.additional-content');
    
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.read')) {
            additionalContents.forEach(content => content.style.display = 'none');
        }
    });

    document.querySelectorAll('.read').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const additionalContent = link.nextElementSibling;
            additionalContent.style.display = additionalContent.style.display === 'none' ? 'block' : 'none';
        });
    });
});

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.dataset.product;
        const price = parseFloat(button.dataset.price);
        addToCart(product, price);
        console.log(`${product} added to cart!`);
    });
});

// Community Button Alerts
communityButtons.forEach(button => {
    button.addEventListener('click', () => {
        const messages = {
            'Visit Forums': 'You will be redirected to the forums.',
            'View Events': 'Check out our upcoming events!',
            'Explore Resources': 'Access a wealth of resources to enhance your knowledge.',
        };
        showAlert(messages[button.textContent] || 'This feature is coming soon! Stay tuned.');
    });
});

// Fade-In Reveal Animation
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
});

reveals.forEach(reveal => revealObserver.observe(reveal));

// Dropdown Reveal Animation
dropdownMenu.addEventListener('mouseenter', () => {
    setTimeout(() => {
        dropdown.style.display = 'block';
        const height = dropdown.scrollHeight + 'px';
        dropdown.style.height = height;
        dropdown.style.opacity = 1;
    }, 500);
});

dropdownMenu.addEventListener('mouseleave', () => {
    dropdown.style.opacity = 0;
    dropdown.style.height = '0';
    setTimeout(() => dropdown.style.display = 'none', 500);
});

// Function to show the modal with product details
function showModal(imageSrc, productName, productDescription) {
    const modal = document.getElementById("productModal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");
    const modalDescription = document.getElementById("modalDescription");

    modal.style.display = "flex"; // Show modal
    modalImage.src = imageSrc; // Set modal image source
    modalCaption.textContent = productName; // Set product name
    modalDescription.textContent = productDescription; // Set product description

    // Add scroll event listener to close modal
    window.addEventListener('scroll', closeModal);
}

// Close modal function
function closeModal() {
    const modal = document.getElementById("productModal");
    modal.style.display = "none"; // Hide the modal

    // Remove scroll event listener to prevent multiple calls
    window.removeEventListener('scroll', closeModal);
}

// Event listener for the close button
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closeModal);

// WhatsApp Functionality
function openWhatsApp(productName) {
    const message = `Hello, I'm interested in the ${productName}. Can you provide more information about its specifications and pricing?`;
    window.open(`https://wa.me/+2547?text=${encodeURIComponent(message)}`, '_blank');
}

// Smooth Scroll
document.querySelectorAll('a[href^="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Tooltip Functionality
document.querySelectorAll('.contact-social a').forEach(icon => {
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.innerText = icon.classList[0].replace('icon-', '');
    icon.appendChild(tooltip);

    icon.addEventListener('mouseover', () => {
        tooltip.style.opacity = 1;
        tooltip.style.visibility = 'visible';
    });

    icon.addEventListener('mouseout', () => {
        tooltip.style.opacity = 0;
        tooltip.style.visibility = 'hidden';
    });
});

// Slider Animation
setInterval(() => {
    sliderTrack.style.animation = 'none';
    sliderTrack.offsetHeight; // Trigger reflow to restart animation
    sliderTrack.style.animation = '';
}, 10000); // Restart animation every 10 seconds

// Function to show the modal with product details
function showModal(imageSrc, productName, productDescription) {
    const modal = document.getElementById("productModal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");
    const modalDescription = document.getElementById("modalDescription");

    modal.style.display = "flex"; // Show modal
    modalImage.src = imageSrc; // Set modal image source
    modalCaption.textContent = productName; // Set product name
    modalDescription.textContent = productDescription; // Set product description
}

const brandsContainer = document.getElementById('brandsContainer');
let position = window.innerWidth; // Start position off-screen to the right

function animateBrands() {
    position -= 2; // Move left by 2 pixels
    if (position < -brandsContainer.offsetWidth) {
        position = window.innerWidth; // Reset position to start again
    }
    brandsContainer.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animateBrands); // Call the function again for the next frame
}

// Start the animation
animateBrands();


