function login() {
  // Get input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username==''||password==''){
    alert("All credentials should be filled")
  }

  // Read CSV file
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      var rows = xhr.responseText.split("\n");
      for (var i = 0; i < rows.length; i++) {
        var columns = rows[i].split(",");
        if (username == columns[0] && password == columns[1]) {
          // Login successful, redirect to desired page
          window.location.href = "https://example.com/dashboard";
          return;
        }
      }
      // Login failed, display error message
      alert("Invalid username or password.");
    }
  };
  xhr.open("GET", "users.csv", true);
  xhr.send();
}
