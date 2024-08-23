document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const signupSection = document.getElementById('signupSection');

    // Hide signup form initially
    signupSection.style.display = "none";

    // Handle login form submission
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("loginName").value;
        const password = document.getElementById("loginPass").value;

        // Fetch user data from localStorage
        const storedUser = localStorage.getItem(name);

        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (userData.password === password) {
               // alert("Login successful!");
                window.location.href = "home.html"; // Redirect to home.html after successful login
            } else {
                alert("Invalid credentials! Please try again.");
                signupSection.style.display = "block"; // Show signup form if login fails
            }
        } else {
            alert("User does not exist! Please sign up.");
            signupSection.style.display = "block"; // Show signup form if user does not exist
        }
    });

    // Handle signup form submission
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("signupName").value;
        const password = document.getElementById("signupPass").value;

        // Check if user already exists
        if (localStorage.getItem(name)) {
            alert("User already exists! Please log in.");
        } else {
            // Save new user data to localStorage
            const newUser = { name, password };
            localStorage.setItem(name, JSON.stringify(newUser));
            alert("Signup successful! Please log in.");
            signupSection.style.display = "none"; // Hide signup form after successful signup
        }
    });
});
