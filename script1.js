// Get elements from the DOM
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

// Function to handle login button click
loginButton.addEventListener("click", function() {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Check if the entered username and password are correct
    if (enteredUsername === "fraj" && enteredPassword === "chata") {
        // Redirect to another HTML file (e.g., "welcome.html")
        window.location.href = "index2.html";
    } else {
        alert("Worng username or password You fucking idiot !!!!!. Please try again.");
    }
});