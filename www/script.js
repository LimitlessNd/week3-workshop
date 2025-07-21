$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault(); // Stop the form from submitting normally
    
    // Hide error message on new submit attempt
    $('#errormsg').removeClass('showmessage').addClass('hidemessage');
    
    // Get form data
    const email = $('input[name="email"]').val();
    const password = $('input[name="password"]').val();
    
    // Send AJAX POST request to /login
    $.post('/login', { email: email, password: password }, function(data) {
      if (data.valid === true) {
        // Login success, you can redirect or update UI here
        alert('Login successful!');
        // Example: Redirect to account page
        window.location.href = '/account';
      } else {
        // Login failed, show error message div
        $('#errormsg').removeClass('hidemessage').addClass('showmessage');
      }
    });
  });
});
