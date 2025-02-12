// Simple form submission logic
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display an alert or send data to a backend server
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Optionally, clear form fields after submission
    document.getElementById("contact-form").reset();
});
