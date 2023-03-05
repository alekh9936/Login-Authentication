function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // check if username and password are valid
  if (username === "" || password === ""){
    alert("Credentials required")
  }
  if (username === "valid_username" && password === "valid_password") {
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
}
