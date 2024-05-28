document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get username and password values
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        // Your authentication logic goes here
        // For this example, let's just log the values to console
        console.log("Username:", username);
        console.log("Password:", password);
        
        // You can replace the console.log statements with your authentication logic
        
        // Clear form fields
        loginForm.reset();
    });
});
