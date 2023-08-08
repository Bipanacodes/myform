document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    // You can perform further validation on the email here
    
    // Simulate sending a reset email
    setTimeout(function() {
        document.getElementById("message").textContent = `Password reset instructions sent to ${email}`;
    }, 1000);
});
