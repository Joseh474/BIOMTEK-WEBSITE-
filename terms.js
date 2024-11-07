// Get the modal
const dialog = document.getElementById('dialog');

// Get the button that opens the dialog
const openDialogButton = document.getElementById('joinButton');

// Get the <span> element that closes the dialog
const closeDialogButton = document.getElementById('closeDialogButton');

// When the user clicks the button, open the dialog 
openDialogButton.onclick = function() {
    dialog.style.display = 'block';
}

// When the user clicks on <span> (x), close the dialog
closeDialogButton.onclick = function() {
    dialog.style.display = 'none';
}

// When the user clicks anywhere outside of the dialog, close it
window.onclick = function(event) {
    if (event.target === dialog) {
        dialog.style.display = 'none';
    }
}

// Handle form submission
document.getElementById('joinForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission
    const selectedRole = document.querySelector('input[name="role"]:checked');
    if (selectedRole) {
        alert(`coming soon.`);
        dialog.style.display = 'none'; // Close the dialog
    } else {
        alert('Please select a role.');
    }
}