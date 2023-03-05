Papa.parse('users.csv', {
  download: true,
  header: true,
  complete: function(results) {
    // Iterate over each row in the CSV file
    for (var i = 0; i < results.data.length; i++) {
      var row = results.data[i];

      // Check if the entered username and password match this row in the CSV file
      if (row.username === document.getElementById('username').value && row.password === document.getElementById('password').value) {
        // If there's a match, allow the user to access the secured content
        window.location.href = 'secured-content.html';
        return;
      }
    }

    // If there's no match, display an error message
    document.getElementById('error-message').innerText = 'Invalid username or password';
  }
});
