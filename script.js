// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});
// Menu Toggle
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Toggles the icon
    navlist.classList.toggle('active'); // Toggles the sidebar visibility
};

// Close menu on scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active'); // Ensures sidebar closes on scroll
};

// Read More Functionality
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (event) {
        // Check if the clicked element is not the "Read More" link or its parent
        if (!event.target.closest('.read')) {
            // Hide all additional content
            document.querySelectorAll('.additional-content').forEach(function (content) {
                content.style.display = 'none';
            });
        }
    });

    // Toggle visibility of additional content when "Read More" link is clicked
    document.querySelectorAll('.read').forEach(function (readMoreLink) {
        readMoreLink.addEventListener('click', function (event) {
            event.preventDefault();
            var additionalContent = this.nextElementSibling;
            additionalContent.style.display = additionalContent.style.display === 'none' ? 'block' : 'none';
        });
    });
});




document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product'); // Get product name from data attribute
        const price = parseFloat(button.getAttribute('data-price')); // Get price from data attribute
        addToCart(product, price);
        console.log(`${product} added to cart!`);
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const communityButtons = document.querySelectorAll('.btn');

    communityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent; 
            let message;

           
            switch (buttonText) {
                case 'Visit Forums':
                    message = 'You will be redirected to the forums.';
                    break;
                case 'View Events':
                    message = 'Check out our upcoming events!';
                    break;
                case 'Explore Resources':
                    message = 'Access a wealth of resources to enhance your knowledge.';
                    break;
                default:
                    message = 'This feature is coming soon! Stay tuned.';
            }

            showAlert(message);
        });
    });
});


// Fade-In Reveal Animation
document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); 
                observer.unobserve(entry.target); 
            }
        });
    });

    reveals.forEach(reveal => {
        observer.observe(reveal); // Observe each reveal element
    });
});



    // drop down reveal  animation

   
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdown = dropdownMenu.querySelector('.dropdown');

    dropdownMenu.addEventListener('mouseenter', () => {
        setTimeout(() => {
            dropdown.style.display = 'block'; // Set display to block before measuring height
            const height = dropdown.scrollHeight + 'px'; // Get the full height of the dropdown
            dropdown.style.height = height; // Set the height to the measured height
            dropdown.style.opacity = 1; // Set opacity to 1 for fade-in effect
        }, 500); // Adjust the delay time here (300 ms)
    });

    dropdownMenu.addEventListener('mouseleave', () => {
        dropdown.style.opacity = 0; // Fade out
        dropdown.style.height = '0'; // Collapse height to 0
        setTimeout(() => {
            dropdown.style.display = 'none'; // Hide after transition
        }, 500); // Match this timeout with the CSS transition duration
    });


function loadMoreContent() {
    // Fetch and append new content
}
// Scroll Reveal Effect
const reveals = document.querySelectorAll('.reveal');






