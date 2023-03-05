function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Read the CSV file and compare the username and password
  // Use a library like PapaParse (https://www.papaparse.com/) to parse the CSV file
  // Example code assuming PapaParse is used:
  Papa.parse("users.csv", {
    download: true,
    complete: function(results) {
      var users = results.data;
      var found = false;
      for (var i = 0; i < users.length; i++) {
        if (users[i][0] == username && users[i][1] == password) {
          found = true;
          break;
        }
      }
      if (found) {
        alert("Login successful!");
      } else {
        alert("Invalid username or password");
      }
    }
  });
}

