$(document).ready(function() {// Makes sure the code doesnt run until the HTML is loaded
  $('#loginForm').submit(function(event) {
    event.preventDefault(); 
    
    // Hide error message 
    $('#errormsg').removeClass('showmessage').addClass('hidemessage');
    
    // Get form data from logged in user
    const email = $('input[name="email"]').val();
    const password = $('input[name="password"]').val();
    
    // Send AJAX POST request to /login
    $.post('/login', { email: email, password: password }, function(data) {
      if (data.valid === true) {
        // Login success
        alert('Login successful!');
        // Redirect to account page
        window.location.href = '/account';
      } else {
        // Login failed, shows error message 
        $('#errormsg').removeClass('hidemessage').addClass('showmessage');
      }
    });
  });
});
