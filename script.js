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

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    revealElements.forEach(element => {
        observer.observe(element);
    });
});

// button click event
document.querySelector('.contact-btn').addEventListener('click', function() {

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>Contact Us</h2>
            <p>Thank you for your interest! We will get back to you shortly.</p>
        </div>
    `;
    document.body.appendChild(modal);

    // Close the modal when the close button is clicked
    modal.querySelector('.close-button').addEventListener('click', function() {
        modal.remove();
    });

    // Close the modal when scrolling
    window.addEventListener('scroll', function() {
        modal.remove();
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.remove();
        }
    });
});

 // Function to show custom alert message
 function showCustomAlert(button, message) {
    // Create a custom alert div
    const alertBox = document.createElement('div');
    alertBox.classList.add('custom-alert');
    alertBox.innerText = message;

    // Get the button's position
    const buttonRect = button.getBoundingClientRect();
    const alertBoxHeight = alertBox.offsetHeight;

    // Set the position of the alert box just above the button
    alertBox.style.top = `${buttonRect.top + window.scrollY - alertBoxHeight}px`;
    alertBox.style.left = `${buttonRect.left + window.scrollX}px`;

    // Append the alert box to the body
    document.body.appendChild(alertBox);

    // Close the alert when scrolling
    const closeAlertOnScroll = function() {
        alertBox.remove(); // Remove the alert box on scroll
        window.removeEventListener('scroll', closeAlertOnScroll); // Remove the scroll event listener
    };

    window.addEventListener('scroll', closeAlertOnScroll);

    // Optional: Automatically remove the alert after a few seconds
    setTimeout(() => {
        alertBox.remove();
        window.removeEventListener('scroll', closeAlertOnScroll); // Clean up the event listener
    }, 5000); // Adjust the time as needed (5000ms = 5 seconds)
}

// Add event listeners to the buttons
document.getElementById('professional-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    showCustomAlert(this, "Thank you for your interest. This service is coming soon."); // Show alert for Professional button
});

document.getElementById('student-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    showCustomAlert(this, "Thank you for your interest. This service is coming soon."); // Show alert for Student button
});
