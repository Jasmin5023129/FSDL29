// Get the form and error message elements
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Event listener for form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the values of the email and password fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation for empty fields
    if (email === "" || password === "") {
        errorMessage.textContent = "Please fill in both the email and password.";
        return;
    }

    // Basic validation for email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Example password validation (minimum 6 characters)
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return;
    }

    // If everything is valid, submit the form
    // For demo purposes, just display a success message
    errorMessage.style.color = 'green';
    errorMessage.textContent = "Login successful! Redirecting...";

    // Here, you would typically send the form data to a server for authentication.
    // For now, we just clear the form.
    setTimeout(function() {
        loginForm.reset();
    }, 2000); // Clear the form after 2 seconds
});
