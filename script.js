function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // check if username and password are valid
  if (username === "" || password === ""){
    alert("Credentials required")
  }
  if (username === "Admin" && password === "Admin"){
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
}
