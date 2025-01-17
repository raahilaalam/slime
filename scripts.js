// Add event listener for the plus symbol to show the order form
document.querySelector('.plus-symbol').addEventListener('click', function() {
    document.getElementById('order-form').style.display = 'block';
});

// Handle the order form submission
document.querySelector('#submit-order').addEventListener('click', function() {
    const formData = {/* Collect form data here */};
    const link = generateLink(formData); // Function to generate shareable link
    localStorage.setItem('orderReminder', JSON.stringify({ formData, link }));
    // Show confirmation or reminder
});

// Load reminder on page load
window.addEventListener('load', function() {
    const savedReminder = JSON.parse(localStorage.getItem('orderReminder'));
    if (savedReminder) {
        // Display the shared order form based on the link
        // Example: populateForm(savedReminder.formData);
        // Code to show reminder
    }
});

// Function to generate a shareable link
function generateLink(formData) {
    // Implement link generation logic here
    return 'http://example.com/order?data=' + encodeURIComponent(JSON.stringify(formData));
}
